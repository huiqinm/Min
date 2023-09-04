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
    <div class="component-wrap">
      <router-view v-slot="{ Component }">
        <Transition mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </Transition>
      </router-view>
    </div>
    <!-- 导航菜单 -->
    <div class="menu-wrap"><Menu /></div>
  </div>
</template>

<style scoped lang="scss">
.main-wrap {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .component-wrap {
    // flex: 1;
    overflow: auto;
  }
  .menu-wrap {
  }
}
</style>
