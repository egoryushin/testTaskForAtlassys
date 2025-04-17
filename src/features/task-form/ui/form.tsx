import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../app/store/utils'
import { addTask } from '../../../entities/task/model/taskSlice'
import Input from '../../../shared/ui/input/input'
import * as S from './styles'

interface TaskFormProps {
	columnId: number
	onClose: () => void
}

interface FormData {
	taskName: string
	assigneeId: number
}

export const TaskForm: React.FC<TaskFormProps> = ({ columnId, onClose }) => {
	const dispatch = useAppDispatch()
	const { assignees } = useAppSelector(state => state.tasks.dictionary)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			assigneeId: 1,
		},
	})

	const onSubmit = (data: FormData) => {
		dispatch(
			addTask({
				taskName: data.taskName.trim(),
				assigneeId: data.assigneeId,
				statusId: columnId,
				createdAt: 0,
			})
		)
		onClose()
	}

	return (
		<S.FormContainer onSubmit={handleSubmit(onSubmit)}>
			<Input
				label='Название задачи'
				placeholder='Введите название задачи'
				autoFocus
				{...register('taskName', {
					required: 'Обязательное поле',
					minLength: {
						value: 3,
						message: 'Минимум 3 символа',
					},
				})}
				error={errors.taskName?.message}
			/>

			<S.FormSelect {...register('assigneeId', { valueAsNumber: true })}>
				{Object.entries(assignees).map(([id, name]) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
			</S.FormSelect>

			<S.FormActions>
				<S.SubmitButton type='submit'>Добавить</S.SubmitButton>
				<S.CancelButton type='button' onClick={onClose}>
					Отмена
				</S.CancelButton>
			</S.FormActions>
		</S.FormContainer>
	)
}
