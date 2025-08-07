<template>
	<div class="input-container">
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
				v-if="type === 'text'"
				class="input"
				:class="{uppercase: uppercase}"
				:id="inputId"
				type="text"
				v-model="model"
				:placeholder="placeholder"
			>
			<input
				v-else-if="type === 'number'"
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
	type: 'text' | 'number',
	required: boolean,
  label: string,
	placeholder: string,
	inputId: string,
	uppercase?: boolean,
}>();

const model = defineModel<string | number>();
</script>