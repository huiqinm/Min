<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  onActivated,
  onDeactivated,
} from "vue";

import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores";
const themeStore = useThemeStore();
let { themeState } = storeToRefs(themeStore);

let list = ref([
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
  {
    path: "/nav1",
    text: "指标查询",
    icon: "photo-o",
  },
]);
const checked = ref(themeState.mode === "dark");

const date = ref("");
const show = ref(false);
const showPopup = ref(false);

watch(checked, (val) => {
  let mode = val ? "dark" : "light";
  let obj = themeState.value;
  obj.mode = mode;
  themeStore.setThemeState(obj);
});

onMounted(() => {});

onActivated(() => {});

onDeactivated(() => {});

const formatDate = (date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value) => {
  show.value = false;
  date.value = formatDate(value);
};
</script>

<template>
  <div>
    <van-cell center title="🌗 暗黑模式" style="width: 200px">
      <template #right-icon>
        <van-switch v-model="checked" />
      </template>
    </van-cell>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in list"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </van-grid>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" />
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div>
      <van-cell title="展示弹出层" is-link @click="showPopup = true" />
      <van-popup
        v-model:show="showPopup"
        position="left"
        :style="{ width: '30%', height: '100%' }"
        >内容</van-popup
      >
    </div>
  </div>
</template>
