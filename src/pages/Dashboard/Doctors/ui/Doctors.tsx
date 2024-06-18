import cls from './Doctors.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import { Search } from '@/widgets/Dashboard/Search/Search'
import { useState } from 'react'
import { DoctorList } from '@/features/Doctors'
const Doctors = () => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<section className={cls.doctors}>
			<div className={cls.content}>
				<div className={cls.content__header}>
					<p>Список докторов</p>
					<p>
						<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
					</p>
					<Link to={RoutePath.add_doctor} className={cls.plus}>
						+
					</Link>
				</div>
				<DoctorList searchQuery={searchQuery} />
			</div>
		</section>
	)
}

export default Doctors
