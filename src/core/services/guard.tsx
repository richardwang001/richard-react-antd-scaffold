import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PathEnum } from '../../menu/menuConfig';
import React from 'react';
import { message } from 'antd';

const Guard = (props: { children: React.ReactNode }) => {
  const token = useSelector((state: RootState) => state.auth.token);

  if (token === ''||token === null||token === undefined) {
    message.error('您还未登录，请登录！');
    return <Navigate to={PathEnum.LOGIN} replace={true} />;
  }else { return <>{props.children}</>;}
};

export default Guard;
