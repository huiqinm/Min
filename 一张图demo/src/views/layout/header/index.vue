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
  <div class="header-content">
    <div class="logo">
      <img alt="Vue logo" class="logo" :src="logoImg" />
    </div>
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
  </div>
</template>

<style scoped lang="scss">
.header-content {
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.67rem;
  .logo {
    width: 1rem;
    height: 1rem;
    margin-right: 2rem;
    img {
      height: 100%;
      width: 100%;
      display: inherit;
    }
  }
  .menu-wrap {
    height: 100%;
    width: 100%;
    display: flex;
    :deep(.arco-menu-horizontal) {
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
            font-size: 0.47rem;
            height: 100%;
            display: flex;
            align-items: center;

            &:not(:last-child) {
              margin-right: 1.5rem;
            }

            .arco-menu-icon {
              margin-right: 0.3rem;
            }
          }
        }
      }

      .arco-menu-selected-label {
        bottom: 0;
        width: 100%;
        left: 0;
        height: 0.1rem;
      }
    }
  }
}
</style>
