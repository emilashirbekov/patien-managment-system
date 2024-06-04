export enum AppRoutes {
	Dashboard = 'admin',

	DOCTORS = 'Doctors',
	ADD_DOCTOR = 'add_doctor',
	CHANGE_DOCTOR = 'change_doctor',

	PATIENTS = 'Patients',
	ADD_PATIENT = 'add_patient',
	CHANGE_PATIENT = 'change_patient',
	PATIENT_INFO = 'patient_info',

	DEPARTMENTS = 'Departments',
	BOOK = 'Book',
	LOGIN = 'Login',
	REGISTER = 'Register',
	NOT_FOUND = 'not_found',

	HOME = 'home',
	APPOINTMENT = 'Appointment',
	PERSONAL_ACCOUNT = 'PersonalAccount',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.Dashboard]: '/admin',

	[AppRoutes.DOCTORS]: '/admin/doctors',
	[AppRoutes.ADD_DOCTOR]: '/admin/add_doctor',
	[AppRoutes.CHANGE_DOCTOR]: '/admin/change_doctor',

	[AppRoutes.ADD_PATIENT]: '/admin/add_patient',
	[AppRoutes.CHANGE_PATIENT]: '/admin/change_patient',
	[AppRoutes.PATIENT_INFO]: '/patient_info',
	[AppRoutes.PATIENTS]: '/admin/patients',

	[AppRoutes.DEPARTMENTS]: '/admin/Departments',
	[AppRoutes.BOOK]: '/admin/book',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.REGISTER]: '/register',
	[AppRoutes.NOT_FOUND]: '*',

	[AppRoutes.HOME]: '/',
	[AppRoutes.APPOINTMENT]: '/appointment',
	[AppRoutes.PERSONAL_ACCOUNT]: '/personal_account',
}
