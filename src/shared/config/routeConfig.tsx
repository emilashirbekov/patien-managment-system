import DoctorActions from '@/pages/Doctors/ui/AddDoctor/DoctorActions'
import Doctors from '@/pages/Doctors/Doctors'
import { Login } from '@/pages/Login'
import { RouteProps } from 'react-router-dom'
import { Patients } from '@/pages/Patients'
import { Main } from '@/pages/Main/ui/Home'
import { Home } from '@/pages/web/Home/Home'

export enum AppRoutes {
	MAIN = 'Main',
	DOCTORS = 'Doctors',
	ADD_DOCTOR = 'add_doctor',
	PATIENTS = 'Patients',
	BOOK = 'Book',
	BEDS = 'Beds',
	LOGIN = 'Login',
	NOT_FOUND = 'not_found',

	HOME = 'home',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.DOCTORS]: '/doctors',
	[AppRoutes.ADD_DOCTOR]: '/add_doctor',
	[AppRoutes.PATIENTS]: '/patients',
	[AppRoutes.BOOK]: '/book',
	[AppRoutes.BEDS]: '/beds',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.NOT_FOUND]: '*',
	[AppRoutes.HOME]: '/home',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.Main,
		element: <Main />,
	},
	[AppRoutes.DOCTORS]: {
		path: RoutePath.Doctors,
		element: <Doctors />,
	},
	[AppRoutes.ADD_DOCTOR]: {
		path: RoutePath.add_doctor,
		element: <DoctorActions />,
	},
	[AppRoutes.PATIENTS]: {
		path: RoutePath.Patients,
		element: <Patients />,
	},
	[AppRoutes.BOOK]: {
		path: RoutePath.Book,
	},
	[AppRoutes.BEDS]: {
		path: RoutePath.Beds,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.Login,
		element: <Login />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
	},

	[AppRoutes.HOME]: {
		path: RoutePath.home,
		element: <Home />,
	},
}
