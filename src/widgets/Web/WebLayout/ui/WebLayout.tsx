import cls from './WebLayout.module.scss'
import { Navbar } from '../../Navbar/Navbar'
import { Footer } from '../../Footer/Footer'
import { Outlet } from 'react-router-dom'

export const WebLayout = () => {
	return (
		<main className={cls.container}>
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	)
}
