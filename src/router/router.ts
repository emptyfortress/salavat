import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import { useColor } from '@/stores/colors'

declare module 'vue-router' {
	interface RouteMeta {
		// is optional
		isAdmin?: boolean
		isColor?: boolean
		isRainbow?: boolean
		// must be declared by every route
		requiresAuth: boolean
		title: string
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			component: Home,
			meta: {
				title: 'КСЭД ГНС - Главная',
				requiresAuth: false,
			},
		},
		{
			path: '/var1',
			component: () => import('@/components/Var1.vue'),
			meta: {
				title: 'КСЭД ГНС - Вариант 1',
				requiresAuth: false,
				isColor: true,
				isRainbow: false,
			},
		},
		{
			path: '/var11',
			component: () => import('@/components/Var11.vue'),
			meta: {
				title: 'КСЭД ГНС - Вариант 1-1',
				requiresAuth: false,
				isColor: true,
				isRainbow: false,
			},
		},
		{
			path: '/var2',
			component: () => import('@/components/Var2.vue'),
			meta: {
				title: 'КСЭД ГНС - Вариант 2',
				requiresAuth: false,
				isColor: true,
				isRainbow: false,
			},
		},
		{
			path: '/var3',
			component: () => import('@/components/Var3.vue'),
			meta: {
				title: 'КСЭД ГНС - Вариант 3',
				requiresAuth: false,
				isColor: true,
				isRainbow: true,
			},
		},
		{
			path: '/away',
			component: () => import('@/components/Away.vue'),
			props: { zag: 'test' },
			meta: {
				transition: 'slide-left',
				title: 'КСЭД',
				requiresAuth: false,
				isColor: true,
				isRainbow: false,
			},
		},
		{
			path: '/doc',
			component: () => import('@/components/Doc.vue'),
			props: { zag: 'test' },
			meta: {
				transition: 'slide-left',
				title: 'КСЭД ГНС - Документы',
				requiresAuth: false,
				isColor: true,
				isRainbow: true,
			},
		},
		{
			path: '/task',
			component: () => import('@/components/Task.vue'),
			props: { zag: 'test' },
			meta: {
				transition: 'slide-left',
				title: 'КСЭД ГНС - Задания',
				requiresAuth: false,
				isColor: true,
				isRainbow: true,
			},
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/',
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
	const colors = useColor()
	if (to.meta.isColor === true && to.meta.isRainbow === true) {
		colors.panel = true
		colors.toolbar = true
		colors.logotop = false
		colors.dv = true
		colors.date = false
		colors.sed = true
	} else if (to.meta.isColor === true && to.meta.isRainbow === false) {
		colors.panel = true
		colors.toolbar = true
		colors.logotop = true
		colors.dv = true
		colors.date = false
		colors.sed = true
	} else {
		colors.panel = false
		colors.toolbar = false
		colors.logotop = false
		colors.dv = false
		colors.date = true
		colors.sed = false
	}
})
