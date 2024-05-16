import { AppLink } from '@/shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import logo from '@/shared/assets/logo.jpg'
import MenuIcon from '@mui/icons-material/Menu'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import profile from '@/shared/assets/profile.jpg'
import SettingsIcon from '@mui/icons-material/Settings'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useMenu } from '@/app/providers/MenuProvider/lib/useMenu'

export const Navbar = () => {
	const { toggle } = useMenu()
	return (
		<nav className={cls.navbar}>
			<div className={cls.navbar__left}>
				<AppLink className={cls.navbar__left__logo} to='/'>
					<img src={logo} width='35' height='35' alt='' />
					<span>Medi</span>
				</AppLink>
				<span onClick={toggle} className={cls.navbar__burger}>
					<MenuIcon />
				</span>
			</div>
			<ul className={cls.navbar__right}>
				<li>
					<EmailIcon />
				</li>
				<li>
					<NotificationsIcon />
				</li>
				<li className={cls.navbar__right__profile}>
					<AppLink to={''}>
						<div>
							<p>Даниель Брук</p>
							<p>Админ</p>
						</div>
						<img src={profile} width={40} height={40} alt='Profile image' />
					</AppLink>
				</li>
				<li>
					<SettingsIcon />
				</li>
			</ul>
			<div className={cls.navbar__vertical}>
				<MoreVertIcon style={{ fontSize: '24px' }} />
			</div>
		</nav>
	)
}
