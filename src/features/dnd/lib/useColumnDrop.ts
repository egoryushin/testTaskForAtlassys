import { useDrop } from 'react-dnd/dist/hooks/useDrop'
import { AppDispatch } from '../../../app/store'
import { moveTask } from '../model/dndSlice'
import { DragItem, ItemTypes } from '../model/types'

export const useColumnDrop = (columnId: number, dispatch: AppDispatch) => {
	return useDrop({
		accept: ItemTypes.TASK,
		drop: (item: DragItem) => {
			if (item.columnId !== columnId) {
				dispatch(
					moveTask({
						fromColumn: item.columnId,
						toColumn: columnId,
						taskId: item.task.id,
						index: 0, // начало новой колонки
					})
				)
			}
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	})
}
