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
        showLeft: "true",
        showRight: "true",
        leftWidth: 10,
        rightWidth: 10,
      },
    };
  },
  actions: {
    setPanelState(obj) {
      this.panelState = obj;
    },
  },
});
