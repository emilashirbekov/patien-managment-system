import { LoginSchema } from '@/features/Auth/model/types/loginSchema'
import React from 'react'

const useInput = () => {
	const [formValue, setFormValue] = React.useState<LoginSchema>({
		email: '',
		password: '',
	})
	const [error, setError] = React.useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormValue(prevFormValue => ({ ...prevFormValue, [name]: value }))
	}

	return {
		formValue,
		error,
		handleChange,
		setError,
	}
}

export default useInput
