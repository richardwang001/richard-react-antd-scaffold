import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePathAsMenuKeyEnum } from '../menu/menuConfig';

const NoFoundPage: React.FC = () => {
  const navigate = useNavigate();

 return <Result
    status="404"
    title="404"
    subTitle="很抱歉，页面不存在！"
    extra={
      <Button type="primary" onClick={() => {navigate(RoutePathAsMenuKeyEnum.ImportUsers,{replace:true})}}>
        返回导入用户
      </Button>
    }
  />

}
export default NoFoundPage;