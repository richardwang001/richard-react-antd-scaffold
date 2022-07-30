/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:20
 */
import React, { useEffect } from 'react';
import { Menu, MenuProps, Space } from 'antd';
import {
  AntDesignOutlined,
  RadarChartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PagePathEnum, PaneTitleEnum } from '../menuContent/contentModel';
import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { getPaneByKey } from '../../core/utils/panesTools';
import { addPane } from '../menuSlice';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuSate = useSelector((state: RootState) => state.menu);
  const collapsed = menuSate.sideCollapsed;
  const activeKey = menuSate.activeKey;

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
    const findPane = getPaneByKey(key as PagePathEnum);
    findPane && dispatch(addPane(findPane));
  };

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
        selectedKeys={[activeKey]}
        onClick={onMenuClick}
        items={[
          {
            key: PagePathEnum.P1,
            icon: <UserOutlined/>,
            label: PaneTitleEnum.P1,
          },
          {
            key: PagePathEnum.P2,
            icon: <VideoCameraOutlined/>,
            label: PaneTitleEnum.P2,
          },
          {
            key: PagePathEnum.P3,
            icon: <UploadOutlined/>,
            label: PaneTitleEnum.P3,
          },
          {
            key: PagePathEnum.P4,
            icon: <RadarChartOutlined/>,
            label: PaneTitleEnum.P4,
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;