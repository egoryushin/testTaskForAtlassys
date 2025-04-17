import React, { JSX } from 'react'
import { FaCheckCircle, FaClock, FaSpinner } from 'react-icons/fa'
import * as S from './styles'

interface StatusBarProps {
	statusId: number
	taskCount: number
}

type StatusType = 'pending' | 'inProgress' | 'done'

export const StatusBar: React.FC<StatusBarProps> = ({
	statusId,
	taskCount,
}) => {
	const statusMap: Record<
		number,
		{ icon: JSX.Element; text: string; color: StatusType }
	> = {
		0: {
			icon: <FaClock size={16} />,
			text: 'В ожидании',
			color: 'pending',
		},
		1: {
			icon: <FaSpinner size={16} />,
			text: 'В работе',
			color: 'inProgress',
		},
		2: {
			icon: <FaCheckCircle size={16} />,
			text: 'Готово',
			color: 'done',
		},
	}

	const status = statusMap[statusId]
	if (!status) {
		return null
	}

	return (
		<S.StatusBarContainer $status={status.color}>
			{status.icon}
			<S.StatusText>{status.text}</S.StatusText>
			<S.StatusCount>{taskCount}</S.StatusCount>
		</S.StatusBarContainer>
	)
}
