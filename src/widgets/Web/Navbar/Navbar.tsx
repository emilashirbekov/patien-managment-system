import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cls from './Navbar.module.scss'
import logo from '@/shared/assets/logo.jpg'
import { RoutePath } from '@/shared/config/routeConfig'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import CloseIcon from '@mui/icons-material/Close'
import { useMenu } from '@/app/providers/MenuProvider/lib/useMenu'
export const Navbar = () => {
	const [breakPoint, setBreakPoint] = useState(
		window.innerWidth < 768 ? 768 : null
	)
	const [isOpen, setIsOpen] = useState(false)
	const [type, setType] = useState(localStorage.getItem('user_type'))
	const { toggle } = useMenu()
	const { pathname } = useLocation()
	useEffect(() => {
		const handleTypeChange = () => setType(localStorage.getItem('userType'))

		window.addEventListener('localStorageChange', handleTypeChange)

		return () => {
			window.removeEventListener('localStorageChange', handleTypeChange)
		}
	}, [type])

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setBreakPoint(768)
			} else {
				setBreakPoint(null)
			}
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleOpen = () => {
		setIsOpen(prev => !prev)
	}

	useEffect(() => {
		setIsOpen(prev => !prev)
	}, [pathname])

	return (
		<nav className={cls.nav}>
			<div className={cls.nav__logo}>
				<Link to={RoutePath.home}>
					<img src={logo} alt='Company logo' />
				</Link>
				<span>Medi</span>
			</div>
			<ul className={`${breakPoint < 768 ? cls.nav__links : cls.none}`}>
				<li>
					<Link to={RoutePath.home}>Главная</Link>
				</li>
				<li>
					<Link to={RoutePath.Appointment}>Записаться</Link>
				</li>
			</ul>
			{type === 'patient' && (
				<Link
					className={`${breakPoint < 768 ? cls.link : cls.none}`}
					to={RoutePath.patient_info}
				>
					Личный кабинет
				</Link>
			)}
			{(type === 'doctor' || type === 'admin') && (
				<Link to={RoutePath.admin}>
					<AdminPanelSettingsIcon
						className={`${breakPoint < 768 ? cls.icon : cls.none}`}
						fontSize='large'
						color='primary'
					/>
				</Link>
			)}
			{!type && (
				<Link
					className={`${breakPoint < 768 ? cls.link : cls.none}`}
					to={RoutePath.Login}
				>
					Войти
				</Link>
			)}
			<MenuOutlined
				className={`${breakPoint < 768 ? cls.none : ''}`}
				fontSize='large'
				color='inherit'
				onClick={handleOpen}
			/>
			<ul
				className={`${
					isOpen && breakPoint ? cls.mobile__menu : cls.mobile__menu__closed
				}`}
			>
				<li>
					<Link to={RoutePath.home}>Главная</Link>
				</li>
				<li>
					<Link to={RoutePath.Appointment}>Записаться</Link>
				</li>
				<li>
					{type === 'patient' && (
						<Link className={cls.link} to={`${RoutePath.patient_info}`}>
							Личный кабинет
						</Link>
					)}
				</li>
				<li>
					{(type === 'doctor' || type === 'admin') && (
						<Link to={RoutePath.admin}>
							<AdminPanelSettingsIcon
								className={cls.icon}
								fontSize='large'
								color='primary'
							/>
						</Link>
					)}
				</li>
				<li>
					{!type && (
						<Link className={cls.link} to={RoutePath.Login}>
							Войти
						</Link>
					)}
				</li>
				<li>
					<CloseIcon
						onClick={handleOpen}
						fontSize='large'
						color='inherit'
						className={cls.burger__close}
					/>
				</li>
			</ul>
		</nav>
	)
}
