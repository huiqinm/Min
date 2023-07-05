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
import { useRouter } from "vue-router";
import vTags from "./tags/index.vue";

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
  leftPanelWidth.value = leftCollapse.value ? 0 : 10;
  //设置全局状态
  let obj = panelState.value;
  obj.leftWidth = leftPanelWidth.value;
  panelStore.setPanelState(obj);
}

function toggleCollapseRight() {
  rightCollapse.value = !rightCollapse.value;
  rightPanelWidth.value = rightCollapse.value ? 0 : 10;
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
  <a-layout class="page-wrap">
    <a-layout-header><Header /></a-layout-header>
    <div v-show="!hideTags" class="tags-wrap">
      <v-tags />
    </div>
    <a-layout-content class="main-wrap">
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
        <a-button
          class="collapse-btn"
          shape="circle"
          @click="toggleCollapseLeft"
        >
          <icon-right v-if="leftCollapse" />
          <icon-left v-else />
        </a-button>
      </div>
      <div class="map-wrap">
        <Map></Map>
      </div>
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
    </a-layout-content>
  </a-layout>
</template>

<style scoped lang="scss">
.page-wrap {
  height: 100vh;
  overflow: hidden;
  .arco-layout-header {
    border-bottom: 0.01rem solid var(--color-border);
  }

  .main-wrap {
    overflow: hidden;
    display: flex;
    flex-direction: row;

    .panel-wrap {
      height: 100%;
      background: #fff;
      opacity: 0.85;
      position: absolute;
      top: 0.5rem;
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
        left: 0.3rem;
        border-right: 0.01rem solid var(--color-border);

        .collapse-btn {
          font-size: 0.47rem;
          width: 1.1rem;
          height: 1.1rem;
          position: absolute;
          right: -0.55rem;
          top: 30%;
          z-index: 2;
        }
      }

      &.right-wrap {
        right: 0.3rem;
        border-left: 0.01rem solid var(--color-border);

        .collapse-btn {
          font-size: 0.47rem;
          width: 1.1rem;
          height: 1.1rem;
          position: absolute;
          left: -0.55rem;
          top: 30%;
          z-index: 2;
        }
      }
    }

    .map-wrap {
      height: 100%;
      flex: 1;
      overflow: hidden;
      .map {
        height: 100%;
      }
    }
  }
}
</style>
