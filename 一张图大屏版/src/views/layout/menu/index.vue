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

import logoImg from "@/assets/images/logo1.png";

function onMenuItemClick(val) {
  $router.push(val);
}

onMounted(() => {});
onUpdated(() => {});
</script>

<template>
  <div class="menu-wrap">
    <a-menu
      mode="horizontal"
      :selected-keys="[$router.currentRoute.path]"
      @menu-item-click="onMenuItemClick"
    >
      <a-menu-item key="/">
        <template #icon><icon-apps /></template>
        首页<!-- <RouterLink to="/">Home</RouterLink> -->
      </a-menu-item>
      <a-menu-item key="/nav1">
        <template #icon><icon-apps /></template> 导航1
      </a-menu-item>
      <a-menu-item key="/nav2">
        <template #icon><icon-apps /></template> 导航2
      </a-menu-item>
      <a-menu-item key="/nav3">
        <template #icon><icon-apps /></template>导航3
      </a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped lang="scss">
.menu-wrap {
  position: absolute;
  bottom: 0;
  height: 5rem;
  width: 100%;
  background: pink;
  display: flex;
  justify-content: center;
  :deep(.arco-menu-horizontal) {
    width: fit-content;
    .arco-menu-inner {
      padding: 0;
      overflow: hidden;
      .arco-menu-overflow-wrap {
        height: 100%;
        display: flex;
        align-items: center;
        .arco-menu-item {
          padding: 0;
          margin-left: 0;
          font-size: 1.4rem;
          height: 100%;
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-right: 4.5rem;
          }

          .arco-menu-icon {
            margin-right: 0.9rem;
          }
        }
      }
    }

    .arco-menu-selected-label {
      bottom: 0;
      width: 100%;
      left: 0;
      height: 0.3rem;
    }
  }
}
</style>
