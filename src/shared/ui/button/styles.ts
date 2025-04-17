import styled from 'styled-components'

interface ButtonProps {
	$statusId: number
}

export const Button = styled.button<ButtonProps>`
	width: 100%;
	padding: 10px 16px;
	border: 2px solid;
	border-radius: 12px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	font-size: 14px;
	transition: all 0.2s ease;
	background-color: transparent;

	${({ $statusId }) => {
		switch ($statusId) {
			case 0: // pending
				return `
          color: #4DB6AC;
          border-color: #B2DFDB;
          &:hover {
            background-color: rgba(77, 182, 172, 0.1);
            border-color: #4DB6AC;
          }
        `
			case 1: // work
				return `
          color: #FFB74D;
          border-color: #FFE0B2;
          &:hover {
            background-color: rgba(255, 183, 77, 0.1);
            border-color: #FFB74D;
          }
        `
			case 2: // done
				return `
          color: #7986CB;
          border-color: #C5CAE9;
          &:hover {
            background-color: rgba(121, 134, 203, 0.1);
            border-color: #7986CB;
          }
        `
			default:
				return `
          color: #757575;
          border-color: #E0E0E0;
        `
		}
	}}
`
