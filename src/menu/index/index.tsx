/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:18
 */
import { Layout, MenuProps } from 'antd';
import React, { useEffect } from 'react';
import style from './index.module.scss';
import SideBar from '../sideBar';
import HeadBar from '../headBar';
import MenuContent from '../menuContent';
import { addPane, setActiveKey } from '../menuSlice';
import { PagePathEnum } from '../menuConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPaneByKey } from '../../core/utils/panesTools';

const CustomMenu:React.FC=()=>{
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
    const findPane = getPaneByKey(key as PagePathEnum);
    findPane && dispatch(addPane(findPane));
  };

  useEffect(() => {
    dispatch(setActiveKey(path as PagePathEnum));
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
}

export default CustomMenu;
