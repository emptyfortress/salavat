import { defineStore } from 'pinia'

export const useColor = defineStore({
	id: 'color',
	state: () => ({
		toolbar: false,
		panel: false,
		reveal: false,
		mini: false,
		logo: true,
		date: true,
	}),
	getters: {},
	actions: {},
})
