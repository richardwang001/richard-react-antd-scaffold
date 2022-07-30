/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 13:36
 */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PagePathEnum, allPanes, PaneType } from './menuContent/contentModel';

interface MenuState {
  sideCollapsed:boolean,
  panes:PaneType[],
  activeKey:PagePathEnum
}

const initialState: MenuState = {
  sideCollapsed:true,
  activeKey:PagePathEnum.P1,
  panes:allPanes
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers:{
    setSideCollapsed:(state, action: PayloadAction<boolean>) => {
      state.sideCollapsed = action.payload;
    },
    setActiveKey:(state, action: PayloadAction<PagePathEnum>) =>{
      state.activeKey = action.payload;
    },
    setPanes:(state, action: PayloadAction<PaneType[]>)=>{
      state.panes = action.payload;
    },
    addPane:(state, action: PayloadAction<PaneType>) =>{
      const hasSome = state.panes.some(pane => pane.key === action.payload.key);
      if (!hasSome) {state.panes.push(action.payload);}
    },
    removePane:(state,action: PayloadAction<PagePathEnum>)=>{
      const targetKey = action.payload;
      state.panes=state.panes.filter(pane => pane.key !== targetKey);
    }
  }
});

export const {setSideCollapsed,removePane,setActiveKey,addPane,setPanes} = menuSlice.actions;
export default menuSlice.reducer;