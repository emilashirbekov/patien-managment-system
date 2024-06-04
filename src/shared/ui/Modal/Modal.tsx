import cls from './Modal.module.scss'
import { createPortal } from 'react-dom'
import X from '@mui/icons-material/X'
interface ModalProps {
	isOpen: boolean
	children: React.ReactNode
}
export const Modal = ({ children, isOpen }: ModalProps) => {
	const handleClose = () => {
		const event = new CustomEvent('modal-close')
		window.dispatchEvent(event)
	}
	if (!isOpen) return null

	return createPortal(
		<div className={cls.modal_overlay}>
			<div className={cls.modal} onClick={e => e.stopPropagation()}>
				<button className={cls.modal__button} onClick={handleClose}>
					<X />
				</button>
				<div className={cls.modal_content}>{children}</div>
			</div>
		</div>,
		document.getElementById('modal-root') as HTMLElement
	)
}
