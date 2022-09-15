<template lang="pug">
q-page(padding)
	.container
		q-expansion-item(label="Задания" default-opened header-class="txt").inb
			.grid
				q-card(flat).list
					q-list
						q-item(clickable v-for="item in inbox.slice(1,5)" dense :key="item.id" @click="go(item.label)")
							q-item-section
								q-label {{item.label}}
							q-item-section(side v-if="item.badge")
								q-badge(color="primary") {{item.badge}}
						q-separator(color="primary").q-my-sm
						q-item(clickable v-for="item in outbox" dense :key="item.id" @click="go(item.label)")
							q-item-section
								q-label {{item.label}}
							q-item-section(side v-if="item.badge")
								q-badge(color="primary") {{item.badge}}

				q-card(flat).tab
					.hd.cursor-pointer(@click="go('Входящие')") Входящие
					component(:is="Inbox")

		q-expansion-item(label="Документы" default-opened header-class="txt").inb
			.grid1
				q-card(flat).four
					.hd Входящие документы
					q-list(style="columns: 2").q-mt-sm
						q-item(dense clickable v-for="item in indoc" :key="item.id" @click="go(item.label)")
							q-item-section
								q-label {{item.label}}
							q-item-section(side v-if="item.badge")
								q-badge(color="primary" rounded outline ) {{item.badge}}
				q-card(flat).five
					.hd Исходящие документы
					q-list.q-mt-sm
						q-item(dense clickable v-for="item in outdoc" :key="item.id" @click="go(item.label)")
							q-item-section
								q-label {{item.label}}
							q-item-section(side v-if="item.badge")
								q-badge(color="primary" rounded outline ) {{item.badge}}
						q-separator
						q-item(dense clickable)
							q-item-section
								q-label Я - автор
						q-item(dense clickable)
							q-item-section
								q-label Я готовил
				q-card(flat).six
					.hd ОРД
					q-list.q-mt-sm
						q-item(dense clickable v-for="item in ord" :key="item.id" @click="go(item.label)")
							q-item-section
								q-label {{item.label}}
							q-item-section(side v-if="item.badge")
								q-badge(color="primary" rounded outline ) {{item.badge}}
</template>

<script setup lang="ts">
import Inbox from '@/components/Inbox.vue'
import { useRouter } from 'vue-router'
import { useColor } from '@/stores/colors'

import { inbox, outbox, indoc, outdoc, ord } from '@/stores/data'

const colors = useColor()
const router = useRouter()

const go = (e: string) => {
	console.log(e)
	colors.setZag(e)
	router.push('/away')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid1 {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	.q-card {
		padding: 0.5rem;
	}
	.hd {
		font-size: 1rem;
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
}
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	.inb {
		grid-column: 1/-1;
	}
	.tab {
		grid-column: 2/-1;
		.hd {
			padding: 1rem;
			color: var(--q-link);
			padding-bottom: 0;
		}
	}
}
.q-badge {
	margin-top: 4px;
	height: 24px;
}
.list {
	background: #fff;
	padding: 0.5rem;
}
q-label {
	color: var(--q-link);
}
.four {
	grid-column: 1/3;
}
</style>
