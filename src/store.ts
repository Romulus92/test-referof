import { ref } from 'vue';
import { useForm } from 'vee-validate';
import type { InferType } from 'yup';
import { object, string, number } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

export function useStore() {
	const step = ref<number>(1);

	const formSchema = object({
		name: string().uppercase().max(30, 'Название промокода не должно быть длиннее 30 символов').required('Название промокода обязательно').default(''),
		title: string().max(120, 'Заголовок не должно быть длиннее 120 символов').required('Заголовок обязателен').default(''),
		comment: string().max(250, 'Сопроводительный текст не должно быть длиннее 250 символов').default(''),
		points: number().transform((value, originalValue) => {return originalValue === '' || isNaN(value) ? undefined : value;}).required('Количество баллов обязательно').default(undefined),
		startDate: string().required('Дата начала обязательна').default(new Date().toLocaleDateString('ru-RU')).label('Дата начала'),
		startTime: string().required('Время начала обязательно').default('10:00').label('Время начала'),
		endDate: string().default(undefined).transform(value => new Date(value).toLocaleDateString('ru-RU')).label('Дата конца').test("is-after-start", "Дата окончания не может быть раньше даты начала", function (value) {
      const { startDate } = this.parent;
      if (!startDate || !value) return true;
      return new Date(value) >= new Date(startDate);
    }),
		endTime: string().default(undefined).label('Время конца'),
		limit: number().transform((value, originalValue) => {return originalValue === '' || isNaN(value) ? undefined : value;}).positive().required('Лимит активаций обязателен').default(undefined).label('Лимит активаций'),
		mode: string().default('create').label('Количество баллов'),
	});

	const { handleSubmit, errors, defineField, validateField, resetForm, setFieldTouched } = useForm({
		validationSchema: toTypedSchema(formSchema),
	});

	const [name, nameAttrs] = defineField('name');
	const [title, titleAttrs] = defineField('title');
	const [comment, commentAttrs] = defineField('comment');
	const [points, pointsAttrs] = defineField('points');
	const [startDate, startDateAttrs] = defineField('startDate');
	const [startTime, startTimeAttrs] = defineField('startTime');
	const [endDate, endDateAttrs] = defineField('endDate');
	const [endTime, endTimeAttrs] = defineField('endTime');
	const [limit, limittAttrs] = defineField('limit');
	const [mode, modesAttrs] = defineField('mode');

	const validateFirstStep = async () => {
		const stepOneFields = ['name', 'title', 'comment', 'points'];

		// Validate only step 1 fields
		const results = await Promise.all(stepOneFields.map(field => validateField(field as "name" | "title" | "comment" | "points" | "startDate" | "startTime" | "endDate" | "endTime" | "limit" | "mode")));

		// If all valid, move to next step
		if (results.every(result => result.valid)) {
			step.value = 2;
		}
	}

	const validateForm = async () => {
		handleSubmit(onSubmit)();
	}

	type FormValues = InferType<typeof formSchema>

	const onSubmit = (formValues: FormValues) => {
		console.table(formValues)
		step.value = 1;
		resetForm();
	}

  return { handleSubmit, errors, step, name, nameAttrs, title, titleAttrs, comment, commentAttrs, points, pointsAttrs, startDate, startDateAttrs, startTime, startTimeAttrs, endDate, endDateAttrs, endTime, endTimeAttrs, limit, limittAttrs, mode, modesAttrs, validateFirstStep, validateForm, setFieldTouched}
}