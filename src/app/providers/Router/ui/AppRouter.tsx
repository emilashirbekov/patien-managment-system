import { Appointment } from '@/pages/web/Appointment/ui/Appointment'
import Doctors from '@/pages/Dashboard/Doctors/Doctors'
import { Login } from '@/pages/Dashboard/Login'
import { Main } from '@/pages/Dashboard/Main'
import { Home } from '@/pages/web/Home/Home'
import { RoutePath } from '@/shared/config/routeConfig'
import { DashboardLayout } from '@/widgets/Dashboard/DashboardLayout'
import { WebLayout } from '@/widgets/Web/WebLayout/ui/WebLayout'
import { Route, Routes } from 'react-router'
import Patients from '@/pages/Dashboard/Patients/ui/Patients'
import { Departments } from '@/pages/Dashboard/Departments/Departments'
import AddDoctor from '@/pages/Dashboard/Doctors/ui/AddDoctor/AddDoctor'
import ChangeDoctor from '@/pages/Dashboard/Doctors/ui/ChangeDoctor/ChangeDoctor'
import AddPatient from '@/pages/Dashboard/Patients/ui/AddPatient/AddPatient'
import ChangePatient from '@/pages/Dashboard/Patients/ui/ChangePatient/ChangePatient'
import { ErrorPage } from '@/widgets/Web/ErrorPage/ui/ErrorPage'
import notFound from '@/shared/assets/404.png'
import { Info } from '@/widgets/Dashboard/Info/Info'

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route>
					<Route path={RoutePath.Login} element={<Login />} />
					<Route path={RoutePath.Register} element={<Login />} />
				</Route>

				<Route element={<DashboardLayout />}>
					<Route path={RoutePath.admin} element={<Main />} />
					<Route path={RoutePath.Doctors} element={<Doctors />} />
					<Route path={RoutePath.add_doctor} element={<AddDoctor />} />
					<Route
						path={`${RoutePath.change_doctor}/:id`}
						element={<ChangeDoctor />}
					/>
					<Route path={RoutePath.Patients} element={<Patients />} />
					<Route path={RoutePath.add_patient} element={<AddPatient />} />
					<Route
						path={`${RoutePath.change_patient}/:id`}
						element={<ChangePatient />}
					/>
					<Route path={RoutePath.Departments} element={<Departments />} />
				</Route>

				<Route element={<WebLayout />}>
					<Route path={RoutePath.home} element={<Home />} />
					<Route path={RoutePath.Appointment} element={<Appointment />} />
					<Route path={RoutePath.patient_info} element={<Info />} />
				</Route>
				<Route
					path='*'
					element={
						<ErrorPage
							title='Service Unavailable'
							description='You may have mistyped the address or the page may have moved.'
							image={notFound}
						/>
					}
				/>
			</Routes>
		</>
	)
}
