import React from 'react'
import * as S from './styles'

interface ProgressBarProps {
	completed: number // процент выполнения
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed }) => {
	const percent = Math.min(100, Math.max(0, completed)) // ограничение 0-100

	return (
		<S.ProgressContainer>
			<S.ProgressText>{percent} %</S.ProgressText>
			<S.ProgressDescription>выполненных задач</S.ProgressDescription>
			<S.ProgressTrack>
				<S.ProgressFill $percent={percent} />
			</S.ProgressTrack>
		</S.ProgressContainer>
	)
}

export default ProgressBar
