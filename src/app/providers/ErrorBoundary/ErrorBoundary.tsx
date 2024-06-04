import { ErrorPage } from '@/widgets/Web/ErrorPage/ui/ErrorPage'
import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import errorImg from '@/shared/assets/500.png'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			return (
				<Suspense fallback=''>
					<ErrorPage
						title='Internal Server Error'
						description='You do not have permission to view this resource'
						image={errorImg}
					/>
				</Suspense>
			)
		}

		return children
	}
}

export default ErrorBoundary
