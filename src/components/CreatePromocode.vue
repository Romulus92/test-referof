<template>
	<Modal>
		<h2>Создание промокода</h2>
		<Tabs :tabs :activeTab="step" @changeActiveTab="changeStep"/>
		<form class="form">
			<InputElement type="text" :required="true" input-id="name" label="Название промокода" placeholder="Введи название" v-model="name"/>
			<InputElement type="text" :required="true" input-id="title" label="Заголовок" placeholder="Введи заголовок" v-model="title"/>
			<TextArea :required="true" input-id="comment" label="Сопроводительный текст" placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»" v-model="comment"/>
			<InputElement type="number" :required="true" input-id="title" label="Заголовок" placeholder="100" v-model="points">
				<template v-slot:icon>
					<img src="../assets/images/ref-coin.svg" alt="Ref Coin Icon">
				</template>
			</InputElement>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';
import Tabs from './Tabs.vue';
import InputElement from './InputElement.vue';
import TextArea from './TextArea.vue';
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

const changeStep = (value: number) => {
	step.value = value
}
</script>