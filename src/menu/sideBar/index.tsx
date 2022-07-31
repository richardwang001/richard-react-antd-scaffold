/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:20
 */
import React from 'react';
import { Menu, MenuProps, Space } from 'antd';
import { AntDesignOutlined} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { sideMenuItems, PagePathEnum, MenuClickEventProp } from '../menuConfig';
import style from './index.module.scss';
import { setOpenKeys } from '../menuSlice';

const SideBar: React.FC<MenuClickEventProp> = ({onMenuClick}) => {
  const dispatch = useDispatch();
  const menuSate = useSelector((state: RootState) => state.menu);
  const collapsed = menuSate.sideCollapsed;
  const activeKey = menuSate.activeKey;
  const openKeys=menuSate.openKeys;

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    dispatch(setOpenKeys(keys as PagePathEnum[]));
  }
  return (
    <Sider collapsedWidth={50} trigger={null} collapsible collapsed={collapsed}>
      <Space size="small" direction="horizontal" className={style.mainTitleSpace}>
        &nbsp;&nbsp;&nbsp;
        <AntDesignOutlined style={{ color: 'white' }}/>
        <h3 style={{ display: collapsed ? 'none' : '', color: 'white', wordBreak: 'keep-all' }}>一个标题XXXXXX</h3>
      </Space>
      <Menu
        theme="dark"
        mode="inline"
        items={sideMenuItems}
        selectedKeys={[activeKey]}
        onClick={onMenuClick}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
    </Sider>
  );
};

export default SideBar;