<script setup>
import {
  ref,
  toRaw,
  onMounted,
  onActivated,
  onDeactivated,
  reactive,
  watch,
  toRef,
} from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

const obj = reactive({
  num: 1,
  count: 2,
});
let state = toRef(obj, "num");
// toRef 如果原始对象是非响应式的就不会更新视图 数据是会变的
// toRef 如果原始对象是响应式时，原始数据，和copy的数据 都会产生影响，视图也发生变化
const change = () => {
  state.value++;
  obj.count++;
  console.log("原始obj", obj);
  console.log("引用state", state);
};

onMounted(() => {});

onActivated(() => {
  let obj = panelState.value;
  obj.leftWidth = 50;
  panelStore.setPanelState(obj);
});

onDeactivated(() => {
  let obj = panelState.value;
  obj.leftWidth = 30;
  panelStore.setPanelState(obj);
});

function hdClick() {
  let obj = panelState.value;
  obj.showRight = !obj.showRight;
  panelStore.setPanelState(obj);
}
</script>

<template>
  <div style="font-size: 1.5rem">
    <div>nav1-left</div>
    <a-button type="primary" @click="hdClick">click</a-button><br />
    <a-button type="primary" @click="change">change</a-button>
    <div>obj:{{ obj }}</div>
  </div>
</template>
