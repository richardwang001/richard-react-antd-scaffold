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
import { addPane, setActiveKey, setPanes } from '../menuSlice';
import { PathEnum } from '../menuConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPaneByKey } from '../../core/utils/panesTools';
import { clearToken } from '../../pages/auth/authSlice';

const CustomMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname as PathEnum;
  const dispatch = useDispatch();

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === PathEnum.LOGOUT) {
      window.localStorage.clear();
      dispatch(clearToken());
      dispatch(setPanes([]));
      navigate(PathEnum.LOGIN, { replace: true });
    } else {
      navigate(key);
    }
  };

  useEffect(() => {
    if (path === '/' as PathEnum) {
      return;
    } else {
      dispatch(addPane(getPaneByKey(path)!));
      dispatch(setActiveKey(path));
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
