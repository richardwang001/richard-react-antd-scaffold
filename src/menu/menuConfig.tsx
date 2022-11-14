/**
 * @desc 菜单内部配置文件，配置侧栏和头部菜单，配置菜单目录下的子路由
 */

import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { UserOutlined,QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';

/**
 * @desc 所有的路由路径
 */
export enum RoutePathAsMenuKeyEnum {
  Default = '/',
  Login = '/login',
  Logout = '/logout',
  Menu = '/menu',
  Help = '/menu/help',
  ImportUsers = '/menu/import_users',
}

/**
 * @desc 侧板和头部菜单的标题，对应着路由路径
 */
export const MenuItemTitle: { [k in RoutePathAsMenuKeyEnum]: string } = {
  '/': '',
  '/login': '登录',
  '/logout': '退出登录',
  '/menu' : '',
  '/menu/help': '帮助',
  '/menu/import_users': '用户'
};

/**
 * @desc 菜单目录下的子路由配置
 */
export const childRouteConfig: { path: RoutePathAsMenuKeyEnum, element: JSX.Element }[] = [
  {
    path: RoutePathAsMenuKeyEnum.Help,
    element: <h1>{MenuItemTitle[RoutePathAsMenuKeyEnum.Help]}页，正在开发中，敬请期待！</h1>
  },
  {
    path: RoutePathAsMenuKeyEnum.ImportUsers,
    element: <h1>{MenuItemTitle[RoutePathAsMenuKeyEnum.ImportUsers]}页，正在开发中，敬请期待！</h1>
  },

];

/**
 * @desc 侧栏菜单
 */
export const sideItems: ItemType[] = [
  {
    key:RoutePathAsMenuKeyEnum.ImportUsers,
    icon: <UserOutlined />,
    label:MenuItemTitle[RoutePathAsMenuKeyEnum.ImportUsers]
  },

];

/**
 * @desc 头部菜单
 */
export const headItems: ItemType[] = [
  {
    key:RoutePathAsMenuKeyEnum.Help,
    icon: <QuestionCircleOutlined />,
    label:MenuItemTitle[RoutePathAsMenuKeyEnum.Help]
  },

];
