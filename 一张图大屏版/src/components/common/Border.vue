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

onActivated(() => {});
</script>

<template>
  <div class="rect-wrap">
    <div class="rect"></div>
  </div>
</template>
<style scoped lang="scss">
.rect-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
  .rect {
    width: 8rem;
    height: 0.3rem;
    margin: 0 auto;
    background-image: url("@/assets/images/common/bg/border.png");
    background-size: 100% 100%;
  }
}
</style>
