import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

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
          component: HomeView,
        },
        {
          path: "/work",
          name: "/work",
          component: () => import("../views/WorkView.vue"),
        },
        {
          path: "/family",
          name: "/family",
          component: () => import("../views/FamilyView.vue"),
        },
        {
          path: "/business",
          name: "/business",
          component: () => import("../views/BusinessView.vue"),
        },
        {
          path: "/policy",
          name: "/policy",
          component: () => import("../views/PolicyView.vue"),
        },
        {
          path: "/interaction",
          name: "/interaction",
          component: () => import("../views/InteractionView.vue"),
        },
        // 测试二级菜单路由
        // {
        //   path: "/father",
        //   name: "father",
        //   component: () => import("../views/test/index.vue"),
        //   children: [
        //     {
        //       path: "/father/child1",
        //       name: "child1",
        //       component: () => import("../views/test/Child1.vue"),
        //     },
        //     {
        //       path: "/father/child2",
        //       name: "child2",
        //       component: () => import("../views/test/Child2.vue"),
        //     },
        //   ],
        // },
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
