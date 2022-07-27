/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:56
 */
import style from './index.module.scss';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Tabs } from 'antd';
import { pane1, panes } from './contentModel';
import { useDispatch, useSelector } from 'react-redux';
import { removePane } from '../menuSlice';
import { RootState } from '../../redux/store';
const {TabPane} = Tabs;
const MenuContent:React.FC=()=>{
  const dispatch = useDispatch();
  const menuState = useSelector((state: RootState) => state.menu);
  return (
    <Content className={style.main}>
      <Tabs
        hideAdd
        type="editable-card"
        tabBarGutter={0}
        onEdit={()=>dispatch(removePane(pane1))}
      >
        {
          menuState.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key} forceRender>
              {pane.component}
            </TabPane>
          ))
        }
      </Tabs>
    </Content>
  );
}

export default MenuContent;