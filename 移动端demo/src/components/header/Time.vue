<script setup>
import {
  ref,
  toRaw,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  reactive,
} from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

let curTime = ref("");
let timer = null;

onMounted(() => {
  timerStart();
});

onBeforeUnmount(() => {
  timerClear();
});

function getTime() {
  // 获取当前时间
  let now = new Date();
  let year = now.getFullYear(); // 获取年份
  let month = (now.getMonth() + 1).toString().padStart(2, "0"); // 获取月份
  let day = now.getDate().toString().padStart(2, "0"); // 获取日期
  let hours = now.getHours(); // 获取小时
  let minutes = now.getMinutes().toString().padStart(2, "0"); // 获取分钟
  let seconds = now.getSeconds().toString().padStart(2, "0"); // 获取秒数
  let hourFormat = hours % 12 || (hours === 0 ? 0 : 12);
  let am_pm = hours < 12 ? "AM" : "PM";
  // 格式化日期时间为 YYYY/MM/DD HH:MM AM/PM
  let formattedDateTime12Hour = `${year}/${month}/${day} ${hourFormat}:${minutes} ${am_pm}`;
  curTime.value = formattedDateTime12Hour;
}

function timerStart() {
  timerClear();
  timer = setInterval(() => {
    getTime();
  }, 1000);
}

//清除定时器
function timerClear() {
  if (timer) {
    clearInterval(timer);
  }
  timer = null;
}
</script>

<template>
  <div>{{ curTime }}</div>
</template>
<style scoped lang="scss"></style>
