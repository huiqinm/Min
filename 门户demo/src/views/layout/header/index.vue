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
import { IconApps, IconList } from "@arco-design/web-vue/es/icon";
import Menu from "./menu/index.vue";

let $router = reactive(useRouter());
function onMenuItemClick(val) {
  val = val === "index" ? "/" : val;
  $router.push(val);
}

onMounted(() => {});
onUpdated(() => {});
</script>

<template>
  <div class="header-content">
    <div class="banner-wrap">
      <h1>珠海市救助管理站暨市救助安置中心</h1>
    </div>
    <div class="menu-wrap">
      <Menu />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-content {
  .banner-wrap {
    padding: 0 10rem 1.36rem 3.5rem;
    h1 {
      font-size: 1.33rem;
      color: #022c69;
      margin: 0;
    }
  }
  .menu-wrap {
    background: $font-color-primary-light;
    padding: 0.8rem 0;
    > div {
      width: 65.6%;
      margin: 0 auto;
    }
  }
}
</style>
