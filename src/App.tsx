import 'antd/dist/antd.css';
import React from 'react';
import CustomMenu from './menu';
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import { childRouteConfig, RoutePathAsMenuKeyEnum } from './menu/menuConfig';
import NoFoundPage from './pages/NoFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={RoutePathAsMenuKeyEnum.Menu}/>}/>
        <Route path={RoutePathAsMenuKeyEnum.Login} element={<h1>登录页</h1>}/>
        <Route path={RoutePathAsMenuKeyEnum.Menu} element={<CustomMenu/>}>
          {
            childRouteConfig.map(route => (
              <Route path={route.path} element={route.element}/>
            ))
          }
        </Route>
        <Route path="*" element={<NoFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;