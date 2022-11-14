import style from './index.module.scss';
import { Header } from 'antd/es/layout/layout';
import React  from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined,LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSideCollapsed } from '../menuSlice';
import { Button, Menu, Space, Tooltip } from 'antd';
import { MenuClickEventProp } from '../index';
import { headItems } from '../menuConfig';

const HeadBar:React.FC<MenuClickEventProp>=({onMenuClick})=>{
  const menuSate = useSelector((state: RootState) => state.menu);
  const {sideCollapsed,activeMenuKey} = menuSate;
  const dispatch = useDispatch();

  return (
    <Header className={style.siteLayoutBackground}>
      {React.createElement(sideCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: style.trigger,
        onClick: () => dispatch(setSideCollapsed(!sideCollapsed)),
      })}
      <Space>
        <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={[activeMenuKey]}
        onClick={onMenuClick}
        items={headItems}
      />
        <Tooltip title="退出登录">
          <Button size={'large'} type={'text'} icon={<LogoutOutlined/>} danger/>
        </Tooltip>
      </Space>
    </Header>
  );
}

export default HeadBar;