<script setup>
import { ref, toRaw, onMounted, onActivated, reactive } from "vue";

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {});

function greet(val) {
  alert(`这里是${val}`);
}
</script>

<template>
  <div class="map-wrap">
    <div class="map">
      <div
        class="legend-wrap"
        :style="{
          position: 'absolute',
          left: panelState.leftWidth + 2.4 + 1 + 'rem',
          top: '5.25rem',
        }"
      >
        <div><button @click="greet('图例')">图例</button></div>
      </div>
      <div
        class="tool-wrap"
        :style="{
          position: 'absolute',
          right: panelState.rightWidth + 2.4 + 1 + 'rem',
          bottom: '1rem',
        }"
      >
        <div><button @click="greet('工具条')">工具条</button></div>
        <div><button @click="greet('工具条')">工具条2</button></div>
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
    .legend-wrap,
    .tool-wrap {
      transition: all 0.5s;
    }
  }
}
</style>
