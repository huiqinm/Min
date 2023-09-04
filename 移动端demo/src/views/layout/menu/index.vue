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

import icon_zbcx_dev from "@/assets/images/common/icons/menu/zbcx-def.svg";
import icon_zbcx_act from "@/assets/images/common/icons/menu/zbcx-act.svg";
import icon_zbklg_dev from "@/assets/images/common/icons/menu/zbklg-def.svg";
import icon_zbklg_act from "@/assets/images/common/icons/menu/zbklg-act.svg";
import icon_wdzb_dev from "@/assets/images/common/icons/menu/wdzb-def.svg";
import icon_wdzb_act from "@/assets/images/common/icons/menu/wdzb-act.svg";

let $router = reactive(useRouter());

const active = ref("/nav1");

let menuList = [
  {
    path: "/nav1",
    text: "指标查询",
    icons: {
      inactive: icon_zbcx_dev,
      active: icon_zbcx_act,
    },
  },
  {
    path: "/nav2",
    text: "指标看龙岗",
    icons: {
      inactive: icon_zbklg_dev,
      active: icon_zbklg_act,
    },
  },
  {
    path: "/nav3",
    text: "我的指标",
    icons: {
      inactive: icon_wdzb_dev,
      active: icon_wdzb_act,
    },
  },
];

onMounted(() => {});
onUpdated(() => {});
</script>

<template>
  <div class="menu-wrap">
    <van-tabbar
      v-model="active"
      route
      active-color="#2161de"
      inactive-color="#a6a6a6"
    >
      <van-tabbar-item
        v-for="(item, index) in menuList"
        :key="index"
        :name="item.path"
        :to="item.path"
      >
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? item.icons.active : item.icons.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="scss">
.menu-wrap {
  .van-tabbar-item {
    &.van-tabbar-item--active {
    }
  }
}
</style>
