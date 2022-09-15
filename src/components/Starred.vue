<template lang="pug">
q-table(
	dense
	:columns="col"
	:rows="rows"
	flat
	hide-bottom).table
	template(v-slot:body="props")
		q-tr(:props="props" @click="go(props.row.name)")
			q-td(key="name" :props="props").el
				q-icon(name="mdi-star" color="warning").q-mr-sm
				span.link.ellipsis {{ props.row.name}}
			q-td(key="name" :props="props") {{ props.row.typ }}

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useColor } from '@/stores/colors'

const colors = useColor()
const router = useRouter()

const go = (e: string) => {
	colors.setZag(e)
	router.push('/away')
}

const col: MyColumn[] = [
	{ name: 'name', label: 'Название', field: 'name', align: 'left', sortable: true },
	{ name: 'typ', label: 'Тип', field: 'typ', align: 'left', sortable: true },
]

const rows = [
	{
		id: 0,
		name: 'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
		typ: 'На исполнение',
	},
	{
		id: 1,
		name: 'О вводе в действие Перечня товаров, работ, услуг закупки которых осуществляются только у субъектов малого и среднего предпринимательстваk',
		typ: 'Приказ',
	},
	{
		id: 2,
		name: 'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		typ: 'На ознакомление',
	},
	{
		id: 3,
		name: 'О согласовании финансового плана Автобазы на 2019 год',
		typ: 'Служебная записка',
	},
	{
		id: 4,
		name: 'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		typ: 'На ознакомление',
	},
	{
		id: 5,
		name: 'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2020 № ***',
		typ: 'На ознакомление',
	},
	{
		id: 6,
		name: 'О восстановлении работоспособности системы подогрева приточной вентиляции',
		typ: 'Служебная записка',
	},
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
