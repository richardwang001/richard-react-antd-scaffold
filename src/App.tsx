import 'antd/dist/antd.css';
import React from 'react';
import CustomMenu from './menu/index';
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import { get1DPanes } from './core/utils/panesTools';
import Login from './pages/auth';
import { PathEnum } from './menu/menuConfig';
import Guard from './core/services/guard';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={PathEnum.USER_HOME}/>}/>
        <Route path={PathEnum.LOGIN} element={<Login/>}/>
        <Route path="/main" element={<Guard><CustomMenu/></Guard>}>
          {
            get1DPanes().map(p => <Route key={p.key} path={p.key} element={p.component}/>)
          }
        </Route>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;