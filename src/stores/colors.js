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
		leftDrawer: true,
		rightDrawer: true,
	}),
	getters: {},
	actions: {
		toggleLeftDr() {
			this.leftDrawer = !this.leftDrawer
		},
		toggleRightDr() {
			this.rightDrawer = !this.rightDrawer
		},
	},
})
