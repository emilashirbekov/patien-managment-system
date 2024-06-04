import { useMenu } from '@/app/providers/MenuProvider/lib/useMenu'
import cls from './Sidebar.module.scss'
import { routeItems } from '@/shared/const/routeItems'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import LogoutIcon from '@mui/icons-material/Logout'
import { useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { RoutePath } from '@/shared/config/routeConfig'

export const Sidebar = () => {
	const { isOpen } = useMenu()
	const navigate = useNavigate()
	const exit = () => {
		Cookies.remove('access_token')
		navigate('/login')
	}
	const { pathname } = useLocation()

	return (
		<section className={isOpen ? cls.sidebar__open : cls.sidebar}>
			<ul className={cls.sidebar__menu}>
				{routeItems.map((el, i) => (
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
