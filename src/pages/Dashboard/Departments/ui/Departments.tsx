import cls from './Departments.module.scss'
import { Search } from '@/widgets/Dashboard/Search/Search'
import { DepartmentsList } from '@/entities/Departments'
import { AddDepartment } from '@/features/Departments/ui/AddDepartment'
import { useState } from 'react'

const Departments = () => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<section className={cls.department}>
			<div className={cls.content}>
				<div className={cls.content__header}>
					<p>Список отделов</p>
					<div>
						<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
					</div>
					<AddDepartment />
				</div>
				<DepartmentsList searchQuery={searchQuery} />
			</div>
		</section>
	)
}

export default Departments
