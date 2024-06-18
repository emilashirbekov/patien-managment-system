import { RoutePath } from '@/shared/config/routeConfig'
import { Navbar } from '@/widgets/Dashboard/Navbar'
import { Sidebar } from '@/widgets/Dashboard/Sidebar'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const DashboardLayout = () => {
	const navigate = useNavigate()
	const userType = localStorage.getItem('user_type')

	useEffect(() => {
		if (userType === 'patient') {
			navigate(RoutePath.home)
		}
	}, [userType])

	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
		</>
	)
}
