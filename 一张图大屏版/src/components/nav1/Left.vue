<script setup>
import {
  ref,
  toRaw,
  onMounted,
  onActivated,
  onDeactivated,
  reactive,
  computed,
} from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

const now = computed(() => Date.now());

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
  <div style="font-size: 1.5rem">
    <div>nav1-left</div>
    <div>now:{{ now }}</div>
    <a-button @click="hdClick">click</a-button>
  </div>
</template>
