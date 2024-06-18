import { AdminAppointmentsList } from '@/entities/AdminAppointments'
import cls from './AdminAppointments.module.scss'
import { useState } from 'react'

const AdminAppointments = () => {
	return (
		<main className={cls.appointments}>
			<AdminAppointmentsList />
		</main>
	)
}

export default AdminAppointments
