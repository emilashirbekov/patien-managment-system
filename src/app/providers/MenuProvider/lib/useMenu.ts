import { useContext } from 'react'
import { MenuContext } from '../ui/MenuContextProvider'

export const useMenu = () => {
	const context = useContext(MenuContext)
	return context
}
