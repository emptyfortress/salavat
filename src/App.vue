<script setup lang="ts">
import { computed } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import { useColor } from '@/stores/colors'
import Toolbar from '@/components/Toolbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const colors = useColor()

const mycolor = computed(() => {
	if (route.fullPath === '/var3') {
		return 'dark'
	} else if (route.fullPath == '/task') {
		return 'task'
	} else if (route.fullPath == '/doc') {
		return 'doc'
	}
	return 'one'
})

const calcHeader = computed(() => {
	if (colors.toolbar) {
		return 'head-fill'
	} else return 'head'
})
</script>

<template lang="pug">
#col(:class="mycolor")
	q-layout(view="hHh LpR fFf")
		q-header(:reveal="colors.reveal" :class="calcHeader")
			component(:is="Toolbar")

		Drawer(:show="colors.leftDrawer" @toggle="colors.toggleLeftDr")
		RDrawer(:show="colors.rightDrawer")

		q-page-container
			router-view(v-slot="{ Component, route }")
				transition(:name="route.meta.transition || 'fade'" mode="out-in")
					component(:is="Component")

</template>

<style lang="scss">
@import '@/assets/styles/theme.scss';

.head,
.head-fill {
	height: 100px;
	line-height: 64px;
	@media screen and (max-width: 1024px) {
		height: 48px;
		line-height: 48px;
	}
}

.head {
	background-color: #d2d2d2;
	color: var(--font-color);
}
.head-fill {
	color: #fff !important;
}
body.body--dark .head {
	background: var(--bg-drawer);
}
.head-fill .right svg.icon {
	fill: #fff;
}
</style>
