import { defineStore } from 'pinia'

export const useColor = defineStore({
	id: 'color',
	state: () => ({
		toolbar: false,
		panel: false,
		reveal: false,
		mini: false,
		logotop: false,
		logoleft: false,
		logobottom: false,
		dv: false,
		date: true,
		sed: false,
		leftDrawer: true,
		rightDrawer: false,
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
