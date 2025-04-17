import { RefObject } from 'react'
import { ConnectDragSource } from 'react-dnd'
import { ITask } from '../../../entities/task/model/types'

export interface DragItem {
	type: string
	task: ITask
	index: number
	columnId: number
}

export const ItemTypes = {
	TASK: 'task',
}

export type DragRefType =
	| ((instance: HTMLDivElement | null) => void)
	| RefObject<HTMLDivElement>
	| ConnectDragSource
	| null
