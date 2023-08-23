<script setup>
import {
  ref,
  reactive,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
} from "vue";
import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";

import Title from "@/components/common/Title.vue";
import Border from "@/components/common/Border.vue";
import Quota from "@/components/common/Quota.vue";

import sssp_img from "@/assets/images/common/temp/sssp.png";
import qj_img from "@/assets/images/common/temp/qj.png";

import icon_mls from "@/assets/images/common/icons/半程马拉松icon.png";
import icon_jkp from "@/assets/images/common/icons/健康跑icon.png";

import icon_aed from "@/assets/images/common/icons/aed.png";
import icon_ylz from "@/assets/images/common/icons/医疗站.png";
import icon_jhc from "@/assets/images/common/icons/救护车.png";
import icon_wrj from "@/assets/images/common/icons/无人机.png";
import icon_sxt from "@/assets/images/common/icons/监控.png";
import icon_db from "@/assets/images/common/icons/地标.png";

const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

const quotaList = [
  {
    label: "AED",
    value: 31,
    unit: "个",
    icon: icon_aed,
  },
  {
    label: "医疗站",
    value: 4,
    unit: "个",
    icon: icon_ylz,
  },
  {
    label: "救护车",
    value: 12,
    unit: "个",
    icon: icon_jhc,
  },
  {
    label: "无人机",
    value: 31,
    unit: "个",
    icon: icon_wrj,
  },
  {
    label: "摄像头",
    value: 246,
    unit: "个",
    icon: icon_sxt,
  },
  {
    label: "地标",
    value: 35,
    unit: "个",
    icon: icon_db,
  },
];

onMounted(() => {});

onActivated(() => {
  let obj = panelState.value;
  obj.leftWidth = 21.15;
  panelStore.setPanelState(obj);
});

onBeforeUpdate(() => {});

onDeactivated(() => {
  let obj = panelState.value;
  obj.leftWidth = 30;
  panelStore.setPanelState(obj);
});
</script>

<template>
  <div class="page-wrap">
    <div class="module modu1">
      <Title />
      <div class="content">
        <div class="top">
          <Quota label="半程马拉松" value="21.9" unit="km" :icon="icon_mls" />
          <Quota label="健康跑" value="4.56" unit="km" :icon="icon_jkp" />
        </div>
        <div class="bottom">
          <Quota
            v-for="(item, index) in quotaList"
            :key="index"
            v-bind="item"
          />
        </div>
      </div>
      <Border />
    </div>
    <div class="module modu2">
      <Title text="赛事视频" />
      <div class="content"><img :src="sssp_img" /></div>
      <Border />
    </div>
    <div class="module modu3">
      <Title text="赛道全景" />
      <div class="content">
        <img :src="qj_img" />
      </div>
      <Border />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-wrap {
  display: flex;
  flex-direction: column;
  .modu1 {
    flex: 1;
    overflow: hidden;

    .content {
      padding-top: 0 !important;
    }
  }
  .modu2 {
    height: 14.85rem;
  }
  .modu3 {
    height: 12.25rem;
  }
  .content {
    .top {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.05rem solid rgba(148, 160, 183, 0.4);
      padding-bottom: 0.8rem;
      margin-bottom: 1.2rem;

      :deep(.quota-item) {
        .left {
          margin-right: 0.5rem;
        }
        .right {
          .label {
            font-size: 1.3rem;
            line-height: 1.6rem;
            color: #fff;
            text-shadow: 0 0 0.45rem #158eff;
            font-weight: 700;
            margin-bottom: 0.6rem;
          }
          .value {
            font-size: 2rem;
            font-family: "DIN Condensed";
            font-family: monospace;
            font-weight: 600;
          }

          .unit {
            font-size: 1.3rem;
            margin-left: 0.5rem;
          }
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      :deep(.quota-item) {
        width: 33.3%;
        margin-bottom: 1.75rem;
      }
    }
  }
}
</style>
