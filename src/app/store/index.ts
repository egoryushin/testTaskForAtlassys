import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from '../../entities/task/model/taskSlice'
import { dndSlice } from '../../features/dnd/model/dndSlice'

export const store = configureStore({
	reducer: {
		tasks: taskSlice.reducer,
		dnd: dndSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
