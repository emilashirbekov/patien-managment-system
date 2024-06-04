import React from 'react'
import cls from './LoginForm.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import {
	FieldErrors,
	FieldValues,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { LoginSchema } from '../../model/types/loginSchema'
import { Link, useLocation } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

interface LoginFormProps {
	onSubmit: (form: LoginSchema) => void
	handleSubmit: UseFormHandleSubmit<LoginSchema, FieldValues>
	register: UseFormRegister<LoginSchema>
	errors: FieldErrors<LoginSchema>
	watch: any
	error: FetchBaseQueryError | SerializedError
}

export const LoginForm: React.FC<LoginFormProps> = props => {
	const { onSubmit, handleSubmit, register, errors, watch } = props
	const { pathname } = useLocation()
	Cookies.set(
		'access_token',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NDk2MzYzLCJpYXQiOjE3MTc0OTI3NjMsImp0aSI6IjYxNjE1MjViODdlZTRhNGM4MTJhYzBmMjcyMWUxN2Y2IiwidXNlcl9pZCI6IjMwMGY0YmFhLTBhMWQtNDJlOS1iOWE1LTIyODMyYWZhZjg4MyJ9.5oVrWnRx9qqHEmjrTd2URknClo1WxzLiDUk1P3VYQqI'
	)
	return (
		<div className={cls.signIn__form}>
			<h2>{pathname === '/register' ? 'Регистрация' : 'Войти'}</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{pathname === RoutePath.Register ? (
					<div className={cls.inputs}>
						<div>
							<label htmlFor='username'>Имя пользователя</label>
							<input
								{...register('username', {
									required: 'Введите имя пользователя',
								})}
								id='username'
								type='text'
								placeholder='Введите имя пользователя'
							/>
							{errors.username && (
								<p className={cls.error}>{errors.username.message}</p>
							)}

							<label htmlFor='first_name'>Имя</label>
							<input
								{...register('first_name', {
									required: 'Введите имя',
								})}
								id='first_name'
								type='text'
								placeholder='Введите имя'
							/>
							{errors.first_name && (
								<p className={cls.error}>{errors.first_name.message}</p>
							)}

							<label htmlFor='last_name'>Фамилия</label>
							<input
								{...register('last_name', {
									required: 'Введите фамилию',
								})}
								id='last_name'
								type='text'
								placeholder='Введите фамилию'
							/>
							{errors.last_name && (
								<p className={cls.error}>{errors.last_name.message}</p>
							)}

							<label htmlFor='password'>Пароль</label>
							<input
								{...register('password', {
									required: 'Введите пароль',
									minLength: {
										value: 8,
										message: 'Пароль не может быть меньше 8 символов',
									},
								})}
								id='password'
								type='password'
								placeholder='Введите пароль'
							/>
							{errors.password && (
								<p className={cls.error}>{errors.password.message}</p>
							)}
						</div>
						<div>
							<label htmlFor='password2'>Подтвердите пароль</label>
							<input
								{...register('password2', {
									required: 'Подтвердите пароль',
									validate: value =>
										value === watch('password') || 'Пароли не совпадают',
								})}
								id='password2'
								type='password'
								placeholder='Подтвердите пароль'
							/>
							{errors.password2 && (
								<p className={cls.error}>{errors.password2.message}</p>
							)}

							<label htmlFor='age'>Возраст</label>
							<input
								{...register('age', {
									required: 'Введите возраст',
								})}
								id='age'
								type='text'
								placeholder='Введите возраст'
							/>
							{errors.age && <p className={cls.error}>{errors.age.message}</p>}

							<label htmlFor='address'>Адрес</label>
							<input
								{...register('address', {
									required: 'Введите адрес',
								})}
								id='address'
								type='text'
								placeholder='Введите адрес'
							/>
							{errors.address && (
								<p className={cls.error}>{errors.address.message}</p>
							)}

							<label htmlFor='mobile'>Мобильный телефон</label>
							<input
								{...register('mobile', {
									required: 'Введите мобильный телефон',
									pattern: {
										value: /^\d{10,}$/,
										message: 'Введите правильный номер телефона',
									},
								})}
								id='mobile'
								type='text'
								placeholder='Введите мобильный телефон'
							/>
							{errors.mobile && (
								<p className={cls.error}>{errors.mobile.message}</p>
							)}
						</div>
					</div>
				) : (
					<div>
						<label htmlFor='username'>Имя пользователя</label>
						<input
							{...register('username', {
								required: 'Введите имя пользователя',
							})}
							id='username'
							type='text'
							placeholder='Введите имя пользователя'
						/>
						{errors.username && (
							<p className={cls.error}>{errors.username.message}</p>
						)}

						<label htmlFor='password'>Пароль</label>
						<input
							{...register('password', {
								required: 'Введите пароль',
								minLength: {
									value: 8,
									message: 'Пароль не может быть меньше 8 символов',
								},
							})}
							id='password'
							type='password'
							placeholder='Введите пароль'
						/>
						{errors.password && (
							<p className={cls.error}>{errors.password.message}</p>
						)}
					</div>
				)}
				<Button variant='primary' type='submit'>
					{pathname === RoutePath.Register ? 'Зарегистрироваться' : 'Войти'}
				</Button>
			</form>

			<div className={cls.social}>
				{pathname === RoutePath.Register ? (
					<div className={cls.social__account}>
						Есть аккаунт ? <Link to={RoutePath.Login}>Войти</Link>
					</div>
				) : (
					<div className={cls.social__account}>
						Нет аккаунта ?{' '}
						<Link to={RoutePath.Register}>Зарегистрироваться</Link>
					</div>
				)}
			</div>
		</div>
	)
}
