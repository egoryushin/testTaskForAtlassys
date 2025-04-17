import styled from 'styled-components'

type StatusType = 'pending' | 'inProgress' | 'done'

interface StatusBarProps {
	$status: StatusType
}

export const StatusBarContainer = styled.div<StatusBarProps>`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 10px 15px;
	margin-bottom: 10px;
	background: ${props => {
		switch (props.$status) {
			case 'pending':
				return '#E0F2F1'
			case 'inProgress':
				return '#FFF8E1'
			case 'done':
				return '#E8EAF6'
		}
	}};
	color: ${props => {
		switch (props.$status) {
			case 'pending':
				return '#00796B'
			case 'inProgress':
				return '#FF8F00'
			case 'done':
				return '#3949AB'
		}
	}};
	border-radius: 8px;
	font-weight: 500;
`

export const StatusText = styled.span`
	flex-grow: 1;
`

export const StatusCount = styled.span`
	background: rgba(0, 0, 0, 0.1);
	padding: 2px 8px;
	border-radius: 16px;
	font-size: 0.9em;
`
