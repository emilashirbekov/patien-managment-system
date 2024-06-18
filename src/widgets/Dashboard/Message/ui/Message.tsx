import { useState } from 'react'
import cls from './Message.module.scss'

interface MessageProps {
	text: string
	type: string
}

export const Message = ({ text, type }: MessageProps) => {
	const [message, setMessage] = useState<string>(text)
	setTimeout(() => {
		setMessage('')
	}, 3000)
	return <p className={type === 'error' ? cls.error : cls.success}>{message}</p>
}
