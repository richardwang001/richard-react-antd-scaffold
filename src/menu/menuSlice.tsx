/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 13:36
 */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PathEnum, PaneType } from './menuConfig';
import { getDefaultOpenKeys, getPaneByKey } from '../core/utils/panesTools';

interface MenuState {
  sideCollapsed:boolean,
  panes:PaneType[],
  activeKey:PathEnum,
  openKeys:PathEnum[]|undefined
}

const initialState: MenuState = {
  sideCollapsed:false,
  activeKey:PathEnum.P1,
  panes:[getPaneByKey(PathEnum.P1)!],
  openKeys: getDefaultOpenKeys(),
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers:{
    setSideCollapsed:(state, action: PayloadAction<boolean>) => {
      state.sideCollapsed = action.payload;
    },
    setActiveKey:(state, action: PayloadAction<PathEnum>) =>{
      state.activeKey = action.payload;
    },
    setPanes:(state, action: PayloadAction<PaneType[]>)=>{
      state.panes = action.payload;
    },
    addPane:(state, action: PayloadAction<PaneType>) =>{
      const hasSome = state.panes.some(pane => pane.key === action.payload.key);
      if (!hasSome) {state.panes.push(action.payload);}
    },
    removePane:(state,action: PayloadAction<PathEnum>)=>{
      const targetKey = action.payload;
      state.panes=state.panes.filter(pane => pane.key !== targetKey);
    },
    setOpenKeys:(state, action: PayloadAction<PathEnum[]>) =>{
      state.openKeys = action.payload;
    },
  }
});

export const {setSideCollapsed,removePane,setActiveKey,addPane,setOpenKeys,setPanes} = menuSlice.actions;
export default menuSlice.reducer;