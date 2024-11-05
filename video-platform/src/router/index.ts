import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home.vue"),
    meta: {
      requireAuth: true,
      title: "主页",
    },
  },
  {
    path: "/about-7",
    name: "about-7",
    component: () => import("../pages/first-about.vue"),
    meta: {
      requireAuth: true,
      title: "从零开始的主播生活",
    },
  },

  {
    path: "/about-7-3",
    name: "about-7-3",
    component: () => import("../pages/sencod-about.vue"),
    meta: {
      requireAuth: true,
      title: "先天主播圣体",
    },
  },

  {
    path: "/about-7-2",
    name: "about-7-2",
    component: () => import("../pages/tried-about.vue"),
    meta: {
      requireAuth: true,
      title: "公主请填工资单",
    },
  },
  {
    path: "/about-7-1",
    name: "about-7-1",
    component: () => import("../pages/four-about.vue"),
    meta: {
      requireAuth: true,
      title: "重生之我还是懂一点的",
    },
  },
]
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    window.document.title = to.meta.title as string;
  }
  next();
});

export default router
