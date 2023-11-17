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
          meta: { keepAlive: true, title: "首页" },
          components: {
            ...{
              left: () => import("@/components/home/Left.vue"),
              right: () => import("@/components/home/Right.vue"),
            },
          },
        },
        {
          path: "/nav1",
          name: "nav1",
          meta: { keepAlive: true, title: "导航1" },
          components: {
            ...{
              left: () => import("@/components/nav1/Left.vue"),
              right: () => import("@/components/nav1/Right.vue"),
            },
          },
        },
        {
          path: "/nav2",
          name: "nav2",
          meta: { keepAlive: true, title: "导航2" },
          components: {
            ...{
              left: () => import("@/components/nav2/Left.vue"),
              right: () => import("@/components/nav2/Right.vue"),
            },
          },
        },
        {
          path: "/nav3",
          name: "nav3",
          meta: { keepAlive: true, title: "导航3" },
          components: {
            ...{
              left: () => import("@/components/nav3/Left.vue"),
              right: () => import("@/components/nav3/Right.vue"),
            },
          },
        },
      ],
    },
    {
      path: "/404",
      component: () => import("@/components/404.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // console.log("router-to=====", to);
  next();
});

export default router;
