import { createRouter, createWebHistory } from 'vue-router'
import CharactersPage from '@/pages/CharactersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CharactersPage
    },
  ]
})

export default router
