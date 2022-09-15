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
				.link.ellipsis {{ props.row.name }}
			q-td(key="changed" :props="props") {{ props.row.changed }}

</template>

<script setup lang="ts">
import { rows } from '@/stores/data'
import { useRouter } from 'vue-router'
import { useColor } from '@/stores/colors'

const colors = useColor()
const router = useRouter()

const go = (e: string) => {
	colors.setZag(e)
	router.push('/away')
}

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
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
