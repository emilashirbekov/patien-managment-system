import React, { useState } from 'react'
import cls from './Login.module.scss'
import loginImg from '@/shared/assets/login.jpg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginSchema } from '@/features/Auth/model/types/loginSchema'
import Cookies from 'js-cookie'
import { LoginForm } from '@/features/Auth/ui/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<LoginSchema>({
		mode: 'onBlur',
	})
	const [error, setError] = useState<string>('')
	const token = Math.random() * 20
	const navigate = useNavigate()
	const onSubmit: SubmitHandler<LoginSchema> = formValue => {
		if (
			formValue.email !== 'emkaashirbekov7910a@gmail.com' ||
			formValue.password !== '12345678'
		) {
			setError('Вы ввели неправильный логин или пароль! Попробуйте еще раз')
		} else {
			Cookies.set('access_token', token.toString())
			navigate('/')
			reset()
		}
	}

	return (
		<section className={cls.signIn}>
			<div className={cls.signIn__container}>
				<img src={loginImg} alt='login image' />
				<LoginForm
					onSubmit={onSubmit}
					handleSubmit={handleSubmit}
					register={register}
					errors={errors}
					error={error}
				/>
			</div>
		</section>
	)
}
