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

let $router = reactive(useRouter());

onMounted(() => {});
onUpdated(() => {});
</script>

<template>
  <div class="header-wrap">
    <div class="title">
      <h2>龙岗智慧CIM平台</h2>
      <a-divider direction="vertical" />
      <h3>测试版</h3>
    </div>
    <div class="right-wrap">
      <div class="time"><Time /></div>
      <a-divider direction="vertical" />
      <div class="weather"><Weather /></div>
      <a-divider direction="vertical" />
      <div class="set">
        <a-button type="primary">
          <template #icon>
            <icon-settings />
          </template>
        </a-button>
      </div>
    </div>
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
  height: 5.25rem;

  padding: 0 2.4rem;

  .title {
    display: flex;
    align-items: center;
    width: fit-content;
    background-image: url("../../../assets/images/common/bg/titlebg.png");
    background-size: 100% 100%;
    padding: 0 2.5rem;
    height: 2.8rem;
    h2 {
      color: $font-color-secondary;
      font-size: 1.9rem;
      font-weight: 500;
      letter-spacing: 0.19rem;
    }
    h3 {
      font-size: 1.3rem;
      letter-spacing: 0.26rem;
    }
    .arco-divider {
      margin: 0 0.8rem;
      border-left: 0.05rem solid $font-color-active;
      height: 0.9rem;
    }
  }
  .right-wrap {
    display: flex;
    align-items: center;
    color: $font-color-secondary;
    font-size: 1.2rem;
    line-height: 1;

    .time,
    .weather {
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      padding: 0.3rem 1.2rem;
    }
    .time {
      background-image: url("../../../assets/images/common/bg/timebg.png");
    }
    :deep(.weather) {
      background-image: url("../../../assets/images/common/bg/weatherbg.png");
      z-index: 3;
      // height: 1.8rem;
      // padding: 0 1.2rem;
      #he-plugin-simple {
        font-size: 0.5rem !important;
        .s-sticker {
          display: flex;
          align-items: center;
          font-size: 1.2rem !important;
          padding: 0 !important;

          > div {
            line-height: 1 !important;
            display: flex;
          }
          .s-sticker-cond {
            height: 1.2rem;
            display: flex;
            align-items: center;
          }
        }
        img {
          width: 1.5rem;
          height: 1.5rem;
          min-width: 12px;
          min-height: 12px;
        }
      }
    }
    .set {
      display: inherit;
      margin-left: 0.5rem;
      :deep(.arco-btn) {
        width: 1.6rem;
        height: 1.6rem;
        transform: rotate(45deg);
        background-color: #222937;
        border-radius: 0;
        .arco-btn-icon {
          font-size: 0.8rem;
          color: #94a0b7;
        }
      }
    }
    .arco-divider {
      margin: 0 0.2rem;
      border-left: 0.4rem solid #222937;
      height: 0.2rem;
    }
  }
}
</style>
