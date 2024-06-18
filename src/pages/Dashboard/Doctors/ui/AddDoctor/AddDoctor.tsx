import cls from './AddDoctor.module.scss'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/shared/const/url'
import { AddDoctorForm } from '@/features/Doctors'

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

	return (
		<section className={cls.container}>
			<AddDoctorForm
				watch={watch}
				//@ts-ignore
				register={register}
				departments={departments}
				handleSubmit={handleSubmit}
				reset={reset}
				errors={errors}
			/>
		</section>
	)
}

export default AddDoctor
