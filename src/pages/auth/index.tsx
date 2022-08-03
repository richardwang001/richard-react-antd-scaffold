import { Button, Checkbox, Form, Input, message } from 'antd';
import React from 'react';
import { useLoginMutation } from '../../core/services/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { PathEnum } from '../../menu/menuConfig';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [login, { isLoading }]= useLoginMutation();

  const onFinish = async (values:any) => {
    try {
      await login({
        username: values.username,
        password: values.password
      }).unwrap()
      // Being that the result is handled in extraReducers in authSlice,
      // we know that we're authenticated after this, so the user
      // and token will be present in the store
      navigate(PathEnum.USER_HOME);
    } catch (err) {
      message.error("登录失败："+err)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(errorInfo.errorFields[0].errors);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
      style={{
        position: 'absolute',
        width: '428px',
        right: '50%',
        top: '50%',
        transform: 'translate(50%,-50%)'
      }}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>记住</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;