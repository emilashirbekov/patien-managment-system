import cls from './Search.module.scss'
import SearchIcon from '@/shared/assets/search-icon.svg'

export const Search = () => {
	return (
		<span className={cls.container}>
			<input placeholder='Поиск' className={cls.search}></input>

			<SearchIcon className={cls.search_icon} />
		</span>
	)
}
