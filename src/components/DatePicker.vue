<template>
	<div class="datepicker">
		<span class="input-label">Срок действия промокода<sup>*</sup></span>
		<div class="datepicker-group">
			<div class="datepicker-item">
				<label class="datepicker-heading">Дата начала</label>
				<div class="datepicker-wrapper">
					<div class="datepicker-input" @click="openPicker('startDateInput')">
						<div class="datepicker-icon">
							<img src="../assets/images/calendar.svg" alt="Иконка календаря">
						</div>
						<div class="datepicker-info">
							<span class="datepicker-name">Дата</span>
							<span class="datepicker-value">{{ startDate }}</span>
						</div>
						<input
							type="date"
							class="datepicker-native"
							name="start-date"
							v-model="startDate"
							ref="startDateInput"
						/>
					</div>
					<input
						type="time"
						v-model="startTime"
						class="timepicker-input"
					/>
				</div>
			</div>
			<div v-if="!isWithoutEndDate" class="datepicker-item">
				<label class="datepicker-heading">Дата конца</label>
				<div class="datepicker-wrapper">
					<div class="datepicker-input" @click="openPicker('endDateInput')">
						<div class="datepicker-icon">
							<img src="../assets/images/calendar.svg" alt="Иконка календаря">
						</div>
						<div class="datepicker-info">
							<span class="datepicker-name">Дата</span>
							<span class="datepicker-value">{{ endDate }}</span>
						</div>
						<input
							type="date"
							class="datepicker-native"
							name="end-date"
							v-model="endDate"
							ref="endDateInput"
						/>
					</div>
					<input
						type="time"
						v-model="endTime"
						class="timepicker-input"
					/>
				</div>
			</div>
		</div>
		<Checkbox v-model="isWithoutEndDate"></Checkbox>
	</div>
</template>

<script setup lang="ts">
import Checkbox from './Checkbox.vue'
import { ref } from 'vue'
const startDate = defineModel('startDate')
const startTime = defineModel('startTime')
const endDate = defineModel('endDate')
const endTime = defineModel('endTime')
const isWithoutEndDate = defineModel('isWithoutEndDate');
const startDateInput = ref<HTMLInputElement | null>(null);
const endDateInput = ref<HTMLInputElement | null>(null);

const refs = {
  startDateInput,
	endDateInput
};

type RefName = keyof typeof refs;

const openPicker = (item: RefName) => {
	refs[item]?.value?.showPicker();
}
</script>