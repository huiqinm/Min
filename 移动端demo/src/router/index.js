import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/layout/index.vue"),
      children: [
        {
          path: "/",
          name: "index",
          redirect: {
            name: "nav2",
          },
        },
        {
          path: "/nav1",
          name: "nav1",
          meta: { keepAlive: true, title: "指标查询" },
          component: () => import("@/views/nav1/index.vue"),
        },
        {
          path: "/nav2",
          name: "nav2",
          meta: { keepAlive: true, title: "指标看龙岗" },
          component: () => import("@/views/nav2/index.vue"),
        },
        {
          path: "/nav3",
          name: "nav3",
          meta: { keepAlive: true, title: "我的指标" },
          component: () => import("@/views/nav3/index.vue"),
        },
      ],
    },

    {
      name: "notFound",
      path: "/:path(.*)+",
      //  path: "/:pathMatch(.*)*",
      redirect: {
        name: "nav2",
      },
    },
  ],
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
