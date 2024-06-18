import { useMenu } from '@/app/providers/MenuProvider/lib/useMenu'
import cls from './Sidebar.module.scss'
import { routeItems, routeItemsDoctor } from '@/shared/const/routeItems'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import LogoutIcon from '@mui/icons-material/Logout'
import { useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { RoutePath } from '@/shared/config/routeConfig'
import { useEffect } from 'react'

export const Sidebar = () => {
	const { isOpen, toggle } = useMenu()
	const userType = localStorage.getItem('user_type')
	const navigate = useNavigate()
	const exit = () => {
		Cookies.remove('access_token')
		localStorage.removeItem('user_type')
		navigate(RoutePath.Login)
	}
	const { pathname } = useLocation()

	useEffect(() => {
		toggle()
	}, [pathname])

	return (
		<section className={isOpen ? cls.sidebar__open : cls.sidebar}>
			<ul className={cls.sidebar__menu}>
				{userType === 'doctor'
					? routeItemsDoctor.map((el, i) => (
							<li key={i + 1}>
								<p className={cls.sidebar__icons}>{<el.icon />}</p>
								<AppLink
									className={pathname === el.path ? cls.active : ''}
									to={el.path}
								>
									{el.name}
								</AppLink>
							</li>
					  ))
					: routeItems.map((el, i) => (
							<li key={i + 1}>
								<p className={cls.sidebar__icons}>{<el.icon />}</p>
								<AppLink
									className={pathname === el.path ? cls.active : ''}
									to={el.path}
								>
									{el.name}
								</AppLink>
							</li>
					  ))}

				<li onClick={exit}>
					<p className={cls.sidebar__icons}>
						<LogoutIcon />
					</p>

					<AppLink onClick={exit} to='#' className={cls.sidebar__exit}>
						Выйти
					</AppLink>
				</li>
			</ul>
		</section>
	)
}
