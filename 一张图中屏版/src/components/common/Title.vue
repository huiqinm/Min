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
  text: String,
});

onActivated(() => {});
</script>

<template>
  <div class="title"><span class="rect"> </span>{{ props.text }}</div>
</template>
<style scoped lang="scss">
.title {
  font-size: 1.3rem;
  color: $font-color-secondary;
  padding: 1.2rem 1.2rem 0 0;

  .rect {
    display: inline-block;
    width: 0.15rem;
    height: 0.9rem;
    margin: 0 auto;
    background-image: url("@/assets/images/common/bg/rect.png");
    background-size: 100% 100%;
    margin-right: 1.05rem;
  }
}
</style>
