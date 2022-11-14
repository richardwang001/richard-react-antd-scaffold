# 本项目概况

## 项目文件结构说明
### 菜单组件
```markdown
src/menu/index.tsx // 菜单的汇总入口
src/menu/headBar // 头部菜单子组件
src/menu/sideBar // 侧边菜单子组件
src/menu/menuContent // 中间内容展示区子组件
src/pages // 将展示在菜单内容区的子页面
```

### 本项目全局状态选用 redux， 建议使用者沿用
1. 在需要全局变量的组件当前目录新建一个slice，可参考`src/menu/menuSlice.tsx`
2. 导出的 reducer 配置到 `src/redux/store.ts` 中