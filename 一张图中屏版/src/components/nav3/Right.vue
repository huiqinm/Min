<script setup>
import { ref, reactive, onMounted, onActivated, onDeactivated } from "vue";

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {
  let obj = panelState.value;
  obj.rightWidth = 10;
  panelStore.setPanelState(obj);
});

onDeactivated(() => {
  let obj = panelState.value;
  obj.rightWidth = 30;
  panelStore.setPanelState(obj);
});
</script>

<template>
  <div>nav1-right</div>
</template>
