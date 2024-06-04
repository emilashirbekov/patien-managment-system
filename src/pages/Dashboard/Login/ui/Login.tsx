import React, { useState } from 'react'
import cls from './Login.module.scss'
import loginImg from '@/shared/assets/login.jpg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginSchema } from '@/features/Auth/model/types/loginSchema'
import { LoginForm } from '@/features/Auth/ui/LoginForm/LoginForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import {
	useLoginMutation,
	useRegistrationMutation,
} from '@/features/Auth/model/services/authAPI'
import Cookies from 'js-cookie'

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
	} = useForm<LoginSchema>({
		mode: 'onBlur',
	})
	const [registration, { error }] = useRegistrationMutation()
	const [login, { error: loginError }] = useLoginMutation()
	const navigate = useNavigate()
	//@ts-ignore
	const { pathname } = useLocation()
	const onSubmit: SubmitHandler<LoginSchema> = formValue => {
		const user_data = {
			username: formValue.username,
			first_name: formValue.first_name,
			last_name: formValue.last_name,
			password: formValue.password,
			password2: formValue.password2,
		}
		const profile_data = {
			age: formValue.age,
			address: formValue.address,
			mobile: formValue.mobile,
		}
		const loginData = formValue
		const registrationData = { user_data, profile_data }
		pathname === RoutePath.Login
			? login(loginData)
			: registration(registrationData)
		reset()
	}
	return (
		<section className={cls.signIn}>
			<div className={cls.signIn__container}>
				<img src={loginImg} alt='login image' />
				<LoginForm
					watch={watch}
					onSubmit={onSubmit}
					handleSubmit={handleSubmit}
					register={register}
					errors={errors}
					error={loginError}
				/>
			</div>
		</section>
	)
}
