import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MoveTaskPayload {
	fromColumn: number
	toColumn: number
	taskId: string
	index?: number // опционально, для вставки
}

export const dndSlice = createSlice({
	name: 'dnd',
	initialState: {},
	reducers: {
		moveTask: {
			reducer: (_state, _action: PayloadAction<MoveTaskPayload>) => {
				// логика в taskSlice
			},
			prepare: (payload: MoveTaskPayload) => ({ payload }),
		},
	},
})

export const { moveTask } = dndSlice.actions
export default dndSlice.reducer
