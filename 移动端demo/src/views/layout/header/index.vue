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
import Time from "@/components/header/Time.vue";
import Weather from "@/components/header/Weather.vue";

let $router = reactive(useRouter());

onMounted(() => {});
onUpdated(() => {});
</script>

<template>
  <div class="header-wrap">
    <div class="title">
      <h2>龙岗区城市运行体征指标</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrap {
}
</style>
