import { AddAdminAppointmentsForm } from '@/entities/AdminAppointments/ui/AddAdminAppointmentsForm/AddAdminAppointmentsForm'
import { useForm } from 'react-hook-form'
import cls from '../AdminAppointments.module.scss'

export const ChangeAdminAppointment = () => {
	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
	})
	return (
		<main className={cls.appointments}>
			<AddAdminAppointmentsForm
				register={register}
				reset={reset}
				watch={watch}
				handleSubmit={handleSubmit}
				errors={errors}
			/>
		</main>
	)
}
