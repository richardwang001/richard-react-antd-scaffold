/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:18
 */
import { Layout, MenuProps } from 'antd';
import React, { useEffect } from 'react';
import style from './index.module.scss';
import SideBar from './sideBar';
import HeadBar from './headBar';
import MenuContent from './menuContent';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveMenuKey } from './menuSlice';
import { RoutePathAsMenuKeyEnum } from './menuConfig';

export interface MenuClickEventProp {
  onMenuClick: MenuProps['onClick'];
}

const CustomMenu: React.FC = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname as RoutePathAsMenuKeyEnum;
  const dispatch = useDispatch();

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
    dispatch(setActiveMenuKey(key as RoutePathAsMenuKeyEnum));
  };

  useEffect(() => {
    if (path !== RoutePathAsMenuKeyEnum.Default) {
      dispatch(setActiveMenuKey(path));
    }
  }, [path]);

  return (
    <Layout className={style.mainLayout}>
      <SideBar onMenuClick={onMenuClick}/>
      <Layout className={style.siteLayout}>
        <HeadBar onMenuClick={onMenuClick}/>
        <MenuContent/>
      </Layout>
    </Layout>
  );
};

export default CustomMenu;
