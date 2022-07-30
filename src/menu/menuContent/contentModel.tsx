/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/27 10:49
 */
import React from 'react';

export enum PaneTitleEnum {
  P1 = '页面一',
  P2 = '页面二',
  P3 = '页面三',
  P4 = '页面四',
}

export enum PagePathEnum {
  P1 = '/page1',
  P2 = '/page2',
  P3 = '/page3',
  P4 = '/page4',
}

export interface PaneType {
  title: PaneTitleEnum,
  key: PagePathEnum,
  component: React.ReactNode
}

export const allPanes: PaneType[] = [
  { title: PaneTitleEnum.P1, key: PagePathEnum.P1, component: <h1>{PaneTitleEnum.P1}</h1> },
  { title: PaneTitleEnum.P2, key: PagePathEnum.P2, component: <h1>{PaneTitleEnum.P2}</h1> },
  { title: PaneTitleEnum.P3, key: PagePathEnum.P3, component: <h1>{PaneTitleEnum.P3}</h1> },
  { title: PaneTitleEnum.P4, key: PagePathEnum.P4, component: <h1>{PaneTitleEnum.P4}</h1> }
];

export enum TabActionEnum {
  ADD = 'add',
  REMOVE = 'remove',
}

