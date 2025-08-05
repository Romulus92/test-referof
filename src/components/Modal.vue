<template>
	<button @click="toggleModal" class="button modal-button">
		Создать промокод
	</button>
	
	<Teleport to="body">
		<div v-if="isModalOpen" class="modal-backdrop" @click="toggleModal($event)">
			<div class="modal">
				<div class="modal-close" @click="closeModal">
					<img src="../assets/images/close.svg" alt="Закрыть модальное окно">
				</div>
				<slot></slot>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isModalOpen = ref<boolean>(false);

const toggleModal = (e: Event) => {
	if (!e.composedPath().some((item) => item instanceof Element && item.classList.contains('modal'))) {
		isModalOpen.value = !isModalOpen.value;
	}
}

const closeModal = () => {
	isModalOpen.value = false;
}
</script>