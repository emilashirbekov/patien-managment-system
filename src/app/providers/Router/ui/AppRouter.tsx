import { routeConfig } from '@/shared/config/routeConfig'
import { Route, Routes } from 'react-router'

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map(({ element, path }) => (
				<Route key={path} path={path} element={<>{element}</>} />
			))}
		</Routes>
	)
}
