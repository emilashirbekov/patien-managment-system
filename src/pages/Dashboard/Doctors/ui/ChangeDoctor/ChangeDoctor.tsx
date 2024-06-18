import cls from '../AddDoctor/AddDoctor.module.scss'
import {
	useCreateDoctorMutation,
	useGetSingleDoctorQuery,
} from '@/features/Doctors/model/services/doctorsAPI'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { ChangeDoctorForm } from './ChangeDoctorForm'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { useGetDepartmentsQuery } from '@/features/Departments'

const ChangeDoctor = () => {
	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
	})
	const { data: departments } = useGetDepartmentsQuery()
	const { id } = useParams()
	const { data, isLoading, isError } = useGetSingleDoctorQuery(id)
	const [createDoctor] = useCreateDoctorMutation()

	if (isLoading) return <PageLoader />
	if (isError) return <h1>Произошла ошибка</h1>

	//@ts-ignore
	const flattenPatientData = (doctorData: any) => {
		const { doctor, ...otherDetails } = doctorData
		return { ...otherDetails, ...doctor }
	}

	//@ts-ignore
	const singleDoctor = flattenPatientData(data.doctors)

	return (
		<section className={cls.container}>
			<ChangeDoctorForm
				watch={watch}
				register={register}
				departments={departments}
				handleSubmit={handleSubmit}
				reset={reset}
				createDoctor={createDoctor}
				errors={errors}
				//@ts-ignore
				singleDoctor={singleDoctor}
			/>
		</section>
	)
}

export default ChangeDoctor
