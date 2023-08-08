<script setup>
import {
  ref,
  toRaw,
  onMounted,
  onActivated,
  onDeactivated,
  reactive,
} from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {
  let obj = panelState.value;
  obj.leftWidth = 50;
  panelStore.setPanelState(obj);
});

onDeactivated(() => {
  let obj = panelState.value;
  obj.leftWidth = 30;
  panelStore.setPanelState(obj);
});

function hdClick() {
  let obj = panelState.value;
  obj.showRight = !obj.showRight;
  panelStore.setPanelState(obj);
}
</script>

<template>
  <div style="position: absolute; bottom: 0; right: 0">
    <div>nav1-left</div>
    <a-button @click="hdClick">click</a-button>
  </div>
</template>
