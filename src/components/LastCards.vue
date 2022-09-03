<template lang="pug">
q-table(
	dense
	:columns="col"
	:rows="rows"
	flat
	hide-bottom).table
	template(v-slot:body="props")
		q-tr(:props="props")
			q-td(key="name" :props="props").el
				.link.ellipsis {{ props.row.name }}
			q-td(key="changed" :props="props") {{ props.row.changed }}

</template>

<script setup lang="ts">
const col: MyColumn[] = [
	{
		name: 'name',
		label: 'Название',
		field: 'name',
		align: 'left',
		sortable: true,
		classes: 'link',
	},
	{
		name: 'changed',
		label: 'Изменен',
		field: 'changed',
		align: 'left',
		sortable: true,
		classes: 'text-no-wrap',
	},
]

const rows = [
	{ id: 0, name: 'ОРД Тема', changed: '31.08.2022 10:22' },
	{ id: 1, name: 'Задание на проверку', changed: '30.08.2022 12:22' },
	{ id: 2, name: 'ОРД Тестирование приказов по ОД', changed: '29.08.2022 14:12' },
	{
		id: 3,
		name: 'ОРД О проведении опытной эксплуатации в системе Docsvision 5.5 АХУ',
		changed: '29.08.2022 12:50',
	},
	{ id: 4, name: 'Приказ по филиалу № 223-5', changed: '28.08.2022 14:12' },
	{ id: 5, name: 'Заказ канцелярии на 3 кв.', changed: '28.08.2022 12:19' },
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
