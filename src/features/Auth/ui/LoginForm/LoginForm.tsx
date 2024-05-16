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

interface LoginFormProps {
	onSubmit: (form: LoginSchema) => void
	handleSubmit: UseFormHandleSubmit<LoginSchema, FieldValues>
	register: UseFormRegister<LoginSchema>
	errors: FieldErrors<LoginSchema>
	error: string
}

export const LoginForm: React.FC<LoginFormProps> = props => {
	const { onSubmit, handleSubmit, register, errors, error } = props

	return (
		<div className={cls.signIn__form}>
			<h2>Вход</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='email'>Почта</label>
				<input
					{...register('email', {
						required: 'Введите почту',
						minLength: {
							value: 10,
							message: 'Почта не может быть меньше 10 символов',
						},
						pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
					})}
					id='email'
					type='text'
					placeholder='Введите почту'
				/>
				{errors.email && <p className={cls.error}>{errors.email.message}</p>}
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
				{/* <div className={cls.signIn__form__action}>
					<div>
						<Input type='checkbox' variant='check' />
						<span>Запомнить меня</span>
					</div>
					<p>Forgot password ?</p>
				</div> */}
				<Button variant='primary' type='submit'>
					Войти
				</Button>
			</form>
			{error && <p className={cls.error}>{error}</p>}
			{/* <div className={cls.social}>
				<div className={cls.social__account}>
					Need an account ? <span>Sign Up</span>
				</div>
				<div>
					<Google />
					<Facebook />
					<Twitter />
				</div>
			</div> */}
		</div>
	)
}
