import React, { ChangeEvent, useEffect, useState } from 'react'
import cls from './Login.module.scss'
import loginImg from '@/shared/assets/login.jpg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginSchema } from '@/features/Auth/model/types/loginSchema'
import { LoginForm } from '@/features/Auth/ui/LoginForm/LoginForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import {
	useDoctorLoginMutation,
	useLoginMutation,
	useRegistrationMutation,
} from '@/features/Auth/model/services/authAPI'

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
	const [userType, setUserType] = useState('patient')
	const [authType, setAuthType] = useState('register')
	const handleChangeUserType = (e: ChangeEvent<HTMLInputElement>) => {
		setUserType(e.target.value)
	}

	const [
		registration,
		{ error: registrationError, isSuccess: registerSuccess },
	] = useRegistrationMutation()
	const [login, { error: loginError, isSuccess }] = useLoginMutation()

	const [
		doctorLogin,
		{ error: doctorLoginError, isSuccess: doctorLoginSuccess },
	] = useDoctorLoginMutation()

	const [adminLogin, { error: adminLoginError, isSuccess: adminLoginSuccess }] =
		useDoctorLoginMutation()

	const navigate = useNavigate()
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

		const handleLogin = (loginFunction: (data: typeof loginData) => void) => {
			loginFunction(loginData)
			if (userType === 'patient') {
				localStorage.setItem('user_type', 'patient')
				localStorage.setItem('patient_name', user_data.username)
			}
			if (userType === 'doctor') {
				localStorage.setItem('user_type', 'doctor')
			}
			if (userType === 'admin') {
				localStorage.setItem('user_type', 'admin')
			}
			reset()
		}

		if (
			pathname === RoutePath.Register &&
			userType === 'patient' &&
			authType === 'register'
		) {
			registration(registrationData)
			reset()
		} else {
			switch (userType) {
				case 'patient':
					handleLogin(login)
					break
				case 'doctor':
					handleLogin(doctorLogin)
					break
				case 'admin':
					handleLogin(adminLogin)
					break
				default:
					console.error('Unknown user type')
					break
			}
		}
	}

	useEffect(() => {
		if (isSuccess) {
			navigate(RoutePath.home)
		}
		if (doctorLoginSuccess || adminLoginSuccess) {
			navigate(RoutePath.admin)
		}
	}, [isSuccess, navigate, doctorLoginSuccess, adminLoginSuccess])

	return (
		<section className={cls.signIn}>
			<div className={cls.signIn__container}>
				<img src={loginImg} alt='login image' />
				<LoginForm
					authType={authType}
					userType={userType}
					handleChangeUserType={handleChangeUserType}
					watch={watch}
					onSubmit={onSubmit}
					handleSubmit={handleSubmit}
					register={register}
					errors={errors}
					success={registerSuccess}
					error={loginError || doctorLoginError || adminLoginError}
				/>
			</div>
		</section>
	)
}
