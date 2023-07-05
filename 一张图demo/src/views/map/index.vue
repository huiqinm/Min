<script setup>
import { ref, toRaw, onMounted, onActivated, reactive } from "vue";

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {});

function greet(event) {
  alert(111);
}
</script>

<template>
  <div class="map">
    <div><button @click="greet">Greet</button></div>
    <div
      class="tool-wrap"
      :style="{
        position: 'absolute',
        right: panelState.rightWidth + 0.8 + 'rem',
      }"
    >
      <button @click="greet">Greet2</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.map {
  background: url("../../assets/images/map/map.png");
  background-size: 100% 100%;
  .tool-wrap {
    transition: all 0.5s;
  }
}
</style>
