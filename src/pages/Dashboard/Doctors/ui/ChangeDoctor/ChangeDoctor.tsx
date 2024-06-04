import cls from '../AddDoctor/AddDoctor.module.scss'
import {
	useCreateDoctorMutation,
	useGetSingleDoctorQuery,
} from '@/features/DoctorsAction/model/services/doctorsAPI'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/shared/const/url'
import { useParams } from 'react-router-dom'
import { ChangeDoctorForm } from './ChangeDoctorForm'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'

const ChangeDoctor = () => {
	const [departments, setDepartments] = useState([])
	useEffect(() => {
		const getDepartments = async () => {
			const res = await fetch(`${BASE_URL}/departments`)
			setDepartments(await res.json())
		}
		getDepartments()
	}, [])
	const { id } = useParams()
	const { data, isLoading, isError } = useGetSingleDoctorQuery(id)
	if (isLoading) return <PageLoader />
	if (isError) return <h1>Произошла ошибка</h1>
	//@ts-ignore
	const flattenPatientData = (doctorData: any) => {
		const { doctor, ...otherDetails } = doctorData
		return { ...otherDetails, ...doctor }
	}
	//@ts-ignore
	const singleDoctor = flattenPatientData(data.doctors)

	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			username: singleDoctor.username,
			first_name: singleDoctor.first_name,
			last_name: singleDoctor.last_name,
			address: singleDoctor.address,
			department: singleDoctor.department,
			mobile: singleDoctor.mobile,
		},
	})
	const [createDoctor] = useCreateDoctorMutation()
	return (
		<section className={cls.container}>
			<ChangeDoctorForm
				watch={watch}
				//@ts-ignore
				register={register}
				departments={departments}
				//@ts-ignore
				handleSubmit={handleSubmit}
				reset={reset}
				createDoctor={createDoctor}
				//@ts-ignore
				errors={errors}
			/>
		</section>
	)
}

export default ChangeDoctor
