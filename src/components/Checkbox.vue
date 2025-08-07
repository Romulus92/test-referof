<template>
	<label class="checkbox">
		<input v-model="isWithoutEndDate" id="without_date" type="checkbox" class="checkbox-element">
		<span class="checkbox-checkmark"></span>
		<span class="checkbox-label">Без даты конца</span>
	</label>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isWithoutEndDate = inject('isWithoutEndDate')
</script>