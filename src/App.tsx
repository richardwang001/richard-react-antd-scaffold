import 'antd/dist/antd.css';
import React from 'react';
import CustomMenu from './menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<CustomMenu/>}>
            <Route path="page1" element={<h1>页面一</h1>} />
            <Route path="page2" element={<h1>页面二</h1>} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;