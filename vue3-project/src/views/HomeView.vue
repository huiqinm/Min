<script setup>
import TheWelcome from "../components/home/TheWelcome.vue";
import { ref, toRaw, onMounted, onActivated } from "vue";

import { storeToRefs } from "pinia";
import { useUserInfoStore } from "@/stores";
// import debounce from "@/utils/test";

const userInfoStore = useUserInfoStore();
let { userInfo } = storeToRefs(userInfoStore);

let search = ref("mmm");

onMounted(() => {});

onActivated(() => {});

function onClick() {
  let obj = userInfo.value;
  obj.name = "大华";
  obj.age += 1;
  userInfoStore.setUserInfo(obj);
  search.value += "k";
}

function onSearchChange() {
  console.log("search.value==========", search.value);
}
function onInput() {
  debounce(onSearchChange);
}
//防抖
// let timer = null;
// function debounce(fn) {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(() => {
//     fn();
//   }, 500);
// }
///////////

function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}
</script>

<template>
  <div>
    <div>
      {{ userInfo }}
      <a-button @click="onClick">click</a-button>
      <a-input v-model="search" @input="onInput"></a-input>
    </div>
    <TheWelcome />
  </div>
</template>
