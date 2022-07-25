/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:18
 */
import { Layout } from 'antd';
import React from 'react';
import style from './index.module.scss';
import SideBar from './sideBar';
import HeadBar from './headBar';
import MenuContent from './menuContent';

const CustomMenu:React.FC=()=>{
  return (
    <Layout className={style.mainLayout}>
      <SideBar/>
      <Layout className={style.siteLayout}>
        <HeadBar/>
        <MenuContent/>
      </Layout>
    </Layout>
  );
}

export default CustomMenu;
