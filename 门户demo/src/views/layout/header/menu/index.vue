<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import {
  IconApps,
  IconList,
  IconBulb,
  IconSettings,
} from "@arco-design/web-vue/es/icon";
import menuList from "./data.js";
let $router = reactive(useRouter());

function onMenuItemClick(val) {
  console.log("val======", val);
  if (val.indexOf("link_") > -1) {
    const url = val.split("link_")?.[1];
    window.open(url);
  } else {
    val = val === "index" ? "/" : val;
    $router.push(val);
  }
}
</script>

<template>
  <div>
    <a-menu
      mode="horizontal"
      :selected-keys="[$router.currentRoute.path]"
      @menu-item-click="onMenuItemClick"
    >
      <template v-for="(item, index) in menuList" :key="index">
        <template v-if="item.children && item.children.length > 0">
          <a-sub-menu :key="item.key">
            <template #icon>
              <img :src="item.icon" />
            </template>
            <template #title>{{ item.name }}</template>
            <a-menu-item v-for="(child, i) in item.children" :key="child.key">
              <template #icon>
                <img :src="child.icon" />
              </template>
              {{ child.name }}
            </a-menu-item>
          </a-sub-menu></template
        >
        <template v-else>
          <a-menu-item :key="item.key">
            <template #icon>
              <img :src="item.icon" />
            </template>
            {{ item.name }}
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<style scoped lang="scss">
:deep(.arco-menu-horizontal) {
  .arco-menu-inner {
    padding: 0;
    overflow: hidden;
    .arco-menu-overflow-wrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .arco-menu-item,
      .arco-menu-pop {
        padding: 0.2rem 0.6rem;
        margin-left: 0;
        font-size: 0.67rem;
        height: 100%;
        display: flex;
        align-items: center;
        background: transparent;

        .arco-menu-icon {
          margin-right: 0.3rem;

          overflow: hidden;
          width: 1rem;
          height: 1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &.arco-menu-selected,
        &:hover {
          background: #e3f2ff;
          border-radius: 1rem;

          .arco-menu-icon {
            text-indent: -1rem;
            img {
              filter: drop-shadow(1rem 0 #4aaafd);
            }
          }
        }
      }
    }
  }

  .arco-menu-selected-label {
    display: none;
  }
}

:deep(.arco-trigger-menu-icon) {
  width: 1rem;
  height: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
