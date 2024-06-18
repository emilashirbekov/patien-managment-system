import AdminAppointments from '@/pages/Dashboard/AdminAppointments/ui/AdminAppointments'
import Departments from '@/pages/Dashboard/Departments/ui/Departments'
import AddDoctor from '@/pages/Dashboard/Doctors/ui/AddDoctor/AddDoctor'
import ChangeDoctor from '@/pages/Dashboard/Doctors/ui/ChangeDoctor/ChangeDoctor'
import Doctors from '@/pages/Dashboard/Doctors/ui/Doctors'
import { Login } from '@/pages/Dashboard/Login'
import AdminMain from '@/pages/Dashboard/Main/ui/AdminMain'
import AddPatient from '@/pages/Dashboard/Patients/ui/AddPatient/AddPatient'
import ChangePatient from '@/pages/Dashboard/Patients/ui/ChangePatient/ChangePatient'
import Patients from '@/pages/Dashboard/Patients/ui/Patients'
import { Appointment } from '@/pages/web/Appointment/ui/Appointment'
import Home from '@/pages/web/Home/ui/Home'
import { RoutePath } from '@/shared/config/routeConfig'
import { DashboardLayout } from '@/widgets/Dashboard/DashboardLayout'
import { Info } from '@/widgets/Dashboard/Info/Info'
import { ErrorPage } from '@/widgets/Web/ErrorPage/ui/ErrorPage'
import { WebLayout } from '@/widgets/Web/WebLayout/ui/WebLayout'
import { Route, Routes } from 'react-router'
import notFound from '@/shared/assets/404.png'
import { AddAdminAppointment } from '@/pages/Dashboard/AdminAppointments/ui/AddAdminAppointment/AddAdminAppointment'
import { ChangeAdminAppointment } from '@/pages/Dashboard/AdminAppointments/ui/ChangeAdminAppointments/ChangeAdminAppointments'

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route>
					<Route path={RoutePath.Login} element={<Login />} />
					<Route path={RoutePath.Register} element={<Login />} />
				</Route>

				<Route element={<DashboardLayout />}>
					<Route path={RoutePath.admin} element={<AdminMain />} />
					<Route path={RoutePath.Doctors} element={<Doctors />} />
					<Route path={RoutePath.add_doctor} element={<AddDoctor />} />
					<Route
						path={RoutePath.admin_appointments}
						element={<AdminAppointments />}
					/>
					<Route
						path={RoutePath.add_appointment}
						element={<AddAdminAppointment />}
					/>
					<Route
						path={`${RoutePath.change_appointment}/:id`}
						element={<ChangeAdminAppointment />}
					/>
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
					<Route path={RoutePath.departments} element={<Departments />} />
				</Route>

				<Route element={<WebLayout />}>
					<Route path={RoutePath.home} element={<Home />} />
					<Route path={RoutePath.Appointment} element={<Appointment />} />
					<Route path={`${RoutePath.patient_info}`} element={<Info />} />
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
