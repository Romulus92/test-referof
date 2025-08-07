<template>
	<Modal>
		<template #default="{ close }">
			<h2>Создание промокода</h2>
			<Tabs :tabs :activeTab="step" @changeActiveTab="changeStep"/>
			<form class="form" v-show="step === 1">
				<InputElement type="text" :required="true" input-id="name" label="Название промокода" placeholder="Введи название" v-model="name"/>
				<InputElement type="text" :required="true" input-id="title" label="Заголовок" placeholder="Введи заголовок" v-model="title"/>
				<TextArea :required="true" input-id="comment" label="Сопроводительный текст" placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»" v-model="comment"/>
				<InputElement type="number" :required="true" input-id="title" label="Укажи количество баллов" placeholder="100" v-model="points">
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
				<DatePicker v-model:startDate="startDate" v-model:startTime="startTime" v-model:endDate="endDate" v-model:endTime="endTime" v-model:isWithoutEndDate="isWithoutEndDate"></DatePicker>
				<InputElement type="number" :required="true" input-id="activation_limit" label="Введите лимит активаций (шт.)" placeholder="1000" v-model="activation_limit" />
				<div class="radio-button-group">
					<RadioButton v-model="getMode" value="create" name="create">Создать промокод без отправки</RadioButton>
					<RadioButton v-model="getMode" value="send" name="send">Отправить промокод всем пользователям</RadioButton>
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
const name = ref<string>('');
const title = ref<string>('');
const comment = ref<string>('');
const points = ref<number>();
const activation_limit = ref<number>();
const startDate = ref<string>(new Date().toLocaleDateString('ru-RU'));
const startTime = ref<string>('10:00');
const endDate = ref<string>(new Date().toLocaleDateString('ru-RU'));
const endTime = ref<string>('22:00');
const isWithoutEndDate = ref<boolean>(false);
const getMode = ref<'create' | 'send'>('create');

const changeStep = (value: number) => {
	step.value = value
}

provide('isWithoutEndDate', isWithoutEndDate)
</script>