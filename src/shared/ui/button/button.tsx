import React from 'react'
import * as S from './styles'

interface ButtonProps {
	statusId: number
	onClick: () => void
	children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	statusId,
	onClick,
	children,
}) => {
	return (
		<S.Button $statusId={statusId} onClick={onClick}>
			{children}
		</S.Button>
	)
}
