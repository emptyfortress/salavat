<template lang="pug">
q-page(padding)
	q-card.test
		.text-h6
			q-icon(name="mdi-information-outline" color="primary").q-mr-md
			|Информация
		ul
			li Слева варианты дизайна
			li По иконке справа вверху <q-icon name="mdi-brightness-4" /> открывается панель с настройками
			li Можно настроить цвет, положение логотип, размер шрифта и тп
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useColor } from '@/stores/colors'

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
	margin: 4rem auto;
	padding: 1rem;
}
ul {
	font-size: 1rem;
}
</style>
