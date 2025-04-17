import styled from 'styled-components'

interface ProgressFillProps {
	$percent: number
}

export const ProgressContainer = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	margin-top: 16px;
	display: flex;
	align-items: center;
	gap: 16px;
`

export const ProgressTextContainer = styled.div`
	display: flex;
	align-items: baseline;
	gap: 8px;
	min-width: fit-content;
`

export const ProgressText = styled.div`
	font-size: 14px;
	color: #537bf3;
	font-weight: 500;
	white-space: nowrap;
`

export const ProgressDescription = styled.span`
	font-size: 14px;
	color: #333;
	white-space: nowrap;
`

export const ProgressTrack = styled.div`
	width: 100%;
	height: 8px;
	background: #e0e0e0;
	border-radius: 4px;
	overflow: hidden;
`

export const ProgressFill = styled.div<ProgressFillProps>`
	width: ${props => props.$percent}%;
	height: 100%;
	background: #537bf3;
	border-radius: 4px;
	transition: width 0.3s ease;
`
