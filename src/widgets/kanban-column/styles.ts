import styled from 'styled-components'

interface ColumnProps {
	$isOver?: boolean
	$statusId?: number
}

export const ColumnWrapper = styled.div.attrs<ColumnProps>(props => ({
	$isOver: props.$isOver,
	$statusId: props.$statusId,
}))<ColumnProps & React.HTMLAttributes<HTMLDivElement>>`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: stretch;
	width: 100%;
	max-width: 449px;
	transition: all 0.2s;
	${props =>
		props.$isOver &&
		`
        background: rgba(25, 118, 210, 0.1);
        border: 2px dashed #1976d2;
    `}
`

export const Column = styled.div<ColumnProps>`
	flex: 1;
	background: #f5f5f5;
	border-radius: 8px;
	padding: 12px;
	min-width: 250px;
	max-height: 70vh; /* Ограничиваем максимальную высоту */
	display: flex;
	flex-direction: column;
	gap: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	background: ${props => {
		switch (props.$statusId) {
			case 0:
				return '#F5FAF9' // Ожидание
			case 1:
				return '#FAFAF5' // В работе
			case 2:
				return '#F5F7FA' // Готово
			default:
				return '#FFFFFF'
		}
	}};
`

export const TasksContainer = styled.div`
	overflow-y: auto; /* Добавляем вертикальный скролл */
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 8px;

	/* скроллбар */
	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #a8a8a8;
	}
`

export const PlusIcon = styled.span`
	font-size: 18px;
`
