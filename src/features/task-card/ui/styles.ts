import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface CardProps {
	$statusId: number
}

export const Card = styled.div.attrs<CardProps>(props => ({
	$statusId: props.$statusId,
}))<CardProps & HTMLAttributes<HTMLDivElement>>`
	background: #ffffff;
	border-radius: 16px;
	padding: 16px;
	margin-bottom: 12px;
	border-left: 4px solid
		${props => {
			switch (props.$statusId) {
				case 0:
					return '#4DB6AC'
				case 1:
					return '#FFCA28'
				case 2:
					return '#7986CB'
			}
		}};
	position: relative;
	transition: transform 0.2s;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const TaskName = styled.h3`
	margin: 0 0 8px 0;
	font-size: 15px;
	font-weight: 500;
	color: #212121;
`

export const Assignee = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	margin-bottom: 10px;
	font-size: 13px;
	color: #616161;
`

export const StatusBadge = styled.div<CardProps>`
	display: inline-flex;
	align-items: center;
	padding: 4px 8px;
	border-radius: 12px;
	font-size: 12px;
	font-weight: 500;
	background-color: ${props => {
		switch (props.$statusId) {
			case 0:
				return '#FFF3E0'
			case 1:
				return '#E3F2FD'
			case 2:
				return '#E8F5E9'
		}
	}};
	color: ${props => {
		switch (props.$statusId) {
			case 0:
				return '#E65100'
			case 1:
				return '#0D47A1'
			case 2:
				return '#1B5E20'
		}
	}};
`

export const ActionButtons = styled.div`
	position: absolute;
	top: 12px;
	right: 12px;
	display: flex;
	gap: 6px;
`

export const IconButton = styled.button`
	background: rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #555;
	transition: all 0.2s;

	&:hover {
		background: rgba(0, 0, 0, 0.1);
		color: #000;
	}
`

export const EditForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const EditInput = styled.input`
	padding: 8px 12px;
	border: 1px solid #e0e0e0;
	border-radius: 12px;
	font-size: 14px;

	&:focus {
		outline: none;
		border-color: #2196f3;
	}
`

export const SaveButton = styled.button`
	background: #4caf50;
	color: white;
	border: none;
	border-radius: 6px;
	padding: 8px;
	cursor: pointer;
	font-size: 13px;

	&:hover {
		background: #3e8e41;
	}
`

export const Select = styled.select`
	padding: 8px;
	border: 1px solid #ddd;
	border-radius: 4px;
`
