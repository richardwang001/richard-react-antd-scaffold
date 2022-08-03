/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 12:56
 */
import style from './index.module.scss';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Tabs } from 'antd';
import { PaneType, TabActionEnum } from '../menuConfig';
import { useDispatch, useSelector } from 'react-redux';
import { removePane } from '../menuSlice';
import { RootState } from '../../redux/store';
import { Outlet, useNavigate } from 'react-router-dom';
import { getNewActiveKeyAfterRemoving } from '../../core/utils/panesTools';

const { TabPane } = Tabs;
const MenuContent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuState = useSelector((state: RootState) => state.menu);
  const panes: PaneType[] = menuState.panes;
  const activeKey = menuState.activeKey;

  const onTabChange = (key: string) => {
    navigate(key);
  };

  const onEditTab = (targetKey: any, action: string) => {
    if (action === TabActionEnum.REMOVE) {
      dispatch(removePane(targetKey));
      const path = getNewActiveKeyAfterRemoving(panes, targetKey, activeKey);
      path && navigate(path, { replace: true });
    }
  };

  return (
    <Content className={style.main}>
      <Tabs
        hideAdd
        type="editable-card"
        tabBarGutter={0}
        activeKey={activeKey}
        onEdit={onEditTab}
        onChange={onTabChange}
      >
        {
          panes.map(p =>(
            <TabPane closable={panes.length > 1} tab={p.label} key={p.key} forceRender>
              <Outlet/>
            </TabPane>
            )
          )
        }
      </Tabs>
    </Content>
  );
};

export default MenuContent;