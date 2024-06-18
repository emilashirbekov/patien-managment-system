import cls from './Patients.module.scss'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { useGetPatientsQuery } from '@/features/Patients/model/serivces/patientsAPI'
import { PatientsTypes } from '@/features/Patients/model/types/patients'
import { useState } from 'react'
import { PatientHeader, PatientList } from '@/entities/Patients'

const Patients = () => {
	const { data, isLoading, isError } = useGetPatientsQuery()
	const [searchQuery, setSearchQuery] = useState('')
	if (isLoading) return <PageLoader clsx={cls.loader} />
	if (isError) return <h1>Ошибка</h1>
	//@ts-ignore
	const patients: PatientsTypes[] = data.patients.map(patientsData => ({
		...patientsData.patient,
		first_name: patientsData.first_name,
		id: patientsData.id,
		last_name: patientsData.last_name,
		status: patientsData.status,
		username: patientsData.username,
	}))

	//@ts-ignore
	const filteredPatients = patients.filter(patient =>
		`${patient.first_name} ${patient.last_name} ${patient.username}`
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	)

	return (
		<section className={cls.patients}>
			<div className={cls.content}>
				<PatientHeader
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<PatientList filteredPatients={filteredPatients} />
			</div>
		</section>
	)
}

export default Patients
