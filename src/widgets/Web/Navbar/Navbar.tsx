import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import cls from './Navbar.module.scss'
import logo from '@/shared/assets/logo.jpg'
import { RoutePath } from '@/shared/config/routeConfig'

export const Navbar = () => {
	const [token, setToken] = useState(Cookies.get('access_token'))

	useEffect(() => {
		const handleTokenChange = () => setToken(Cookies.get('access_token'))

		window.addEventListener('cookiechange', handleTokenChange)

		return () => {
			window.removeEventListener('cookiechange', handleTokenChange)
		}
	}, [])

	return (
		<nav className={cls.nav}>
			<div className={cls.nav__logo}>
				<Link to={RoutePath.home}>
					<img src={logo} alt='Company logo' />
				</Link>
				<span>Medi</span>
			</div>
			<ul className={cls.nav__links}>
				<li>
					<Link to={RoutePath.home}>Главная</Link>
				</li>
				<li>
					<Link to={RoutePath.Appointment}>Записаться</Link>
				</li>
			</ul>
			{token ? (
				<Link className={cls.link} to={RoutePath.patient_info}>
					Личный кабинет
				</Link>
			) : (
				<Link className={cls.link} to={RoutePath.Login}>
					Войти
				</Link>
			)}
		</nav>
	)
}
