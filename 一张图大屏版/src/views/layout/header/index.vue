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
import Menu from "../menu/index.vue";
import logoImg from "@/assets/images/logo1.png";

onMounted(() => {});
onUpdated(() => {});
</script>

<template>
  <div class="header-wrap">
    <div class="header-content">
      <div class="logo">
        <img alt="Vue logo" class="logo" :src="logoImg" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrap {
  border-bottom: 0.03rem solid var(--color-border);
  position: absolute;
  top: 0;
  width: 100%;
  height: 5.25rem;
  background: pink;
}
.header-content {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  .logo {
    width: 3rem;
    height: 3rem;
    margin-right: 6rem;
    img {
      height: 100%;
      width: 100%;
      display: inherit;
    }
  }
}
</style>
