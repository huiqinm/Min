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
  nextTick,
  onUnmounted,
} from "vue";

import { useRouter } from "vue-router";
import { IconApps, IconList } from "@arco-design/web-vue/es/icon";
import logoImg from "@/assets/images/logo1.png";

let $router = reactive(useRouter());
function onMenuItemClick(val) {
  val = val === "index" ? "/" : val;
  $router.push(val);
}

onMounted(() => {
  nextTick(() => {
    // window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", aa);
  });
});

function aa() {
  debounce(onScroll);
}

onUpdated(() => {});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll, false); //取消监听
});

// 头部导航
const position = ref("reactive");

function isElVisible() {
  // const elWindowHeight = window.innerHeight; //视窗高度
  // const elOffsetTop = document.getElementById("header-content").offsetTop; //元素距离顶部高度(固定值)
  const elOffsetHeight = document.getElementById("banner").offsetHeight; //banner元素高度(固定值)

  let docScrollTop = document.querySelector("html").scrollTop; //dom滚动高度

  /* banner元素在可视化区域内： dom滚动高度(docScrollTop) <= banner元素高度(elOffsetHeight) */
  return docScrollTop < elOffsetHeight;
}
async function onScroll() {
  if (isElVisible()) {
    position.value = "reactive";
  } else {
    position.value = "fixed";
  }
}
let timer = null;

function debounce(fn) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    fn();
  }, 0.1);
}
</script>

<template>
  <div>
    <div
      id="banner"
      class="banner"
      style="background: pink; height: 200px"
    ></div>
    <div v-show="position === 'fixed'" style="height: 2rem"></div>
    <div
      id="header-content"
      :class="[
        position === 'fixed' ? 'fixStyle' : 'relStyle',
        'header-content',
      ]"
    >
      <div class="logo">
        <img alt="Vue logo" class="logo" :src="logoImg" />
      </div>
      <div class="menu-wrap">
        <a-menu
          mode="horizontal"
          :selected-keys="[$router.currentRoute.name]"
          @menu-item-click="onMenuItemClick"
        >
          <a-menu-item key="index">
            <template #icon><icon-apps /></template
            >Home<!-- <RouterLink to="/">Home</RouterLink> -->
          </a-menu-item>
          <a-menu-item key="about">
            <template #icon><icon-apps /></template> About
          </a-menu-item>
          <a-menu-item key="helloworld">
            <template #icon><icon-apps /></template> helloworld
          </a-menu-item>
          <a-menu-item key="hello">
            <template #icon><icon-apps /></template>Hello
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-content {
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.67rem;
  background: #fff;
  width: 100%;
  z-index: 2;

  &.fixStyle {
    position: fixed;
    top: 0;
  }
  &.relStyle {
    position: relative;
  }
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
