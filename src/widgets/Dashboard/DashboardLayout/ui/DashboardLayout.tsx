import { Navbar } from '@/widgets/Dashboard/Navbar'
import { Sidebar } from '@/widgets/Dashboard/Sidebar'
import { ReactNode } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

// interface DashboardLayoutProps {
// 	children: ReactNode
// }

export const DashboardLayout = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
		</>
	)
}
