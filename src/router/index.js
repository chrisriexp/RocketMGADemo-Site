import { createRouter, createWebHistory } from 'vue-router'
import AgentPortal from '../views/AgentPortal.vue'
import Profile from '../views/Profile.vue'
import PortalSettings from '../views/PortalSettings.vue'
import MessagingConsole from '../views/MessagingConsole.vue'
import QuoteView0 from '../views/QuoteView0.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AgentPortal',
      component: AgentPortal
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/portal-settings',
      name: 'PortalSettings',
      component: PortalSettings
    },
    {
      path: '/portal-settings/messaging-console',
      name: 'MessagingConsole',
      component: MessagingConsole
    },
    {
      path: '/agent-portal/RMGA00000',
      name: 'QuoteView0',
      component: QuoteView0,
      props: true
    }
  ]
})

export default router
