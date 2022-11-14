/**
 *@desc 关于菜单的全局变量，控制侧栏的展开收起，控制当前选中的菜单项目
 *@author Richard Wang
 *@date 2022年11月14日11:25:05
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoutePathAsMenuKeyEnum } from './menuConfig';

interface MenuState {
  sideCollapsed: boolean,
  activeMenuKey: RoutePathAsMenuKeyEnum
}

const initialState: MenuState = {
  activeMenuKey: RoutePathAsMenuKeyEnum.ImportUsers,
  sideCollapsed: true
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSideCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sideCollapsed = action.payload;
    },
    setActiveMenuKey: (state, action: PayloadAction<RoutePathAsMenuKeyEnum>) => {
      state.activeMenuKey = action.payload;
    },

  }
});

export const { setSideCollapsed,setActiveMenuKey } = menuSlice.actions;
export default menuSlice.reducer;