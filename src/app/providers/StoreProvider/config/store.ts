import { appointmentsAPI } from '@/features/Appointments/model/services/AppointmentsAPI'
import { authAPI } from '@/features/Auth/model/services/authAPI'
import { departmentsAPI } from '@/features/Departments/model/services/departmentsAPI'
import { doctorsAPI } from '@/features/DoctorsAction/model/services/doctorsAPI'
import { patientsAPI } from '@/features/Patients/model/serivces/patientsAPI'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[doctorsAPI.reducerPath]: doctorsAPI.reducer,
		[authAPI.reducerPath]: authAPI.reducer,
		[appointmentsAPI.reducerPath]: appointmentsAPI.reducer,
		[departmentsAPI.reducerPath]: departmentsAPI.reducer,
		[patientsAPI.reducerPath]: patientsAPI.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			doctorsAPI.middleware,
			appointmentsAPI.middleware,
			authAPI.middleware,
			departmentsAPI.middleware,
			patientsAPI.middleware
		),
})

setupListeners(store.dispatch)
