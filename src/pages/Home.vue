<template lang="pug">
q-page(padding).flex.flex-center
	q-card.test
		.text-h6 Панель
</template>

<script setup lang="ts">
import { useColor } from '@/stores/colors'
import { ref } from 'vue'

const dark = ref(true)
const colors = useColor()
</script>

<style scoped lang="scss">
.myflex {
	display: flex;
	justify-content: center;
	align-items: center;
}
.test {
	width: 800px;
	padding: 1rem;
	translate: 0 -200px;
}
</style>
