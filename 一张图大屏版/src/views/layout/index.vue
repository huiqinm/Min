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
import Map from "../map/index.vue";
import Menu from "./menu/index.vue";
import { useRouter } from "vue-router";

let $router = reactive(useRouter());

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

// 面板展开与收起
const leftCollapse = ref(false); //左侧面板是否收起
const rightCollapse = ref(false); //右侧面板是否收起
const leftPanelWidth = ref(panelState.value.leftWidth); //左侧面板宽度
const rightPanelWidth = ref(panelState.value.rightWidth); //右侧面板宽度
function toggleCollapseLeft() {
  leftCollapse.value = !leftCollapse.value;
  leftPanelWidth.value = leftCollapse.value ? 0 : 30;
  //设置全局状态
  let obj = panelState.value;
  obj.leftWidth = leftPanelWidth.value;
  panelStore.setPanelState(obj);
}

function toggleCollapseRight() {
  rightCollapse.value = !rightCollapse.value;
  rightPanelWidth.value = rightCollapse.value ? 0 : 30;
  //设置全局状态
  let obj = panelState.value;
  obj.rightWidth = rightPanelWidth.value;
  panelStore.setPanelState(obj);
}

// 顶部tags
const hideTags = computed(() => {
  return ["/test"].indexOf($router.currentRoute.name) > -1;
});

// 可以直接侦听一个 ref
watch(
  () => $router.currentRoute.name,
  async (newValue, oldValue) => {
    //滚动条复位
    document.querySelector(".main-wrap").scrollTop = 0;
  }
);

onMounted(() => {});

onUnmounted(() => {});
</script>

<template>
  <div class="main-wrap">
    <!-- 地图模块 -->
    <Map />
    <!-- 头部 -->
    <Header />
    <!-- 导航菜单 -->
    <Menu />

    <!-- 左侧面板 -->
    <div
      v-show="panelState.showLeft"
      class="left-wrap panel-wrap"
      :style="{ width: `${leftPanelWidth}rem` }"
    >
      <div class="component-wrap">
        <router-view v-slot="{ Component }" name="left">
          <Transition name="fade-transform" mode="out-in">
            <keep-alive :exclude="['about1']">
              <component :is="Component" />
            </keep-alive>
          </Transition>
        </router-view>
        <!-- <router-view name="left" /> -->
      </div>
      <a-button class="collapse-btn" shape="circle" @click="toggleCollapseLeft">
        <icon-right v-if="leftCollapse" />
        <icon-left v-else />
      </a-button>
    </div>
    <!-- 右侧面板 -->
    <div
      v-show="panelState.showRight"
      class="right-wrap panel-wrap"
      :style="{ width: `${rightPanelWidth}rem` }"
    >
      <div class="component-wrap">
        <router-view v-slot="{ Component }" name="right">
          <Transition name="fade-transform" mode="out-in">
            <keep-alive :exclude="['about1']">
              <component :is="Component" />
            </keep-alive>
          </Transition>
        </router-view>
      </div>
      <a-button
        class="collapse-btn"
        shape="circle"
        @click="toggleCollapseRight"
      >
        <icon-left v-if="rightCollapse" />
        <icon-right v-else />
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-wrap {
  height: 100vh;
  overflow: hidden;
  // TODO 暂时
  height: 1080px;

  .panel-wrap {
    height: calc(100% - 6.25rem);
    background: #fff;
    opacity: 0.85;
    position: absolute;
    top: 5.25rem;
    z-index: 2;
    transition: all 0.5s;

    .component-wrap {
      height: 100%;
      overflow: hidden;
      &:hover {
        overflow: auto;
      }
    }

    &.left-wrap {
      left: 0.9rem;
      border-right: 0.03rem solid var(--color-border);

      .collapse-btn {
        font-size: 1.4rem;
        width: 3.3rem;
        height: 3.3rem;
        position: absolute;
        right: -1.65rem;
        top: 30%;
        z-index: 2;
      }
    }

    &.right-wrap {
      right: 0.9rem;
      border-left: 0.03rem solid var(--color-border);

      .collapse-btn {
        font-size: 1.4rem;
        width: 3.3rem;
        height: 3.3rem;
        position: absolute;
        left: -1.65rem;
        top: 30%;
        z-index: 2;
      }
    }
  }
}
</style>
