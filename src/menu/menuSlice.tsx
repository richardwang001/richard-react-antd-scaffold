/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 13:36
 */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
  sideCollapsed:boolean,
  activeKey:string
}

const initialState: MenuState = {
  activeKey: '',
  sideCollapsed:true
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers:{
    setSideCollapsed:(state, action: PayloadAction<boolean>) => {
      state.sideCollapsed = action.payload;
    },
  }
});

export const {setSideCollapsed} = menuSlice.actions;
export default menuSlice.reducer;