<template>
	<div class="input-container">
		<label
			class="input-label"
			:for="inputId"
		>
			{{ label }}
			<sup v-if="required">*</sup>
		</label>
		<textarea
			class="textarea"
			:id="inputId"
			v-model="model"
			:placeholder="placeholder"
		></textarea>
		<div class="input-length">{{ model?.length }} / 250</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	required: boolean,
  label: string,
	placeholder: string,
	inputId: string,
}>();

const model = defineModel<string>();
</script>