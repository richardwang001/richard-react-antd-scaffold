import 'antd/dist/antd.css';
import React from 'react';
import CustomMenu from './menu/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { get1DPanes } from './core/utils/panesTools';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomMenu/>}>
          {
            get1DPanes().map(p => <Route path={p.key} element={p.component}/>)
          }
          <Route path="*" element={<h1>404</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;