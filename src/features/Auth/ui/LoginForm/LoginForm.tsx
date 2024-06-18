import React, { ChangeEvent } from 'react'
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
import { Message } from '@/widgets/Dashboard/Message/ui/Message'

interface LoginFormProps {
	onSubmit: (form: LoginSchema) => void
	handleSubmit: UseFormHandleSubmit<LoginSchema, FieldValues>
	register: UseFormRegister<LoginSchema>
	errors: FieldErrors<LoginSchema>
	success: any
	watch: any
	authType: string
	userType: string
	handleChangeUserType: (e: ChangeEvent<HTMLInputElement>) => void
	error: FetchBaseQueryError | SerializedError
}

export const LoginForm: React.FC<LoginFormProps> = props => {
	const {
		onSubmit,
		handleChangeUserType,
		handleSubmit,
		register,
		errors,
		watch,
		error,
		userType,
		authType,
		success,
	} = props
	const { pathname } = useLocation()

	return (
		<div className={cls.signIn__form}>
			<label
				className={`${cls.custom__radio} ${
					userType === 'patient' ? cls.checked : ''
				}`}
			>
				<span>Пациент</span>
				<input
					id='patient'
					onChange={handleChangeUserType}
					type='radio'
					name='radio'
					value='patient'
					defaultChecked
				/>
			</label>

			<label
				className={`${cls.custom__radio} ${
					userType === 'doctor' ? cls.checked : ''
				}`}
			>
				<span>Врач</span>
				<input
					id='doctor'
					onChange={handleChangeUserType}
					type='radio'
					name='radio'
					value='doctor'
				/>
			</label>

			<label
				className={`${cls.custom__radio} ${
					userType === 'admin' ? cls.checked : ''
				}`}
			>
				<span>Админ</span>
				<input
					id='admin'
					onChange={handleChangeUserType}
					type='radio'
					name='radio'
					value='admin'
				/>
			</label>

			<h2>
				{pathname === '/register' && authType === 'register'
					? 'Регистрация'
					: 'Войти'}
			</h2>
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
				{error && (
					<Message type='error' text='Нет пользователя с такими данными !' />
				)}
				{success && (
					<Message type='success' text='Вы успешно зарегистрированы!' />
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
					<>
						{userType !== 'patient' ? (
							''
						) : (
							<div className={cls.social__account}>
								Нет аккаунта ?{' '}
								<Link to={RoutePath.Register}>Зарегистрироваться</Link>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}
