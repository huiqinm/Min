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
  // centeredSlides: true, // 居中的slide是否标记为active，默认是最左active,这样样式即可生效
  // slideToClickedSlide: true, // 点击的slide会居中
  // loop: true, // 循环播放, 可有无限滚动效果，初始加载即是滚动后的效果
  scrollbar: { draggable: true },
  grabCursor: true, //抓手光标
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay
  //   pauseOnMouseEnter: true, //鼠标置于swiper是否时暂停自动切换
  // },
  //使用前进后退按钮来控制Swiper切换。
  // navigation: true,  //1:默认前进后退按钮在容器内
  // 2:前进后退按钮在容器外
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hiddenClass: "button-hidden", //隐藏时的class
    disabledClass: "button-disabled", //不可用时的class
  },

  //使用分页器导航
  // pagination: {
  //   clickable: true,
  // },
};

let menuList = [
  { path: "/", text: "CIM数据视窗" },
  { path: "/nav1", text: "土地监关" },
  { path: "/nav2", text: "住建业务决策" },
  { path: "/nav3", text: "住建系统决策" },
  { path: "/nav3", text: "aa" },
  { path: "/nav3", text: "bb" },
  { path: "/nav3", text: "cc" },
  { path: "/nav3", text: "dd" },
  { path: "/nav3", text: "ee" },
];

onMounted(() => {});
onUpdated(() => {});

function onMenuItemClick(val) {
  $router.push(val);
}

function onSwiper(swiper) {
  console.log(swiper);
}

function onSlideChange(val) {
  console.log(val);
}

function onMenuClick(path) {
  console.log("path===========", path);
}
</script>

<template>
  <div class="menu-wrap">
    <a-menu
      mode="horizontal"
      :selected-keys="[$router.currentRoute.path]"
      @menu-item-click="onMenuItemClick"
    >
      <a-menu-item key="/">
        CIM数据视窗<!-- <RouterLink to="/">Home</RouterLink> -->
      </a-menu-item>
      <a-menu-item key="/nav1"> 土地监关 </a-menu-item>
      <a-menu-item key="/nav2"> 住建业务决策 </a-menu-item>
      <a-menu-item key="/nav3"> 住建系统决策 </a-menu-item>
      <a-menu-item key="/nav3"> 住建系统决策 </a-menu-item>
    </a-menu>
    <div class="swiper-wrap">
      <swiper
        :modules="modules"
        class="mySwiper"
        v-bind="swiperOption"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in menuList" :key="index">
          <a-button @click="onMenuClick(item.path)">{{ item.text }}</a-button>
        </swiper-slide>
      </swiper>
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev"></div>
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./my_swiper.scss"></style>
<style scoped lang="scss">
.menu-wrap {
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  // display: flex;
  justify-content: center;

  .swiper-wrap {
    background-image: url("../../../assets/images/common/bg/menubg.png");
    background-size: 100% 100%;
    margin: 0 auto;
    width: 64.5rem;
    height: 4.8rem;
    padding: 0 10rem;
  }

  :deep(.arco-menu-horizontal) {
    width: fit-content;
    width: 64.5rem;
    height: 4.8rem;
    padding: 0 8rem;
    background-image: url("../../../assets/images/common/bg/menubg.png");
    background-size: 100% 100%;
    background-color: transparent;
    margin: 0 auto 1rem;
    .arco-menu-inner {
      padding: 0;
      overflow: hidden;
      .arco-menu-overflow-wrap {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .arco-menu-item {
          padding: 0;
          margin-left: 0;
          color: #a8d8d8;
          font-size: 1.2rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          background: transparent;
          background-image: url("../../../assets/images/common/bg/menuitem1.png");
          background-size: 100% 100%;
          padding: 0 2.2rem;

          &:not(:last-child) {
            margin-right: 0.5rem;
          }

          .arco-menu-icon {
            margin-right: 0.9rem;
          }

          &.arco-menu-selected {
            color: $font-color-active;
            font-weight: 600;
          }
        }
      }
    }

    .arco-menu-selected-label {
      display: none;
    }
  }
}
</style>
