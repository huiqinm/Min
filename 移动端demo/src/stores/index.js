import { defineStore } from "pinia";

//用户信息
export const useUserInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      userInfo: { name: "小明", age: 18 },
    };
  },
  // getters: {},
  actions: {
    setUserInfo(obj) {
      this.userInfo = obj;
    },
  },
});

//左右两侧面板
export const usePanelStore = defineStore("panel", {
  state: () => {
    return {
      panelState: {
        showLeft: "true", //左侧面板是否展示
        showRight: "true", //右侧面板是否展示
        leftWidth: 30, //左侧面板宽度
        rightWidth: 30, //右侧面板宽度
      },
    };
  },
  actions: {
    setPanelState(obj) {
      this.panelState = obj;
    },
  },
});
