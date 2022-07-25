/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:56
 */
import style from './index.module.scss';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MenuContent:React.FC=()=>{

  return (
    <Content className={style.main}>
     <Outlet/>
    </Content>
  );
}

export default MenuContent;