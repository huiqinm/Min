<script setup>
import {
  ref,
  toRaw,
  onMounted,
  reactive,
  computed,
  watch,
  onUpdated,
  readonly,
} from "vue";

import { useRouter } from "vue-router";
import Time from "@/components/header/Time.vue";
import Weather from "@/components/header/Weather.vue";
import Divider from "@/components/header/Divider.vue";

import img_l1 from "@/assets/images/header/l1.svg";
import img_l2 from "@/assets/images/header/l2.svg";
import img_l3 from "@/assets/images/header/l3.svg";
import img_title from "@/assets/images/header/title.svg";
import img_set from "@/assets/images/header/set.svg";
import img_fullscreen from "@/assets/images/header/fullscreen.svg";
import img_r1 from "@/assets/images/header/r1.svg";
import img_r2 from "@/assets/images/header/r2.svg";
import img_r3 from "@/assets/images/header/r3.svg";
import img_r4 from "@/assets/images/header/r4.svg";

import { ArrowDownBold } from "@element-plus/icons-vue";

let $router = reactive(useRouter());
const drawer = ref(false);

onMounted(() => {});
onUpdated(() => {});

function handleClose() {
  drawer.value = false;
}
</script>

<template>
  <div class="header-wrap">
    <div class="left-wrap">
      <Divider :width="2.4" />
      <img :src="img_l1" class="h56" />
      <img :src="img_title" class="h61" />
      <img :src="img_l2" class="h56" />
      <el-button @click="drawer = true" class="h40 m_top nav-btn">
        CIM+专题融合
        <el-icon style="margin-left: 0.8rem; font-size: 1.8rem"
          ><ArrowDownBold />
        </el-icon>
      </el-button>
      <img :src="img_l3" class="h40 m_top" />
      <Divider />
      <el-breadcrumb separator="/" class="h56">
        <el-breadcrumb-item>人房法专题</el-breadcrumb-item>
        <el-breadcrumb-item>人房法一图总览</el-breadcrumb-item>
        <el-breadcrumb-item>人口分级专题图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <Divider :width="2.4" style="flex: 1; margin: 0 0.4rem 0 0.8rem" />
    <div class="right-wrap">
      <img :src="img_r1" class="h24" />
      <div class="time"><Time /></div>
      <img :src="img_r2" class="h24" />
      <Divider />
      <img :src="img_r3" class="h24" />
      <div class="weather"><Weather /></div>
      <img :src="img_r4" class="h24" />
      <!-- <div class="weather"><Weather /></div> -->
      <Divider />
      <div class="fun-btn">
        <img :src="img_set" class="h40" />
      </div>
      <Divider />
      <div class="fun-btn">
        <img :src="img_fullscreen" class="h40" />
      </div>
      <Divider :width="2.4" />
    </div>
    <el-drawer
      v-model="drawer"
      title="I am the title"
      direction="ttb"
      :before-close="handleClose"
    >
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">
.header-wrap {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10.8rem;

  .left-wrap {
    display: flex;

    .m_top {
      margin-top: 0.8rem;
    }
    .nav-btn {
      background-color: $backgroud-color-dark2;
      border-radius: 0;
      border: none;
      color: #8affff;
      font-family: HarmonyOS Sans SC;
      font-size: 1.6rem;
      letter-spacing: 0.16rem;
    }
  }
  .right-wrap {
    display: flex;
    align-items: center;
    color: $font-color-secondary;
    font-size: 1.4rem;
    line-height: 1;

    .time,
    .weather {
      background: $backgroud-color-dark;
      opacity: 0.8;
      display: flex;
      align-items: center;
      padding: 0.3rem 1.2rem;
      height: 2.4rem;
    }

    :deep(.weather) {
      opacity: 0.9;
      z-index: 3;
      #he-plugin-simple {
        // font-size: 0.5rem !important;
        .s-sticker {
          display: flex;
          align-items: center;
          font-size: 1.4rem !important;
          padding: 0 !important;

          > div {
            line-height: 1 !important;
            display: flex;
          }
          .s-sticker-cond {
            height: 1.4rem;
            display: flex;
            align-items: center;
          }
        }
        img {
          width: 2rem;
          height: 2rem;
          min-width: 15px;
          min-height: 15px;
        }
      }
    }
    .fun-btn {
      cursor: pointer;
    }
  }
  .h56 {
    height: 5.6rem;
  }
  .h40 {
    height: 4rem;
  }
  .h61 {
    height: 6.1rem;
  }
  .h24 {
    height: 2.4rem;
  }
  :deep(.el-breadcrumb) {
    display: flex;
    align-items: center;
    margin-left: 0.8rem;

    .el-breadcrumb__inner,
    .el-breadcrumb__separator {
      color: #1f242e;
      font-size: 1.4rem;
      font-weight: 700;
      -webkit-text-stroke: 0.02rem #fff;
    }
  }
}
</style>
