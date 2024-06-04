import cls from './AddPatient.module.scss'
import { useCreateDoctorMutation } from '@/features/DoctorsAction/model/services/doctorsAPI'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/shared/const/url'
import { AddPatientForm } from './AddPatientForm'
import { useCreatePatientMutation } from '@/features/Patients/model/serivces/patientsAPI'

const AddPatient = () => {
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
			age: '',
			mobile: '',
		},
	})
	const [createPatient] = useCreatePatientMutation()

	return (
		<section className={cls.container}>
			<AddPatientForm
				watch={watch}
				//@ts-ignore
				register={register}
				departments={departments}
				handleSubmit={handleSubmit}
				reset={reset}
				createPatient={createPatient}
				errors={errors}
			/>
		</section>
	)
}

export default AddPatient
