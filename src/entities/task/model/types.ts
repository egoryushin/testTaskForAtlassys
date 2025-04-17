export interface ITask {
	id: string
	taskName: string
	assigneeId: number
	statusId: number
	createdAt: number
	updatedAt?: number
}

export interface IDictionary {
	assignees: Record<string, string>
	statuses: Record<string, string>
}
