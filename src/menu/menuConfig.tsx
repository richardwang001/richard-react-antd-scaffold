/**
 *@desc 菜单配置文件
 *@author Richard Wang
 *@date 2022/7/27 10:49
 */
import React from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { RadarChartOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined ,LogoutOutlined,HomeOutlined,QuestionOutlined} from '@ant-design/icons';
import { Avatar, MenuProps } from 'antd';
import question from '../assets/pictures/question_fill_32px.png';
import about from '../assets/pictures/about_32px.png';

// 1. 配置 menuItem 和 tabBar 标题枚举
export enum PaneLabelEnum {
  P1 = '页面一',
  P2 = '页面二',
  P3 = '页面三',
  P4 = '页面四',
  USER = '我的',
  USER_HOME = '主页',
  LOGOUT = '退出',
  HELP = '帮助',
  ABOUT = '关于',
}

// 2. 配置路由路劲（亦作为侧栏和多标签的 activeKey ）
export enum PagePathEnum {
  P1 = '/page1',
  P2 = '/page2',
  P21 = '/page2/page1',
  P22 = '/page2/page2',
  P3 = '/page3',
  P4 = '/page4',
  USER='/user',
  USER_HOME='/user/home',
  LOGOUT='/user/logout',
  HELP = '/help',
  ABOUT = '/about',
}

export type PaneType = {
  label: React.ReactNode,
  key: PagePathEnum,
  icon?: React.ReactNode,
  component?: React.ReactNode,
  children?: PaneType[]
};

export enum TabActionEnum {
  ADD = 'add',
  REMOVE = 'remove',
}

export const allSidePanes: PaneType[] = [
  { label: PaneLabelEnum.P1, key: PagePathEnum.P1, icon: <UserOutlined/>, component: <h1>{PaneLabelEnum.P1}</h1> },
  {
    label: PaneLabelEnum.P2,
    key: PagePathEnum.P2,
    icon: <VideoCameraOutlined/>,
    children: [
      {
        label: `次级${PaneLabelEnum.P1}`,
        key: PagePathEnum.P21,
        icon: <VideoCameraOutlined/>,
        component: <h1>次级{PaneLabelEnum.P1}</h1>,
      },
      {
        label: `次级${PaneLabelEnum.P2}`,
        key: PagePathEnum.P22,
        icon: <VideoCameraOutlined/>,
        component: <h1>次级{PaneLabelEnum.P2}</h1>,
      }
    ]
  },
  { label: PaneLabelEnum.P3, key: PagePathEnum.P3, icon: <UploadOutlined/>, component: <h1>{PaneLabelEnum.P3}</h1> },
  { label: PaneLabelEnum.P4, key: PagePathEnum.P4, icon: <RadarChartOutlined/>, component: <h1>{PaneLabelEnum.P4}</h1> }
];

export const allHeadPanes: PaneType[] = [
  {
    label:PaneLabelEnum.HELP,
    key:PagePathEnum.HELP,
    icon:<img src={question} style={{height:26,width:26}}/>,
    component:<h1>{PaneLabelEnum.HELP}</h1>
  },
  {
    label:PaneLabelEnum.ABOUT,
    key:PagePathEnum.ABOUT,
    icon:<img src={about} style={{height:24,width:24}}/>,
    component:<h1>{PaneLabelEnum.ABOUT}</h1>
  },

  {
    label: PaneLabelEnum.USER,
    key: PagePathEnum.USER,
    icon:<Avatar src="https://joeschmoe.io/api/v1/random" />,
    children: [
      {
        label: PaneLabelEnum.USER_HOME,
        key: PagePathEnum.USER_HOME,
        icon: <HomeOutlined />,
        component: <h1>用户主页</h1>,
      },
      {
        label: PaneLabelEnum.LOGOUT,
        key: PagePathEnum.LOGOUT,
        icon: <LogoutOutlined style={{ color:'red' }}/>,
        component: <h1>退出</h1>,
      }
    ]
  }
];

export const allPanes: PaneType[] = allSidePanes.concat(allHeadPanes);

export const sideMenuItems: ItemType[] = allSidePanes.map(p => {
  return {
    label: p.label,
    key: p.key,
    icon: p.icon,
    children: p.children,
  };
});

export const headMenuItems: ItemType[] = allHeadPanes.map(p => {
  return {
    label: p.label,
    key: p.key,
    icon: p.icon,
    children: p.children
  };
});

export interface MenuClickEventProp {
  onMenuClick:MenuProps['onClick']
}