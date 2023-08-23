<script setup>
import { ref, reactive, onMounted, onActivated, onDeactivated } from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";

import Title from "@/components/common/Title.vue";
import sssp_img from "@/assets/images/common/temp/sssp.png";

const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

const videoList = [
  {
    label: "起点-龙翔大道",
    img: sssp_img,
  },
  {
    label: "黄阁路",
    img: sssp_img,
  },
  {
    label: "终点-大运中心",
    img: sssp_img,
  },
  {
    label: "大运路",
    img: sssp_img,
  },
  {
    label: "终点-龙翔大道",
    img: sssp_img,
  },
  {
    label: "国际大学园路",
    img: sssp_img,
  },
];

onMounted(() => {});

onActivated(() => {
  let obj = panelState.value;
  obj.rightWidth = 46.9;
  panelStore.setPanelState(obj);
});

onDeactivated(() => {
  let obj = panelState.value;
  obj.rightWidth = 30;
  panelStore.setPanelState(obj);
});
</script>

<template>
  <div class="page-wrap">
    <div class="module modu1">
      <Title text="监控视频" />
      <div class="content">
        <ul class="video-list">
          <li v-for="(item, index) in videoList" :key="index" v-bind="item">
            <div class="label">{{ item.label }}</div>
            <div class="img-wrap"><img :src="item.img" /></div>
          </li>
        </ul>
      </div>
      <Border />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-wrap {
  .modu1 {
    height: 100%;

    .content {
      margin-top: 0.5rem;
    }

    .video-list {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0;

      li {
        width: calc(50% - 0.7rem);
        height: 33.3%;
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
        .label {
          color: #fff;
          text-shadow: 0 0 0.45rem #158eff;
          font-family: "Source Han Sans CN";
          font-size: 1.3rem;
          font-style: normal;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .img-wrap {
          flex: 1;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
