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
let $router = reactive(useRouter());

// 引入swiper组件
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
import "swiper/css/navigation"; // 轮播图两边的左右箭头
import "swiper/css/scrollbar"; // 轮播图的滚动条
// 引入swiper核心和所需模块
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar];

let swiperOption = {
  spaceBetween: 0,
  slidesPerView: 4, // 一屏显示的slide个数  'auto'
  slidesPerGroup: 1, //每组多少个swiper滑块
  // scrollbar: { draggable: true },
  grabCursor: false, //抓手光标
  // navigation: true,  //1:默认前进后退按钮在容器内
  // 2:前进后退按钮在容器外
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hiddenClass: "button-hidden", //隐藏时的class
    disabledClass: "button-disabled", //不可用时的class
  },
};

let menuList = [
  { path: "/", text: "CIM数据视窗" },
  { path: "/nav1", text: "土地监关" },
  { path: "/nav2", text: "住建业务决策" },
  { path: "/nav3", text: "住建系统决策" },
  { path: "/test", text: "test" },
];

onMounted(() => {});
onUpdated(() => {});

function onMenuItemClick(val) {
  $router.push(val);
}

function onMenuClick(path) {
  $router.push(path);
}
</script>

<template>
  <div class="menu-wrap">
    <div class="swiper-wrap">
      <swiper :modules="modules" class="mySwiper" v-bind="swiperOption">
        <swiper-slide v-for="(item, index) in menuList" :key="index">
          <el-button
            :class="{ active: $router.currentRoute.path === item.path }"
            @click="onMenuClick(item.path)"
            >{{ item.text }}</el-button
          >
        </swiper-slide>
      </swiper>
      <!--前进后退按钮，放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev swiper-button"></div>
      <div class="swiper-button-next swiper-button"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./my_swiper.scss"></style>
<style scoped lang="scss">
.menu-wrap {
  width: 64.5rem;
  position: absolute;
  left: calc(50% - 32.25rem);
  bottom: 1.5rem;

  .swiper-wrap {
    background-image: url("../../../assets/images/common/bg/menubg.png");
    background-size: 100% 100%;
    margin: 0 auto;
    width: 100%;
    height: 4.8rem;
    padding: 0 10rem;
  }
}
</style>
