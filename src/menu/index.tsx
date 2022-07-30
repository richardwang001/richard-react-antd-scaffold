/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:18
 */
import { Layout } from 'antd';
import React, { useEffect } from 'react';
import style from './index.module.scss';
import SideBar from './sideBar';
import HeadBar from './headBar';
import MenuContent from './menuContent';
import { setActiveKey } from './menuSlice';
import { PagePathEnum } from './menuContent/contentModel';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CustomMenu:React.FC=()=>{
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveKey(path as PagePathEnum));
  }, [path]);


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
