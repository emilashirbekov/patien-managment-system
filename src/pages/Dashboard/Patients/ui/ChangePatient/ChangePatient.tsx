import cls from '../AddPatient/AddPatient.module.scss'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/shared/const/url'
import { ChangePatientForm } from './ChangePatientForm'
import { useGetSinglePatientQuery } from '@/features/Patients/model/serivces/patientsAPI'
import { useParams } from 'react-router-dom'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'

const ChangePatient = () => {
	const [departments, setDepartments] = useState([])
	useEffect(() => {
		const getDepartments = async () => {
			const res = await fetch(`${BASE_URL}/departments`)
			setDepartments(await res.json())
		}
		getDepartments()
	}, [])
	const { id } = useParams()
	const { data, isLoading, isError } = useGetSinglePatientQuery(id)
	if (isLoading) return <h1>asa</h1>
	if (isError) return <h1>asa</h1>

	const flattenPatientData = (patientData: any) => {
		const { patient, ...otherDetails } = patientData
		return { ...otherDetails, ...patient }
	}

	const { singlePatient } = flattenPatientData(data)

	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			username: singlePatient.username,
			first_name: singlePatient.first_name,
			last_name: singlePatient.last_name,
			address: singlePatient.address,
			age: singlePatient.age,
			mobile: singlePatient.mobile,
		},
	})

	return (
		<section className={cls.container}>
			<ChangePatientForm
				watch={watch}
				//@ts-ignore
				register={register}
				departments={departments}
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
