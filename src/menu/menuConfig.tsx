/**
 *@desc 菜单配置文件
 *@author Richard Wang
 *@date 2022/7/27 10:49
 */
import React from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { RadarChartOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined ,LogoutOutlined,HomeOutlined} from '@ant-design/icons';
import { Avatar, MenuProps } from 'antd';
import question from '../assets/pictures/question_fill_32px.png';
import about from '../assets/pictures/about_32px.png';
import Profile from '../pages/profile/profile';

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
export enum PathEnum {
  P1 = '/main/page1',
  P2 = '/main/page2',
  P21 = '/main/page2/page1',
  P22 = '/main/page2/page2',
  P3 = '/main/page3',
  P4 = '/main/page4',
  LOGIN='/login',
  USER='/main/user',
  USER_HOME='/main/user/home',
  LOGOUT='/main/user/logout',
  HELP = '/main/help',
  ABOUT = '/main/about',
}

export type PaneType = {
  label: React.ReactNode,
  key: PathEnum,
  icon?: React.ReactNode,
  component?: React.ReactNode,
  children?: PaneType[]
};

export enum TabActionEnum {
  ADD = 'add',
  REMOVE = 'remove',
}

export const allSidePanes: PaneType[] = [
  { label: PaneLabelEnum.P1, key: PathEnum.P1, icon: <UserOutlined/>, component: <h1>{PaneLabelEnum.P1}</h1> },
  {
    label: PaneLabelEnum.P2,
    key: PathEnum.P2,
    icon: <VideoCameraOutlined/>,
    children: [
      {
        label: `次级${PaneLabelEnum.P1}`,
        key: PathEnum.P21,
        icon: <VideoCameraOutlined/>,
        component: <h1>次级{PaneLabelEnum.P1}</h1>,
      },
      {
        label: `次级${PaneLabelEnum.P2}`,
        key: PathEnum.P22,
        icon: <VideoCameraOutlined/>,
        component: <h1>次级{PaneLabelEnum.P2}</h1>,
      }
    ]
  },
  { label: PaneLabelEnum.P3, key: PathEnum.P3, icon: <UploadOutlined/>, component: <h1>{PaneLabelEnum.P3}</h1> },
  { label: PaneLabelEnum.P4, key: PathEnum.P4, icon: <RadarChartOutlined/>, component: <h1>{PaneLabelEnum.P4}</h1> }
];

export const allHeadPanes: PaneType[] = [
  {
    label:PaneLabelEnum.HELP,
    key:PathEnum.HELP,
    icon:<img src={question} style={{height:26,width:26}} alt={"about"}/>,
    component:<h1>{PaneLabelEnum.HELP}</h1>
  },
  {
    label:PaneLabelEnum.ABOUT,
    key:PathEnum.ABOUT,
    icon:<img src={about} style={{height:24,width:24}} alt={"about"}/>,
    component:<h1>{PaneLabelEnum.ABOUT}</h1>
  },

  {
    label: PaneLabelEnum.USER,
    key: PathEnum.USER,
    icon:<Avatar src="https://joeschmoe.io/api/v1/random" />,
    children: [
      {
        label: PaneLabelEnum.USER_HOME,
        key: PathEnum.USER_HOME,
        icon: <HomeOutlined />,
        component: <Profile/>,
      },
      {
        label: PaneLabelEnum.LOGOUT,
        key: PathEnum.LOGOUT,
        icon: <LogoutOutlined style={{ color:'red' }}/>,
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