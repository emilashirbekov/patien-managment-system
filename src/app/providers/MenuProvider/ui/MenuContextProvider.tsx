import React from 'react'

interface ContextProps {
	isOpen: boolean
	toggle: () => void
}

export const MenuContext = React.createContext<ContextProps | undefined>(
	undefined
)

interface MenuContextProviderProps {
	children: React.ReactNode
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
	children,
}: MenuContextProviderProps) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	const toggle = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<MenuContext.Provider value={{ isOpen, toggle }}>
			{children}
		</MenuContext.Provider>
	)
}
