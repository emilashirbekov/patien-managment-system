import cls from './AddDoctor.module.scss'
import { useCreateDoctorMutation } from '@/features/DoctorsAction/model/services/doctorsAPI'
import { DoctorForm } from './DoctorForm'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/shared/const/url'
import { Message } from '@/widgets/Message/ui/Message'

const DoctorActions = () => {
	const [departments, setDepartments] = useState([])
	useEffect(() => {
		const getDepartments = async () => {
			const res = await fetch(`${BASE_URL}/departments`)
			setDepartments(await res.json())
		}
		getDepartments()
	}, [])

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			first_name: '',
			last_name: '',
			middle_name: '',
			date_of_birth: '',
			gender: '',
			address: '',
			avatar: '',
			specialization: '',
		},
	})
	const [createDoctor, { isSuccess }] = useCreateDoctorMutation()

	return (
		<section className={cls.container}>
			<DoctorForm
				//@ts-ignore
				register={register}
				departments={departments}
				handleSubmit={handleSubmit}
				reset={reset}
				createDoctor={createDoctor}
				errors={errors}
			/>
			<Message text={isSuccess && 'Доктор успешно добавлен !'} />
		</section>
	)
}

export default DoctorActions
