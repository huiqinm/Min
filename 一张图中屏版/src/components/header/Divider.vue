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

const props = defineProps({
  width: {
    type: Number,
    default: 0.8,
  },
});

onActivated(() => {});
</script>

<template>
  <div class="divider-wrap" :style="{ width: `${props.width}rem` }">
    <div class="divider"></div>
  </div>
</template>
<style scoped lang="scss">
.divider-wrap {
  display: flex;
  align-items: center;
  height: 5.6rem;
  .divider {
    background-color: $backgroud-color-dark;
    height: 0.4rem;
    width: 100%;
  }
}
</style>
