<template>
	<form class="form">
		<InputElement type="text" :required="true" input-id="name" label="Название промокода" placeholder="Введи название" v-model="name" :uppercase="true" :attrs="nameAttrs"/>
		<InputElement type="text" :required="true" input-id="title" label="Заголовок" placeholder="Введи заголовок" v-model="title" :attrs="titleAttrs"/>
		<TextArea :required="true" input-id="comment" label="Сопроводительный текст" placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»" v-model="comment" :attrs="commentAttrs"/>
		<InputElement type="number" :required="true" input-id="title" label="Укажи количество баллов" placeholder="100" v-model="points"  :attrs="pointsAttrs">
			<template v-slot:icon>
				<div class="input-icon">
					<img src="../assets/images/ref-coin.svg" alt="Ref Coin Icon">
				</div>
			</template>
		</InputElement>
		<div class="button-group">
			<button @click="close" class="button button_secondary">Отмена</button>
			<button @click="step = 2" class="button">Далее</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string, number } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

const { values, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    object({
      name: string().max(30).transform(val => val.toUpperCase()).required(),
			title: string().max(120).required(),
			comment: string().required(),
			points: number().required(),
    }),
  ),
});

const [name, nameAttrs] = defineField('name');
const [title, titleAttrs] = defineField('title');
const [comment, commentAttrs] = defineField('comment');
const [points, pointsAttrs] = defineField('title');
</script>