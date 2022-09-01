import { createRouter, createWebHashHistory } from 'vue-router'
// import Card from '@/pages/Card.vue'
// import Test from '@/components/Test.vue'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface RouteMeta {
		// is optional
		isAdmin?: boolean
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
			meta: { transition: 'slide-left', title: 'КСЭД ГНС - Главная', requiresAuth: false },
		},
		{
			path: '/var1',
			component: () => import('@/components/Var1.vue'),
			meta: { transition: 'slide-left', title: 'КСЭД ГНС - Вариант 1', requiresAuth: false },
		},
		{
			path: '/var2',
			component: () => import('@/components/Var2.vue'),
			meta: { transition: 'slide-left', title: 'КСЭД ГНС - Вариант 2', requiresAuth: false },
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/power',
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
