<template lang="pug">
q-drawer(:model-value="show" side="left" :mini="colors.mini" :width="width" bordered :class="{fill : colors.panel}" @update:model-value="$emit('toggle')")
	q-list
		q-item(clickable v-ripple :to="page.url" v-for="page in pages" :key="page.id" )
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section {{ page.title }}

	q-btn(round flat dense :icon="minitoogle" @click="colors.mini = !colors.mini").mini.gt-sm
	.bot
		img(src="@/assets/img/logo-w.svg" v-if="colors.logobottom && !colors.mini").sal
		img(src="@/assets/img/dv.svg" v-if="colors.dv && !colors.mini").dv
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColor } from '@/stores/colors'

const props = defineProps({
	show: Boolean,
})
const colors = useColor()

const pages = [
	{
		id: 0,
		title: 'Начало',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'Вариант 1',
		icon: 'mdi-numeric-1-box',
		url: '/var1',
	},
	{
		id: 4,
		title: 'Вариант 1-1',
		icon: 'mdi-numeric-1-box',
		url: '/var11',
	},
	{
		id: 2,
		title: 'Вариант 2',
		icon: 'mdi-numeric-2-box',
		url: '/var2',
	},
	{
		id: 3,
		title: 'Светофор',
		icon: 'mdi-numeric-3-box',
		url: '/var3',
	},
]
const width = 256
const minitoogle = computed(() => {
	return colors.mini ? 'mdi-forwardburger' : 'mdi-backburger'
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.mini {
	position: absolute;
	bottom: 0.5rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.bottom {
	border-top: 1px solid var(--my-border-color);
	margin-top: 3rem;
}
.fill {
	color: #fff !important;
	.q-item--active,
	.q-item.q-router-link--active {
		color: #fff;
	}
}
.body--dark {
	.fill .q-item {
		color: #fff !important;
	}
	.fill .q-router-link--active {
		color: var(--q-primary-darken-2) !important;
	}
}
.q-item--active,
.q-item.q-router-link--active {
	background: rgba(0, 0, 0, 0.15);
	// background: var(--q-selection);
	// color: var(--q-primary-darken-2);
}
.bot {
	position: absolute;
	bottom: 10px;
	left: 5rem;
	> img {
		width: 100px;
	}
}
</style>
