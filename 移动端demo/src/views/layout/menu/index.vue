<script setup>
import {
  ref,
  toRaw,
  onMounted,
  reactive,
  computed,
  watch,
  onUpdated,
  readonly,
} from "vue";

import { useRouter } from "vue-router";
let $router = reactive(useRouter());

const active = ref("/nav1");

let menuList = [
  { path: "/nav1", text: "指标查询", icon: "home-o" },
  { path: "/nav2", text: "指标看龙岗", icon: "search" },
  { path: "/nav3", text: "我的指标", icon: "friends-o" },
];

onMounted(() => {});
onUpdated(() => {});

function onChange(path) {
  // $router.push(path);
}
</script>

<template>
  <div class="menu-wrap">
    <van-tabbar v-model="active" route @change="onChange">
      <van-tabbar-item
        v-for="(item, index) in menuList"
        :key="index"
        :icon="item.icon"
        :name="item.path"
        :to="item.path"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<style scoped lang="scss">
.menu-wrap {
  .swiper-wrap {
    background-size: 100% 100%;
    margin: 0 auto;
    width: 100%;
    height: 4.8rem;
    padding: 0 10rem;
  }
}
</style>
