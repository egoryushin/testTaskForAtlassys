import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	registration?: UseFormRegisterReturn
	label?: string
	error?: string
}

export const Input: React.FC<InputProps> = ({
	registration,
	label,
	error,
	...props
}) => {
	return (
		<S.Container>
			{label && <S.Label>{label}</S.Label>}
			<S.StyledInput {...registration} {...props} $hasError={!!error} />
			{error && <S.ErrorText>{error}</S.ErrorText>}
		</S.Container>
	)
}

export default Input
