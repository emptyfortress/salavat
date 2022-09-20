<template lang="pug">
q-page(padding)
	.container
		.grid
			q-card(flat).one
				.hd Входящие задания
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in inbox" :key="item.id" @click="go(item.label)")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).two
				.hd Исходящие задания
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in outbox" :key="item.id" @click="go(item.label)")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).three
				.hd Мои документы
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in mydoc" :key="item.id" @click="go1(item.label)")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).four
				.hd Входящие документы
				q-list(style="columns: 2").q-mt-sm
					q-item(dense clickable v-for="item in indoc" :key="item.id" @click="go1(item.label)")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).five
				.hd Исходящие документы
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in outdoc" :key="item.id" @click="go1(item.label)")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).six
				.hd ОРД
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in ord" :key="item.id" @click="go1(item.label)")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			.last
				.hd.cursor-pointer(@click="go1('Последние карточки')") Последние карточки
				component(:is="LastCards")
			.star
				.hd.cursor-pointer(@click="go1('Избранное')")
					q-icon(name="mdi-star" color="warning")
					|Избранное
				component(:is="Starred")
</template>

<script setup lang="ts">
import { inbox, outbox, mydoc, indoc, outdoc, ord } from '@/stores/data'
import LastCards from '@/components/LastCards.vue'
import Starred from '@/components/Starred.vue'
import { useRouter } from 'vue-router'
import { useColor } from '@/stores/colors'

const colors = useColor()
const router = useRouter()

const props = defineProps({
	to: {
		type: String,
		default: '/away',
	},
	to1: {
		type: String,
		default: '/away',
	},
})

const go = (e: string) => {
	colors.setZag(e)
	router.push(props.to)
}

const go1 = (e: string) => {
	colors.setZag(e)
	router.push(props.to1)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 1rem;
}
.q-card {
	padding: 1rem;
	&.one {
		grid-column: 1/5;
	}
	&.two {
		grid-column: 5/9;
	}
	&.three {
		grid-column: 9/13;
	}
	&.four {
		grid-column: 1/7;
	}
	&.five {
		grid-column: 7/10;
	}
	&.six {
		grid-column: 10/13;
	}
}
.last {
	margin-top: 1rem;
	grid-column: 1/7;
	.hd {
		cursor: pointer;
		color: var(--q-link);
	}
}
.hd {
	font-size: 1rem;
}
q-label {
	color: var(--q-link);
}
.star {
	margin-top: 1rem;
	grid-column: 7/13;
	.q-icon {
		margin-right: 0.5rem;
		margin-top: -2px;
	}
	.hd {
		cursor: pointer;
		color: var(--q-link);
	}
}
</style>
