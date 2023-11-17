<script setup>
import { ref, reactive, onMounted, onActivated, onDeactivated } from "vue";

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {
  let obj = panelState.value;
  obj.showLeft = false;
  panelStore.setPanelState(obj);
});

onDeactivated(() => {
  let obj = panelState.value;
  obj.showLeft = true;
  panelStore.setPanelState(obj);
});
</script>

<template>
  <div>nav2-left</div>
</template>
