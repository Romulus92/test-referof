<template>
	<div class="tabs">
		<div
			v-for="(item, index) in tabs"
			class="tabs-item"
			:class="{active: item.value === activeTab}"
			@click="$emit('changeActiveTab', item.value)" :key="index"
		>
			<span class="tabs-text">{{item.text}}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type Tab from '../interfaces/TabInterface.ts'
defineProps<{
  tabs: Tab[],
	activeTab: number,
}>();
</script>