<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { ref, watch } from "vue";
// import { ConfigProvider } from "vant";

import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores";
const themeStore = useThemeStore();
let { themeState } = storeToRefs(themeStore);
const theme = ref(themeState.mode);

// watch(
//   () => themeStore.themeState.mode,
//   (val) => {
//     theme.value = val;
//   }
// );
</script>
<template>
  <van-config-provider :theme="themeStore.themeState.mode">
    <router-view />
  </van-config-provider>
</template>
