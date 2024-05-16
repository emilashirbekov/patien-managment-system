import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface AppWrapperProps {
	children: ReactNode
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
	const location = useLocation()

	return (
		<>
			{location.pathname === '/login' ? (
				<>{children}</>
			) : (
				<>
					<Navbar />
					<Sidebar />
					{children}
				</>
			)}
		</>
	)
}
