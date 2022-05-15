import axios from 'axios'
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
    path: '/admin/blog',
    name: 'Admin',
    component: function () {
      return import('../views/admin.vue')
    },
    children: [{
      path: '/admin/blog',
      name: 'AdminBlog',
      component: function () {
        return import('../views/adminBlog.vue')
      }
    }, {
      path: '/admin/crypto',
      name: 'AdminCrypto',
      component: function () {
        return import('../views/adminCrypto.vue')
      }
    }, {
      path: '/admin/closed',
      name: 'AdminEmpty',
      component: function () {
        return import('../views/adminEmpty.vue')
      }
    }]
  },
  {
    path: '/course_intro',
    name: 'Course_intro',
    component: function () {
      return import('../components/course_intro.vue')
    },
    beforeEnter: (to, from, next) => {
      // let token = localStorage.getItem('accessToken')
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      axios('/token', config).then(res => {
        console.log(res)

        if (res.data.err || res.data.expiredAt) {

          next("/login")
        } else {
          next()
        }
      })
      // if (response.user) {
      //   // ...conditions to check before getting into the route
      //   next();
      // } else {
      //   next('/login')
      // }

    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router