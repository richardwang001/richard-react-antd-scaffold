/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:18
 */
import { Layout, MenuProps } from 'antd';
import React from 'react';
import style from './index.module.scss';
import SideBar from './sideBar';
import HeadBar from './headBar';
import MenuContent from './menuContent';
import { useNavigate } from 'react-router-dom';

export interface MenuClickEventProp {
  onMenuClick:MenuProps['onClick']
}

const CustomMenu:React.FC=()=>{
  const navigate = useNavigate();

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };


  return (
    <Layout className={style.mainLayout}>
      <SideBar onMenuClick={onMenuClick}/>
      <Layout className={style.siteLayout}>
        <HeadBar onMenuClick={onMenuClick}/>
        <MenuContent/>
      </Layout>
    </Layout>
  );
}

export default CustomMenu;
