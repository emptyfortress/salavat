<template lang="pug">
q-page(padding)
	.container
		.grid
			q-card(flat).one
				.hd Входящие задания
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in inbox" :key="item.id")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).two
				.hd Исходящие задания
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in outbox" :key="item.id")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).three
				.hd Мои документы
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in mydoc" :key="item.id")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).four
				.hd Входящие документы
				q-list(style="columns: 2").q-mt-sm
					q-item(dense clickable v-for="item in indoc" :key="item.id")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).five
				.hd Исходящие документы
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in outdoc" :key="item.id")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
			q-card(flat).six
				.hd ОРД
				q-list.q-mt-sm
					q-item(dense clickable v-for="item in outdoc" :key="item.id")
						q-item-section
							q-label {{item.label}}
						q-item-section(side v-if="item.badge")
							q-badge(color="primary" rounded outline ) {{item.badge}}
</template>

<script setup lang="ts">
import { useColor } from '@/stores/colors'
import { ref } from 'vue'
import { inbox, outbox, mydoc, indoc, outdoc } from '@/stores/data'
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
.hd {
	font-size: 1rem;
}
q-label {
	color: var(--q-link);
}
</style>
