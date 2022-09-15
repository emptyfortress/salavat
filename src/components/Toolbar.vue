<template lang="pug">
.mytoolbar
	q-btn(dense flat round icon="mdi-menu" @click="colors.toggleLeftDr")
	q-img(v-if="colors.toolbar && colors.logoleft" src="@/assets/img/logo-w.svg" height="48px" width="90px" fit="contain" @click="$router.back()").q-ml-md.cursor-pointer
	.tityl(@click="$router.back()")
		span(v-if="colors.date") {{ formattedString }}
		span(v-if="colors.sed") КСЭД
	q-space
	q-img(v-if="colors.toolbar && colors.logotop" src="@/assets/img/logo-w.svg" height="48px" width="90px" fit="contain" @click="$router.back()").gt-sm.cursor-pointer
	q-space
	q-btn(dense flat round icon="mdi-magnify")
	q-btn(dense round unelevated color="light-blue-2").q-ml-sm
		q-avatar
			img(src="@/assets/img/users/user0.svg")
			.mybadge
	q-btn(dense flat round icon="mdi-help-circle-outline").q-ml-sm
	q-btn(dense flat round icon="mdi-brightness-4" @click="colors.toggleRightDr").q-mx-sm

.subbar.gt-sm
	.left( v-show="colors.leftDrawer" :class="calcClass").gt-sm
		q-btn(v-if="!colors.mini" dense flat round size="sm" icon="mdi-cog-outline")
		q-btn(v-if="!colors.mini" dense flat round size="sm" icon="mdi-reload")
		q-btn(v-if="!colors.mini" dense flat round size="sm" icon="mdi-pin-off-outline")
		q-btn(v-if="colors.mini" flat icon="mdi-reload").full-width
	.right
		q-btn(unelevated icon="mdi-plus" color="primary-darken-3" label="Создать")
		q-btn(unelevated icon="mdi-message-star-outline" label="Обратная связь")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColor } from '@/stores/colors'
import { date } from 'quasar'

const colors = useColor()

const timeStamp = Date.now()
const formattedString = ref(
	date.formatDate(timeStamp, 'dddd, D MMMM', {
		days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		months: [
			'января',
			'февраля',
			'марта',
			'апреля',
			'мая',
			'июня',
			'июля',
			'августа',
			'сентября',
			'октября',
			'ноября',
			'декабря',
		],
	})
)
const calcClass = computed(() => {
	if (colors.panel && colors.mini) {
		return 'fill mini'
	} else if (colors.mini) {
		return 'mini'
	} else if (colors.panel) {
		return 'fill'
	} else return ''
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.mytoolbar {
	padding: 0 1rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 64px;
	line-height: 64px;
}
.tityl {
	font-size: 1.5rem;
	cursor: pointer;
	span {
		margin-left: 1rem;
	}
}
.subbar {
	color: var(--font-color);
	height: 36px;
	display: flex;
	line-height: 36px;
	.left,
	.right {
		padding: 0 0.5rem;
		box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.2);
	}
	.left {
		width: 256px;
		background: var(--bg-drawer);
		text-align: right;
		color: var(--q-primary);
		color: var(--text-color);
		&.fill {
			background: var(--q-primary);
			color: var(--q-primary-lighten-3);
		}
		&.mini {
			width: 58px;
			text-align: center;
		}
	}
	.right {
		flex-grow: 1;
		padding-left: 0;
		svg.icon {
			width: 1.7rem;
			height: 1.7rem;
		}
	}
}
.mybadge {
	position: absolute;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	left: -4px;
	bottom: 0px;
	background: green;
	border: 1.5px solid #fff;
}
</style>
