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
  show: Boolean,
});

onActivated(() => {});

const emits = defineEmits(["set-show-drawer"]);

function handleClose() {
  //关闭drawer并向子组件传参
  emits("set-show-drawer", false);
}
</script>

<template>
  <el-drawer
    :model-value="props.show"
    title="I am the title"
    direction="ttb"
    :before-close="handleClose"
    modal-class="nav-drawer"
    :modal="true"
    :z-index="5"
    :append-to-body="true"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>
<style lang="scss">
.nav-drawer {
  background: transparent;

  .el-drawer {
    min-height: 36rem;
    padding: 12rem 4.8rem 4.8rem;
    background: linear-gradient(
      180deg,
      rgba(61, 69, 86, 0.8) 0%,
      rgba(34, 41, 55, 0.8) 100%
    );

    /* BG Blur */
    // backdrop-filter: blur(6px);
  }
}
</style>
