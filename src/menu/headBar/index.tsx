/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:52
 */
import style from './index.module.scss';
import { Header } from 'antd/es/layout/layout';
import React  from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSideCollapsed } from '../menuSlice';

const HeadBar:React.FC=()=>{
  const menuSate = useSelector((state: RootState) => state.menu);
  const collapsed = menuSate.sideCollapsed;
  const dispatch = useDispatch();

  return (
    <Header className={style.siteLayoutBackground}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: style.trigger,
        onClick: () => dispatch(setSideCollapsed(!collapsed)),
      })}
    </Header>
  );
}

export default HeadBar;