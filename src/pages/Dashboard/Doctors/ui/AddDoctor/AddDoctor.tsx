import cls from './AddDoctor.module.scss'
import { useCreateDoctorMutation } from '@/features/DoctorsAction/model/services/doctorsAPI'
import { AddDoctorForm } from './AddDoctorForm'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/shared/const/url'

const AddDoctor = () => {
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
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			username: '',
			first_name: '',
			last_name: '',
			address: '',
			department: '',
			mobile: '',
		},
	})
	const [createDoctor] = useCreateDoctorMutation()

	return (
		<section className={cls.container}>
			<AddDoctorForm
				watch={watch}
				//@ts-ignore
				register={register}
				departments={departments}
				handleSubmit={handleSubmit}
				reset={reset}
				createDoctor={createDoctor}
				errors={errors}
			/>
		</section>
	)
}

export default AddDoctor
