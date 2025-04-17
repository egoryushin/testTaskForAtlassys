import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit/react'
import { moveTask } from '../../../features/dnd/model/dndSlice'
import data from './mocks/data.json'
import dictionary from './mocks/dictionary.json'
import { IDictionary, ITask } from './types'

interface TaskState {
	tasks: ITask[]
	dictionary: IDictionary
}

const initialState: TaskState = {
	tasks: data.map(task => ({
		...task,
		id: nanoid(), // генерация ID
		createdAt: Date.now(), // timestamp
	})),
	dictionary,
}

export const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		// добавление задачи
		addTask: {
			reducer: (state, action: PayloadAction<ITask>) => {
				state.tasks.push(action.payload)
			},
			// дополнительный prepare - если нам нужны какие-то преобразования
			prepare: (task: Omit<ITask, 'id'>) => {
				return {
					payload: {
						...task,
						id: `${task.taskName}-${task.assigneeId}-${Date.now()}`,
					},
				}
			},
		},
		// полное обновление задачи
		updateTask: (state, action: PayloadAction<ITask>) => {
			const index = state.tasks.findIndex(t => t.id === action.payload.id)
			if (index !== -1) {
				state.tasks[index] = {
					...state.tasks[index],
					...action.payload,
					updatedAt: Date.now(), // время обновления
				}
			}
		},
		// частичное обновление задачи
		patchTask: {
			reducer: (
				state,
				action: PayloadAction<{
					id: string
					changes: Partial<Omit<ITask, 'id'>>
				}>
			) => {
				const index = state.tasks.findIndex(t => t.id === action.payload.id)
				if (index !== -1) {
					state.tasks[index] = {
						...state.tasks[index],
						...action.payload.changes,
						updatedAt: Date.now(), // время обновления
					}
				}
			},
			// дополнительный prepare - если нам нужны какие-то преобразования
			prepare: (id: string, changes: Partial<Omit<ITask, 'id'>>) => ({
				payload: {
					id,
					changes,
				},
			}),
		},
		// удаление задачи
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
		},
		// изменение статуса задачи
		changeStatus: (
			state,
			action: PayloadAction<{ id: string; newStatusId: number }>
		) => {
			const task = state.tasks.find(task => task.id === action.payload.id)
			if (task) {
				task.statusId = action.payload.newStatusId
				task.updatedAt = Date.now()
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(moveTask, (state, action) => {
			const { toColumn, taskId, index } = action.payload

			// находим задачу
			const taskIndex = state.tasks.findIndex(t => t.id === taskId)
			if (taskIndex === -1) return

			// обновляем статус задачи
			state.tasks[taskIndex].statusId = toColumn
			state.tasks[taskIndex].updatedAt = Date.now()

			// фильтруем задачи для новой колонки
			const columnTasks = state.tasks.filter(t => t.statusId === toColumn)
			// удаляем перемещаемую задачу из массива (если она уже там)
			const tasksWithoutCurrent = columnTasks.filter(t => t.id !== taskId)
			// вставляем задачу на нужную позицию
			if (index !== undefined) {
				tasksWithoutCurrent.splice(index, 0, state.tasks[taskIndex])
			}
		})
	},
})

export const { updateTask, addTask, deleteTask, changeStatus, patchTask } =
	taskSlice.actions
export default taskSlice.reducer
