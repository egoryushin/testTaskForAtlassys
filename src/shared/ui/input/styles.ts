import styled from 'styled-components'

interface StyledInputProps {
	$hasError: boolean
}

export const Container = styled.div`
	margin-bottom: 16px;
`

export const Label = styled.label`
	display: block;
	margin-bottom: 4px;
	font-size: 14px;
`

export const StyledInput = styled.input<StyledInputProps>`
	width: 100%;
	padding: 8px;
	border: 1px solid ${({ $hasError }) => ($hasError ? '#f44336' : '#ddd')};
	border-radius: 12px;
	font-size: 14px;

	&:focus {
		outline: none;
		border-color: #2196f3;
	}
`

export const ErrorText = styled.span`
	color: #f44336;
	font-size: 12px;
	margin-top: 4px;
	display: block;
`
