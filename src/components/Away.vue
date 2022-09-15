<template lang="pug">
q-page(padding)
	.container
		.row.items-center.cursor-pointer(@click="$router.back()")
			q-btn(flat round icon="mdi-arrow-left-thin-circle-outline").q-mr-sm
			.text-h6 {{ colors.zag }}
</template>

<script setup lang="ts">
import { useColor } from '@/stores/colors'

const colors = useColor()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
