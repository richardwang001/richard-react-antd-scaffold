/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/27 10:49
 */
import React from 'react';

export enum PaneTitleEnum {
  P1 = '页面一',
  P2 = '页面二',
}
export enum PagePathEnum {
  P1 = '/page1',
  P2 = '/page2',
}

export interface PaneType {
  title: PaneTitleEnum,
  key: PagePathEnum,
  component:React.ReactNode
}

export const pane1:PaneType = {title: PaneTitleEnum.P1,  key: PagePathEnum.P1, component:<h1>{PaneTitleEnum.P1}</h1> };
export const pane2:PaneType = {title: PaneTitleEnum.P2,  key: PagePathEnum.P2, component:<h1>{PaneTitleEnum.P2}</h1> };

export const panes: PaneType[] = [pane1, pane2];

