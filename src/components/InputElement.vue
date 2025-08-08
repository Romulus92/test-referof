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
				@keydown="onKeyDown"
				:placeholder="placeholder"
			>
		</div>
		<slot name="errors"></slot>
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

// Minimal JS to allow only digits and necessary control keys
const onKeyDown = (e: KeyboardEvent) => {
  const allowedKeys = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    'Tab',
    'Home',
    'End',
  ];
  
  // Allow Ctrl/Command + C, V, X (copy, paste, cut)
  if ((e.ctrlKey || e.metaKey) && ['c', 'v', 'x'].includes(e.key.toLowerCase())) {
    return;
  }
  
  // Allow digits 0-9 only
  if (
    allowedKeys.includes(e.key) || 
    (e.key >= '0' && e.key <= '9')
  ) {
    return; // Allow keypress
  }
  
  // Otherwise prevent input
  e.preventDefault();
}
</script>