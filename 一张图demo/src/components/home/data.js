import {
  IconApps,
  IconList,
  IconBulb,
  IconSettings,
} from "@arco-design/web-vue/es/icon";
const menuList = [
  {
    name: "home",
    key: "/",
    icon: IconSettings,
  },
  {
    name: "about",
    key: "about",
    icon: IconBulb,
  },
  {
    name: "helloworld",
    key: "helloworld",
    icon: IconBulb,
  },
  {
    name: "user",
    key: "user",
    icon: IconBulb,
  },
  {
    name: "hello",
    key: "hello",
    icon: IconBulb,
  },
  {
    name: "资产概况",
    key: "asset",
    icon: IconApps,
  },
  {
    name: "资源目录",
    key: "resource-directory",
    children: [
      {
        name: "目录管理",

        key: "directory",
      },
      {
        name: "资源管理",
        key: "resource",
      },
    ],
  },
  {
    name: "数据源管理",
    key: "datasource",
    children: [
      {
        name: "数据库资源",
        key: "database",
      },
      {
        name: "NAS资源",
        key: "nas",
      },
    ],
  },
  {
    name: "数据汇聚",
    key: "data-aggregation",
    children: [
      {
        name: "数据源注册",
        key: "registration",
      },
      {
        name: "数据接入",
        key: "access",
      },
      {
        name: "汇聚任务管理",
        key: "task",
      },
      {
        name: "三维模型入库",
        key: "3dmodel-storage",
      },
    ],
  },
  {
    name: "数据融合",
    key: "data-fusion",
    children: [
      {
        name: "数据规范性质检",
        key: "quality-test",
      },
      {
        name: "多源数据空间融合",
        key: "multi-source-space",
      },
      {
        name: "项目数据串接融合",
        key: "project-data-concatenation",
      },
      {
        name: "数据全周期管理",
        key: "lifecycle",
      },
    ],
  },
  {
    name: "数据管理",
    key: "data",
    children: [
      {
        name: "数据更新管理",
        key: "update",
      },
      {
        name: "数据关联管理",
        key: "relation",
      },
    ],
  },
];
export default menuList;
