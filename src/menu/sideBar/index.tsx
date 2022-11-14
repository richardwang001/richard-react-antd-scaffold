import React from 'react';
import { Menu, Space } from 'antd';
import { AntDesignOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MenuClickEventProp } from '../index';
import { sideItems } from '../menuConfig';

const SideBar:React.FC<MenuClickEventProp>=({onMenuClick})=>{
  const menuSate = useSelector((state: RootState) => state.menu);
  const { sideCollapsed, activeMenuKey} = menuSate;

  return (
    <Sider trigger={null} collapsible collapsed={sideCollapsed}>
      <Space size='small' direction='horizontal' style={{
        width:'100%',overflowX:'hidden',transform:'translateY(7px)',height:40
      }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AntDesignOutlined style={{color:'white'}}/>
        <h3 style={{display:sideCollapsed?'none':'',color:'white',wordBreak:'keep-all'}}>一个标题XXXXXX</h3>
      </Space>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeMenuKey]}
        items={sideItems}
        onClick={onMenuClick}
      />
    </Sider>
  );
}

export default SideBar;