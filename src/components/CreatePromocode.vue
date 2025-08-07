<template>
	<Modal>
		<template #default="{ close }">
			<h2>Создание промокода</h2>
			<Tabs :tabs :activeTab="step" @changeActiveTab="changeStep"/>
			<form class="form" v-show="step === 1">
				<InputElement type="text" :required="true" input-id="name" label="Название промокода" placeholder="Введи название" v-model="store.name.value" :uppercase="true"/>
				<InputElement type="text" :required="true" input-id="title" label="Заголовок" placeholder="Введи заголовок" v-model="store.title.value"/>
				<TextArea :required="true" input-id="comment" label="Сопроводительный текст" placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»" v-model="store.comment.value"/>
				<InputElement type="number" :required="true" input-id="points" label="Укажи количество баллов" placeholder="100" v-model="store.points.value">
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
			<form class="form" v-show="step === 2">
				<DatePicker v-model:startDate="store.startDate.value" v-model:startTime="store.startTime.value" v-model:endDate="store.endDate.value" v-model:endTime="store.endTime.value" v-model:isWithoutEndDate="isWithoutEndDate"></DatePicker>
				<InputElement type="number" :required="true" input-id="activation_limit" label="Введите лимит активаций (шт.)" placeholder="1000" v-model="store.limit.value" />
				<div class="radio-button-group">
					<RadioButton v-model="store.mode.value" value="create" name="create">Создать промокод без отправки</RadioButton>
					<RadioButton v-model="store.mode.value" value="send" name="send">Отправить промокод всем пользователям</RadioButton>
				</div>
				<div class="button-group">
					<button @click="step = 1" class="button button_secondary">Назад</button>
					<button @click="step = 2" class="button">Создать</button>
				</div>
			</form>
		</template>
	</Modal>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import Modal from './Modal.vue';
import Tabs from './Tabs.vue';
import InputElement from './InputElement.vue';
import TextArea from './TextArea.vue';
import DatePicker from './DatePicker.vue';
import RadioButton from './RadioButton.vue';
import type Tab from '../interfaces/TabInterface'

import { useStore } from '../store.ts';

const store = useStore();
console.log(store.errors)

const tabs: Tab[] = [
	{
		value: 1,
		text: "Шаг 1: Основное"
	},
	{
		value: 2,
		text: "Шаг 2: Настройки промокода"
	}
]

const step = ref<number>(1)
const isWithoutEndDate = ref<boolean>(false);

const changeStep = (value: number) => {
	step.value = value
}

provide('isWithoutEndDate', isWithoutEndDate)
</script>