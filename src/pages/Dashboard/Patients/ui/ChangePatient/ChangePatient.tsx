import cls from '../AddPatient/AddPatient.module.scss'
import { useForm } from 'react-hook-form'
import { ChangePatientForm } from './ChangePatientForm'

const ChangePatient = () => {
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
		<section className={cls.container}>
			<ChangePatientForm
				watch={watch}
				//@ts-ignore
				register={register}
				//@ts-ignore
				handleSubmit={handleSubmit}
				reset={reset}
				//@ts-ignore
				errors={errors}
			/>
		</section>
	)
}

export default ChangePatient
