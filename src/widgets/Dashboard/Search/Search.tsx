import React, { ChangeEvent, FormEvent } from 'react'
import cls from './Search.module.scss'
import SearchIcon from '@/shared/assets/search-icon.svg'

interface SearchProps {
	searchQuery?: string
	setSearchQuery?: any
}

export const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	return (
		<span className={cls.container}>
			<input
				placeholder='Поиск'
				className={cls.search}
				value={searchQuery}
				onChange={handleInputChange}
			/>
			<SearchIcon className={cls.search_icon} />
		</span>
	)
}
