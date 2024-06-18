import { lazy } from 'react'

export const AdminAppointmentPageAsync = lazy(
	() => import('./AdminAppointments')
)
