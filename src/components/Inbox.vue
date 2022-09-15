<template lang="pug">
q-table(
	dense
	:columns="cols"
	:rows="items"
	flat
	bordered
	:rows-per-page-options="[0]"
	hide-bottom).table.q-mt-sm

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(@click="readAll").small
			q-th(v-for="col in props.cols" :props="props" :key="col.name") {{col.label}}

	template(v-slot:body="props")
		q-tr(:props="props" @click="go(props.row.name)")
			q-td(:class="{ unread : props.row.unread === true}" @click.stop="props.row.unread = !props.row.unread").small
			q-td(key="name" :props="props").el
				.link.ellipsis {{ props.row.name }}
			q-td(key="type" :props="props") {{ props.row.type }}
			q-td(key="author" :props="props") {{ props.row.author }}
			q-td(key="changed" :props="props") {{ props.row.changed }}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { rows } from '@/stores/data'
import { useRouter } from 'vue-router'
import { useColor } from '@/stores/colors'

const items = reactive(rows)
const readAll = () => {
	return items.map((item) => (item.unread = !item.unread))
}

const colors = useColor()
const router = useRouter()
const go = (e: string) => {
	colors.setZag(e)
	router.push('/away')
}

const cols: MyColumn[] = [
	{
		name: 'name',
		label: 'Название',
		field: 'name',
		align: 'left',
		sortable: true,
		classes: 'link',
	},
	{
		name: 'type',
		label: 'Вид задания',
		field: 'type',
		align: 'left',
		sortable: true,
		classes: 'text-no-wrap',
	},
	{
		name: 'author',
		label: 'Автор',
		field: 'author',
		align: 'left',
		sortable: true,
		classes: 'text-no-wrap',
	},
	{
		name: 'changed',
		label: 'Создано',
		field: 'changed',
		align: 'left',
		sortable: true,
		classes: 'text-no-wrap',
	},
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
