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
  <div class="map-wrap">
    <div class="map">
      <div><button @click="greet">Greet</button></div>
      <div
        class="tool-wrap"
        :style="{
          position: 'absolute',
          right: panelState.rightWidth + 3 + 'rem',
        }"
      >
        <button @click="greet">Greet2</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.map-wrap {
  height: 100%;
  overflow: hidden;
  .map {
    height: 100%;
    background: url("../../assets/images/map/map2.png");
    background-size: 100% 100%;
    opacity: 0.6;
    .tool-wrap {
      transition: all 0.5s;
      top: 5.25rem;
    }
  }
}
</style>
