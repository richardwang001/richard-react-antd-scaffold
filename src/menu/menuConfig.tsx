/**
 * @desc 所有的路由路径
 * @property Login 登录页面路径
 * @property Help 帮助页面路径
 * @property ImportUsers 导入IM用户的页面路径
 */

export enum RoutePathAsMenuKeyEnum {
  Login = '/login',
  Menu = '/menu',
  Help = '/menu/help',
  ImportUsers = '/menu/import_users'
}

/**
 * @desc 侧板和头部菜单的标题，对应着路由路径
 */
export const MenuItemTitle: { [k in RoutePathAsMenuKeyEnum]: string } = {
  '/login': '登录',
  '/menu' : '',
  '/menu/help': '帮助',
  '/menu/import_users': '导入用户'
};

/**
 * @desc 路由配置
 */
export const childRouteConfig: { path: RoutePathAsMenuKeyEnum, element: JSX.Element }[] = [
  {
    path: RoutePathAsMenuKeyEnum.Help,
    element: <h1>帮助页，正在开发中，敬请期待！</h1>
  },
  {
    path: RoutePathAsMenuKeyEnum.ImportUsers,
    element: <h1>导入用户页，正在开发中，敬请期待！</h1>
  },

];