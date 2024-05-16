import { useState } from 'react'
import cls from './Message.module.scss'

interface MessageProps {
	text: string
}

export const Message = ({ text }: MessageProps) => {
	const [message, setMessage] = useState<string>(text)
	setTimeout(() => {
		setMessage('')
	}, 3000)
	return <p className={cls.message}>{message}</p>
}
