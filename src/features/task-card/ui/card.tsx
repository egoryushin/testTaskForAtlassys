import React, { LegacyRef, useState } from 'react'
import { FaCheck, FaEdit, FaTrash, FaUser } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../../app/store/utils'
import { deleteTask, patchTask } from '../../../entities/task/model/taskSlice'
import { ITask } from '../../../entities/task/model/types'
import { useTaskDrag } from '../../dnd/lib/useTaskDrag'
import * as S from './styles'

export const TaskCard: React.FC<{
	task: ITask
	index: number
	columnId: number
}> = ({ task, index, columnId }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editedName, setEditedName] = useState(task.taskName)
	const [editedAssignee, setEditedAssignee] = useState(task.assigneeId)
	const [{ isDragging }, drag] = useTaskDrag(task, index, columnId)

	const dispatch = useAppDispatch()
	const { assignees, statuses } = useAppSelector(
		state => state.tasks.dictionary
	)

	const handleSave = () => {
		dispatch(
			patchTask(task.id, {
				taskName: editedName,
				assigneeId: editedAssignee,
			})
		)
		setIsEditing(false)
	}

	const handleDelete = () => {
		dispatch(deleteTask(task.id))
	}

	return (
		<S.Card
			$statusId={task.statusId}
			ref={drag as unknown as LegacyRef<HTMLDivElement>}
			style={{
				opacity: isDragging ? 0.5 : 1,
				cursor: 'grab',
			}}>
			{isEditing ? (
				<S.EditForm>
					<S.EditInput
						value={editedName}
						onChange={e => setEditedName(e.target.value)}
						autoFocus
					/>
					<S.Select
						value={editedAssignee}
						onChange={e => setEditedAssignee(Number(e.target.value))}>
						{Object.entries(assignees).map(([id, name]) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</S.Select>
					<S.ActionButtons>
						<S.IconButton onClick={handleSave}>
							<FaCheck size={12} />
						</S.IconButton>
						<S.IconButton onClick={() => setIsEditing(false)}>
							<FaTrash size={12} />
						</S.IconButton>
					</S.ActionButtons>
				</S.EditForm>
			) : (
				<>
					<S.TaskName>{task.taskName}</S.TaskName>
					<S.Assignee>
						<FaUser size={14} /> {assignees[task.assigneeId]}
					</S.Assignee>
					<S.StatusBadge $statusId={task.statusId}>
						{statuses[task.statusId]}
					</S.StatusBadge>
					<S.ActionButtons>
						<S.IconButton onClick={() => setIsEditing(true)}>
							<FaEdit size={12} />
						</S.IconButton>
						<S.IconButton onClick={handleDelete}>
							<FaTrash size={12} />
						</S.IconButton>
					</S.ActionButtons>
				</>
			)}
		</S.Card>
	)
}
