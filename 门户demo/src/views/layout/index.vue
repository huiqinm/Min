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
import Footer from "./footer/index.vue";
import { useRouter } from "vue-router";

let $router = reactive(useRouter());

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
    <a-layout-content class="main-wrap">
      <div class="component-wrap">
        <router-view v-slot="{ Component }">
          <Transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </Transition>
        </router-view>
      </div>
      <a-layout-footer id="footer-box">
        <Footer />
      </a-layout-footer>
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
    overflow: auto;

    .component-wrap {
      width: 65.6%;
      margin: 0 auto;
      min-height: 20rem;
    }
  }
  :deep(.arco-layout-footer) {
  }
}
</style>
