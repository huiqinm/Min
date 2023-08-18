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

// 面板展开与收起 // TODO 路由切换，恢复默认展开
const leftCollapse = ref(false); //左侧面板是否收起
const rightCollapse = ref(false); //右侧面板是否收起
//不同专题（路由）不同宽度，默认30rem
let widthList = [
  {
    path: "/nav1",
    left_width: 50,
    right_width: 50,
  },
  {
    path: "/nav3",
    left_width: 30,
    right_width: 10,
  },
];

const expandWidthLeft = computed(() => {
  let obj = widthList.find((item) => item.path === $router.currentRoute.path);
  return obj ? obj.left_width : 30;
});

const expandWidthRight = computed(() => {
  let obj = widthList.find((item) => item.path === $router.currentRoute.path);
  return obj ? obj.right_width : 30;
});

// 监听路由
watch(
  () => $router.currentRoute.name,
  async (newValue, oldValue) => {
    // document.querySelector(".main-wrap").scrollTop = 0; //滚动条复位
  }
);

// 监听showLeft-左侧面板是否显示，设置左侧面板宽度
watch(
  () => panelStore.panelState.showLeft,
  async (newValue, oldValue) => {
    let leftPanel = newValue ? expandWidthLeft.value : 0;
    //设置全局状态
    let obj = panelState.value;
    obj.leftWidth = leftPanel;
    panelStore.setPanelState(obj);
  }
);

// 监听showRight-右侧面板是否显示，设置右侧面板宽度
watch(
  () => panelStore.panelState.showRight,
  async (newValue, oldValue) => {
    let rightPanel = newValue ? expandWidthRight.value : 0;
    //设置全局状态
    let obj = panelState.value;
    obj.rightWidth = rightPanel;
    panelStore.setPanelState(obj);
  }
);

onMounted(() => {});

onUnmounted(() => {});

// 左侧面板展开/收起
function toggleCollapseLeft() {
  leftCollapse.value = !leftCollapse.value;
  let leftPanel = leftCollapse.value ? 0 : expandWidthLeft.value;
  //设置全局状态
  let obj = panelState.value;
  obj.leftWidth = leftPanel;
  panelStore.setPanelState(obj);
}

// 右侧面板展开/收起
function toggleCollapseRight() {
  rightCollapse.value = !rightCollapse.value;
  let rightPanel = rightCollapse.value ? 0 : expandWidthRight.value;
  //设置全局状态
  let obj = panelState.value;
  obj.rightWidth = rightPanel;
  panelStore.setPanelState(obj);
}
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
      :style="{ width: `${panelState.leftWidth}rem` }"
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
      :style="{ width: `${panelState.rightWidth}rem` }"
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
    background: #333c4c;
    opacity: 0.88;
    position: absolute;
    top: 5.25rem;

    transition: all 0.5s;

    .component-wrap {
      height: 100%;
      overflow: hidden;
      &:hover {
        overflow: auto;
      }
    }

    .collapse-btn {
      font-size: 1.4rem;
      width: 3.3rem;
      height: 3.3rem;
      position: absolute;

      top: 30%;
      background: rgba(0, 0, 0, 0.5);
    }

    &.left-wrap {
      left: 2.4rem;
      border-right: 0.05rem solid var(--color-border);

      .collapse-btn {
        right: -1.65rem;
      }
    }

    &.right-wrap {
      right: 2.4rem;
      border-left: 0.05rem solid var(--color-border);

      .collapse-btn {
        left: -1.65rem;
      }
    }
  }
}
</style>
