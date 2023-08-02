<script setup>
import { ref, toRaw, onMounted, onActivated, reactive } from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {});

function hdClick() {
  let obj = panelState.value;
  obj.showRight = !obj.showRight;
  panelStore.setPanelState(obj);
}
</script>

<template>
  <div>
    <div>nav1-left</div>
    <a-button @click="hdClick">click</a-button>
  </div>
</template>
