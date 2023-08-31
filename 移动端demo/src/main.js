import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "@/styles/index.scss"; // global css

// Vant 桌面端适配
import "@vant/touch-emulator";

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";

const app = createApp(App);

app.config.globalProperties = {
  msg1: "hello1",
  msg2: "hello2",
};

app.provide(/* 注入名 */ "appprovide", /* 值 */ "appprovidevalue!");

app.use(createPinia());
app.use(router);
app.mount("#app");
