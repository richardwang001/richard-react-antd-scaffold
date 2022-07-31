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
import { Menu } from 'antd';
import { headMenuItems, MenuClickEventProp } from '../menuConfig';

const HeadBar:React.FC<MenuClickEventProp> = ({onMenuClick})=>{
  const menuSate = useSelector((state: RootState) => state.menu);
  const collapsed = menuSate.sideCollapsed;
  const dispatch = useDispatch();

  return (
    <Header className={style.headerLayout}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: style.trigger,
        onClick: () => dispatch(setSideCollapsed(!collapsed)),
      })}
      <Menu
        className={style.headMenu}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        onClick={onMenuClick}
        items={headMenuItems}
      />
    </Header>
  );
}

export default HeadBar;