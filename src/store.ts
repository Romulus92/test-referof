import { useForm } from 'vee-validate';
import { object, string, number } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

export function useStore() {
	const { handleSubmit, errors, defineField } = useForm({
		validationSchema: toTypedSchema(
			object({
				name: string().uppercase().max(30).required(),
				title: string().max(120).required(),
				comment: string().required(),
				points: number().required(),
				startDate: string().required(),
				startTime: string().required(),
				endDate: string(),
				endTime: string(),
				limit: number().positive(),
				mode: string(),
			}),
		),
		initialValues: {
			name: '',
			title: '',
			comment: '',
			points: undefined,
			startDate: new Date().toLocaleDateString('ru-RU'),
			startTime: '10:00',
			endDate: new Date().toLocaleDateString('ru-RU'),
			endTime: '22:00',
			limit: 100,
			mode: 'create',
		}
	});

	const [name, nameAttrs] = defineField('name');
	const [title, titleAttrs] = defineField('title');
	const [comment, commentAttrs] = defineField('comment');
	const [points, pointsAttrs] = defineField('title');
	const [startDate, startDateAttrs] = defineField('name');
	const [startTime, startTimeAttrs] = defineField('title');
	const [endDate, endDateAttrs] = defineField('comment');
	const [endTime, endTimeAttrs] = defineField('title');
	const [limit, limittAttrs] = defineField('comment');
	const [mode, modesAttrs] = defineField('title');

  return { handleSubmit, errors, name, nameAttrs, title, titleAttrs, comment, commentAttrs, points, pointsAttrs, startDate, startDateAttrs, startTime, startTimeAttrs, endDate, endDateAttrs, endTime, endTimeAttrs, limit, limittAttrs, mode, modesAttrs}
}