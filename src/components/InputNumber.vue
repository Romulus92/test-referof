<template>
	<div class="input-content">
		<label
			class="input-label"
			:for="inputId"
		>
			{{ label }}
			<sup v-if="required">*</sup>
		</label>
		<div class="input-wrapper">
			<slot name="icon"></slot>
			<input
				class="input"
				:id="inputId"
				type="number"
				v-model="model"
				:placeholder="placeholder"
			>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	required: boolean,
  label: string,
	placeholder: string,
	inputId: string,
}>();

const model = defineModel<number>();
</script>