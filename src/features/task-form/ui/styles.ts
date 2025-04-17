import styled from 'styled-components'

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 12px;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin-top: 8px;
`

export const FormSelect = styled.select`
	padding: 8px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
	margin-bottom: 16px;

	&:focus {
		outline: none;
		border-color: #2196f3;
	}
`

export const FormActions = styled.div`
	display: flex;
	gap: 8px;
`

export const SubmitButton = styled.button`
	flex: 1;
	padding: 8px;
	background: #4caf50;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background: #3e8e41;
	}
`

export const CancelButton = styled.button`
	flex: 1;
	padding: 8px;
	background: #f44336;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background: #d32f2f;
	}
`
