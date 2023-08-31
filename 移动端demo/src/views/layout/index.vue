<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  computed,
  onUnmounted,
  nextTick,
} from "vue";
import Header from "./header/index.vue";
import Menu from "./menu/index.vue";
import { useRouter } from "vue-router";

let $router = reactive(useRouter());

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

// 监听路由
watch(
  () => $router.currentRoute.name,
  async (newValue, oldValue) => {
    // document.querySelector(".main-wrap").scrollTop = 0; //滚动条复位
  }
);

onMounted(() => {});

onUnmounted(() => {});
</script>

<template>
  <div class="main-wrap">
    <!-- 头部 -->
    <Header />
    <!-- 导航菜单 -->
    <Menu />

    <div class="component-wrap" style="height: 100%">
      <router-view v-slot="{ Component }">
        <Transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-wrap {
  height: 100%;
  overflow: hidden;
}
</style>
