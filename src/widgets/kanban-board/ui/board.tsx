import React, { useState } from 'react'
import { useAppSelector } from '../../../app/store/utils'
import ProgressBar from '../../../shared/ui/progress-bar/progress-bar'
import { KanbanColumn } from '../../kanban-column/column'
import * as S from './styles'

export const KanbanBoard: React.FC = () => {
	const { tasks, dictionary } = useAppSelector(state => state.tasks)
	const [showFormForColumn, setShowFormForColumn] = useState<number | null>(
		null
	)

	// группировка по статусам
	const tasksByStatus = Object.entries(dictionary.statuses).map(
		([id, name]) => ({
			id: Number(id),
			name,
			tasks: tasks.filter(task => task.statusId === Number(id)),
		})
	)

	// расчет прогресса выполнения
	const totalTaskCount = tasks.length
	const completedTaskCount = tasks.filter(task => task.statusId === 2).length
	const progressPercent =
		totalTaskCount > 0
			? Math.round((completedTaskCount / totalTaskCount) * 100)
			: 0

	return (
		<>
			<S.BoardContainer>
				{tasksByStatus.map(column => (
					<KanbanColumn
						key={column.id}
						columnId={column.id}
						tasks={column.tasks}
						showForm={showFormForColumn === column.id}
						onAddTask={() => setShowFormForColumn(column.id)}
						onCloseForm={() => setShowFormForColumn(null)}
					/>
				))}
			</S.BoardContainer>
			<ProgressBar completed={progressPercent} />
		</>
	)
}
