import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../components/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Sign_up',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {

      return import( /* webpackChunkName: "about" */ '../components/sign_up.vue')
    }
  }, {
    path: '/login',
    name: 'Sign_in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/sign_in.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../components/register.vue')
    }
  }, {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../components/about.vue')
    }
  },
  {
    path: '/why-us',
    name: 'Why-us',
    component: function () {
      return import('../components/why-us.vue')
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: function () {
      return import('../components/blog.vue')
    }
  }, {
    path: '/member',
    name: 'Member',
    component: function () {
      return import('../components/member.vue')
    }
  }, {
    path: '/admin',
    name: 'Admin',
    component: function () {
      return import('../components/admin.vue')
    }
  }, {
    path: '/course_intro',
    name: 'Course_intro',
    component: function () {
      return import('../components/course_intro.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router