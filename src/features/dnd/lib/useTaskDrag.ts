import { useDrag } from 'react-dnd/dist/hooks/useDrag'
import { ITask } from '../../../entities/task/model/types'
import { ItemTypes } from '../model/types'

export const useTaskDrag = (task: ITask, index: number, columnId: number) => {
	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.TASK,
		item: {
			type: ItemTypes.TASK,
			task,
			index,
			columnId,
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
		end: (item, monitor) => {
			if (!monitor.didDrop()) {
				return item
			}
		},
	})

	return [{ isDragging }, drag] as const
}
