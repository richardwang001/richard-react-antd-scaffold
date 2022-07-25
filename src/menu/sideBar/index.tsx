/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:20
 */
import React from 'react';
import { Menu, Space } from 'antd';
import { AntDesignOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SideBar:React.FC=()=>{
  const menuSate = useSelector((state: RootState) => state.menu);
  const collapsed = menuSate.sideCollapsed;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Space size='small' direction='horizontal' style={{
        width:'100%',overflowX:'hidden',transform:'translateY(7px)',height:40
      }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AntDesignOutlined style={{color:'white'}}/>
        <h3 style={{display:collapsed?'none':'',color:'white',wordBreak:'keep-all'}}>一个标题XXXXXX</h3>
      </Space>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  );
}

export default SideBar;