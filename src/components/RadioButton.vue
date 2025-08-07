<template>
  <label class="radio-button">
    <input
      type="radio"
      :name="name"
      :value="value"
      v-model="model"
      class="radio-input"
    />
    <span class="radio-button-custom"></span>
    <span class="radio-button-text">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  name: string,
	value: string,
}>();
const model = defineModel<string>()
</script>