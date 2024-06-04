import { RoutePath } from '@/shared/config/routeConfig'
import { Button } from '@/shared/ui/Button/Button'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PersonalAccount = () => {
	const navigate = useNavigate()
	const handleLogout = () => {
		Cookies.remove('token')
		navigate(RoutePath.home)
	}
	return (
		<section>
			<h1>Личный кабинет</h1>
			<Button onClick={handleLogout} type='submit' variant='primary'>
				Выйти
			</Button>
		</section>
	)
}
