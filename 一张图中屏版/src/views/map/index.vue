<script setup>
import { ref, toRaw, onMounted, onActivated, reactive } from "vue";

import { storeToRefs } from "pinia";
import { usePanelStore } from "@/stores";
import Title from "@/components/common/Title.vue";
import MapTool from "@/components/map/MapTool.vue";

import icon_jkp from "@/assets/images/map/legend/jkp.png";
import icon_mls from "@/assets/images/map/legend/mls.png";
import icon_qd from "@/assets/images/map/legend/qd.png";
import icon_zd from "@/assets/images/map/legend/zd.png";
import icon_zfd from "@/assets/images/map/legend/zfd.png";
import icon_aed from "@/assets/images/map/legend/aed.png";
import icon_ylz from "@/assets/images/map/legend/ylz.png";
import icon_jhc from "@/assets/images/map/legend/jhc.png";
import icon_wrj from "@/assets/images/map/legend/wrj.png";
import icon_sxt from "@/assets/images/map/legend/sxt.png";

const panelStore = usePanelStore();
let { panelState } = storeToRefs(panelStore);

const legendList = [
  {
    label: "健康跑",
    icon: icon_jkp,
  },
  {
    label: "半程马拉松",
    icon: icon_mls,
  },
  {
    label: "起点",
    icon: icon_qd,
  },
  {
    label: "终点",
    icon: icon_zd,
  },
  {
    label: "折返点",
    icon: icon_zfd,
  },
  {
    label: "AED",
    icon: icon_aed,
  },
  {
    label: "医疗站",
    icon: icon_ylz,
  },
  {
    label: "救护车",
    icon: icon_jhc,
  },
  {
    label: "无人机",
    icon: icon_wrj,
  },
  {
    label: "摄像头",
    icon: icon_sxt,
  },
];
onMounted(() => {});

onActivated(() => {});

function onToolClick(val) {}
</script>

<template>
  <div class="map-wrap">
    <div class="map">
      <!-- 图例 -->
      <div
        class="legend-wrap"
        :style="{
          position: 'absolute',
          left: panelState.leftWidth + 2.4 + 1.5 + 'rem',
          top: '10.8rem',
        }"
      >
        <Title text="图例" />
        <ul class="legend-list">
          <li v-for="(item, index) in legendList" :key="index">
            <img :src="item.icon" />{{ item.label }}
          </li>
        </ul>
      </div>
      <!-- 工具条 -->
      <div
        class="tool-wrap"
        :style="{
          position: 'absolute',
          right: panelState.rightWidth + 2.4 + 1 + 'rem',
          bottom: '1rem',
        }"
      >
        <MapTool @tool-click="onToolClick" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.map-wrap {
  height: 100%;
  overflow: hidden;
  .map {
    height: 100%;
    background: url("../../assets/images/map/map.png");
    background-size: 100% 100%;
    opacity: 0.7;
    .legend-wrap,
    .tool-wrap {
      transition: all 0.5s;
      background-color: $backgroud-color-dark;
      opacity: 0.88;
    }

    .legend-wrap {
      width: 12.9rem;
      height: 35.25rem;

      .legend-list {
        padding: 1.85rem 0 0 0.6rem;
        li {
          display: flex;
          align-items: center;
          font-size: 1.4rem;

          &:not(:last-child) {
            margin-bottom: 1.5rem;
          }

          img {
            width: 1.6rem;
            height: 1.6rem;
            margin-right: 0.7rem;
          }
        }
      }
    }

    .tool-wrap {
      border-radius: 1rem;
    }
  }
}
</style>
