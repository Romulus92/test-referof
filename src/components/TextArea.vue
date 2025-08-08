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
    	@input="throttledAutoResize"
			ref="textarea"
		></textarea>
		<div class="input-length">{{ model?.length }} / 250</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import throttle from '../utils/throttle';

defineProps<{
	required: boolean,
  label: string,
	placeholder: string,
	inputId: string,
}>();

const model = defineModel<string>();

const textarea = ref<HTMLTextAreaElement | null>(null);
const autoResize = () => {
  if (!textarea.value) return;
	textarea.value.style.height = 'auto'; // reset height to measure scrollHeight
	textarea.value.style.height = textarea.value.scrollHeight + 'px'; // set new height
};

const throttledAutoResize = throttle(autoResize, 150);
</script>