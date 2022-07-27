/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 13:36
 */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PagePathEnum, pane1, pane2, PaneType } from './menuContent/contentModel';

interface MenuState {
  sideCollapsed:boolean,
  panes:PaneType[],
  activeKey:string
}

const initialState: MenuState = {
  sideCollapsed:true,
  activeKey:PagePathEnum.P1,
  panes:[pane1,pane2]
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
    addPane:(state, action: PayloadAction<PaneType>) =>{
      const hasSome = state.panes.some(pane => pane.key === action.payload.key);
      if (!hasSome) {state.panes.push(action.payload);}
    },
    removePane:(state,action: PayloadAction<PaneType>)=>{
      const targetKey = action.payload.key;
      const targetIndex = state.panes.findIndex((pane) => pane.key === targetKey);
      state.panes.splice(targetIndex,1);
      // if (newPanes.length && targetKey === activeKey) {
      //   const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      //   setActiveKey(key);
      // }
    }
  }
});

export const {setSideCollapsed,removePane} = menuSlice.actions;
export default menuSlice.reducer;