<script setup>
import { ref, reactive, onMounted, onActivated, onDeactivated } from "vue";

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

onMounted(() => {});

onActivated(() => {});

onDeactivated(() => {});
</script>

<template>
  <div>nav-1</div>
</template>
