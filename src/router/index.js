import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/Home'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import('../views/About'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/hse-policy',
    name: 'hse',
    components: {
      default: () => import('../views/hse'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/construction',
    name: 'construction',
    components: {
      default: () => import('../views/construction'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/civilengineering',
    name: 'civilengineering',
    components: {
      default: () => import('../views/civil'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/mechanicalengineering',
    name: 'mechanicalengineering',
    components: {
      default: () => import('../views/mechanical'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/procurement',
    name: 'procurement',
    components: {
      default: () => import('../views/procurement'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/communityaffairs',
    name: 'communityaffairs',
    
    components: {
      default: () => import('../views/community'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/environmentalpolicy',
    name: 'environmentalpolicy',
    components: {
      default: () => import('../views/environmental'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    components: {
      default: () => import('../views/projects'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/contactus',
    name: 'contactus',
    components: {
      default: () => import('../views/contactus'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes
})

export default router
