import React, { LegacyRef } from 'react'
import { useAppDispatch } from '../../app/store/utils'
import { useColumnDrop } from '../../features/dnd/lib/useColumnDrop'
import { TaskCard } from '../../features/task-card/ui/card'

import { ITask } from '../../entities/task/model/types'
import { TaskForm } from '../../features/task-form/ui/form'
import { Button } from '../../shared/ui/button/styles'
import { StatusBar } from '../status-bar/ui/status-bar'
import * as S from './styles'

interface KanbanColumnProps {
	columnId: number
	tasks: ITask[]
	showForm: boolean
	onAddTask: () => void
	onCloseForm: () => void
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
	columnId,
	tasks,
	showForm,
	onAddTask,
	onCloseForm,
}) => {
	const dispatch = useAppDispatch()
	const [{ isOver }, drop] = useColumnDrop(columnId, dispatch)

	return (
		<S.ColumnWrapper
			ref={drop as unknown as LegacyRef<HTMLDivElement>}
			$isOver={isOver}>
			<StatusBar statusId={columnId} taskCount={tasks.length} />
			<S.Column $statusId={columnId}>
				<S.TasksContainer>
					{tasks.map((task, index) => (
						<TaskCard
							key={task.id}
							task={task}
							index={index}
							columnId={columnId}
						/>
					))}
				</S.TasksContainer>
				{showForm ? (
					<TaskForm columnId={columnId} onClose={onCloseForm} />
				) : (
					<Button $statusId={columnId} onClick={onAddTask}>
						<S.PlusIcon>+</S.PlusIcon>
						Новая задача
					</Button>
				)}
			</S.Column>
		</S.ColumnWrapper>
	)
}
