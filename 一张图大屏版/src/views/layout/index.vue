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
//不同专题（路由）不同宽度，默认30rem
// 配置非默认专题宽度
let widthList = [
  {
    path: "/",
    left_width: 21.15,
    right_width: 46.9,
  },
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

// 左侧面板展开宽度
const expandWidthLeft = computed(() => {
  let obj = widthList.find((item) => item.path === $router.currentRoute.path);
  return obj ? obj.left_width : 30;
});

// 右侧面板展开宽度
const expandWidthRight = computed(() => {
  let obj = widthList.find((item) => item.path === $router.currentRoute.path);
  return obj ? obj.right_width : 30;
});

// 监听路由
watch(
  () => $router.currentRoute.name,
  async (newValue, oldValue) => {
    // 路由切换，恢复默认展开
    leftCollapse.value = false;
    rightCollapse.value = false;
    // document.querySelector(".main-wrap").scrollTop = 0; //滚动条复位
  }
);

// 监听showLeft-左侧面板是否显示，设置左侧面板宽度(图例等根据面板宽度相对定位)
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

// 监听showRight-右侧面板是否显示，设置右侧面板宽度(图例等根据面板宽度相对定位)
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
        <!-- 防止面板折叠时内容压缩 -->
        <div :style="{ width: `${expandWidthLeft}rem` }">
          <router-view v-slot="{ Component }" name="left">
            <Transition name="fade-transform" mode="out-in">
              <keep-alive :exclude="['test1']">
                <component :is="Component" />
              </keep-alive>
            </Transition>
          </router-view>
          <!-- <router-view name="left" /> -->
        </div>
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
        <div :style="{ width: `${expandWidthRight}rem` }">
          <router-view v-slot="{ Component }" name="right">
            <Transition name="fade-transform" mode="out-in">
              <keep-alive :exclude="['test1']">
                <component :is="Component" />
              </keep-alive>
            </Transition>
          </router-view>
        </div>
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
  height: 100%;
  overflow: hidden;

  .panel-wrap {
    height: calc(100% - 6.25rem);
    opacity: 0.88;
    position: absolute;
    top: 5.25rem;
    background: #2c2929a3;
    transition: all 0.5s;

    .component-wrap {
      height: 100%;
      overflow: hidden;
      &:hover {
        overflow-y: auto;
      }

      > div {
        height: 100%;
      }

      :deep(.page-wrap) {
        height: 100%;
        .module {
          background: $backgroud-color-dark;
          border-bottom: 0.1rem solid #7585a3;
          display: flex;
          flex-direction: column;
          &:not(:last-child) {
            margin-bottom: 0.8rem;
          }
          .content-wrap {
            flex: 1;
            overflow: hidden;

            .content {
              height: 100%;
              padding: 1rem 1.2rem;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }

    .collapse-btn {
      font-size: 1.4rem;
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 10%;
      background: rgba(0, 0, 0, 0.6);
      padding: 0;

      &:hover {
        background: rgba(0, 0, 0, 0.9);
      }
    }

    &.left-wrap {
      left: 2.4rem;
      // border-right: 0.05rem solid var(--color-border);

      .collapse-btn {
        right: -1.25rem;
      }
    }

    &.right-wrap {
      right: 2.4rem;
      // border-left: 0.05rem solid var(--color-border);

      .collapse-btn {
        left: -1.25rem;
      }
    }
  }
}
</style>
