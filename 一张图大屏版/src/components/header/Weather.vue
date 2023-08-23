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

let content = ref("多云 28C° AQI:126");

onMounted(() => {
  window.WIDGET = {
    CONFIG: {
      modules: "01234",
      background: "5",
      tmpColor: "FFFFFF",
      // tmpSize: "16",
      cityColor: "FFFFFF",
      // citySize: "16",
      aqiColor: "FFFFFF",
      // aqiSize: "16",
      // weatherIconSize: "24",
      // alertIconSize: "18",
      // padding: "10px 10px 10px 10px",
      shadow: "0",
      language: "auto",
      fixed: "false",
      vertical: "top",
      horizontal: "left",
      key: "4788b2613de641a9aa495b8b90052fef",
    },
  };

  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
  document.getElementsByTagName("head")[0].appendChild(script);
});

onBeforeUnmount(() => {});
</script>

<template>
  <div id="he-plugin-simple"></div>
</template>
<style scoped lang="scss"></style>
