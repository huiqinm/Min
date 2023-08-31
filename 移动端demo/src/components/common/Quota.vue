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
  label: String,
  value: String,
  unit: String,
  icon: String,
});

onActivated(() => {});
</script>

<template>
  <div class="quota-item">
    <div class="left"><img :src="props.icon" /></div>
    <div class="right">
      <div class="label">{{ props.label }}</div>
      <div>
        <span class="value">{{ props.value }}</span>
        <span class="unit">{{ props.unit }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.quota-item {
  display: flex;
  .left {
    width: 1.6rem;
    height: 1.6rem;
    position: relative;
    top: -0.2rem;
  }
  .right {
    .label {
      font-size: 1.2rem;
      color: #d1d6e0;
      margin-bottom: 0.8rem;
    }
    .value {
      font-size: 1.5rem;
      color: $font-color-active;
    }

    .unit {
      font-size: 1.2rem;
      color: #fff;
    }
  }
}
</style>
