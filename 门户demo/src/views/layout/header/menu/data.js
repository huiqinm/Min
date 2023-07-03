import homeImg from "@/assets/images/common/icons/home.png";
import workImg from "@/assets/images/common/icons/work.png";
import familyImg from "@/assets/images/common/icons/family.png";
import businessImg from "@/assets/images/common/icons/business.png";
import policyImg from "@/assets/images/common/icons/policy.png";
import interactionImg from "@/assets/images/common/icons/interaction.png";
import syslinkImg from "@/assets/images/common/icons/syslink.png";
const menuList = [
  {
    name: "首页",
    key: "/",
    icon: homeImg,
    children: [], //二级菜单
  },
  {
    name: "工作动态",
    key: "/work",
    icon: workImg,
  },
  {
    name: "家人寻亲",
    key: "/family",
    icon: familyImg,
  },
  {
    name: "业务办理",
    key: "/business",
    icon: businessImg,
  },
  {
    name: "政策咨询",
    key: "/policy",
    icon: policyImg,
  },
  {
    name: "民政互动",
    key: "/interaction",
    icon: interactionImg,
  },
  {
    name: "系统跳转",
    key: "syslink",
    icon: syslinkImg,
    children: [
      {
        name: "baidu.com",
        key: "link_https://www.baidu.com/",
        icon: homeImg,
      },
      {
        name: "oa",
        key: "link_https://oa.chinadci.com/",
        icon: workImg,
      },
    ],
  },
  // 测试二级菜单
  // {
  //   name: "测试",
  //   key: "father",
  //   icon: workImg,
  //   children: [
  //     {
  //       name: "测试1",
  //       key: "/father/child1",
  //       icon: workImg,
  //     },
  //     {
  //       name: "测试2",
  //       key: "/father/child2",
  //       icon: workImg,
  //     },
  //   ],
  // },
];
export default menuList;
