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

import icon_t1 from "@/assets/images/map/tool/tool1.png";
import icon_t2 from "@/assets/images/map/tool/tool2.png";
import icon_t3 from "@/assets/images/map/tool/tool3.png";
import icon_t4 from "@/assets/images/map/tool/tool4.png";

const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

const props = defineProps({});
const emits = defineEmits(["tool-click"]);

const toolList = [
  {
    key: "tool1",
    icon: icon_t1,
  },
  {
    key: "tool2",
    icon: icon_t2,
  },
  {
    key: "tool3",
    icon: icon_t3,
  },
  {
    key: "tool4",
    icon: icon_t4,
  },
];

onActivated(() => {});
</script>

<template>
  <ul class="tool-list">
    <li
      v-for="(item, index) in toolList"
      :key="index"
      @click="$emit('tool-click', item.key)"
    >
      <img :src="item.icon" />
    </li>
  </ul>
</template>
<style scoped lang="scss">
.tool-list {
  padding: 0.75rem 0.4rem;
  li {
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 0.7rem;
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
</style>
