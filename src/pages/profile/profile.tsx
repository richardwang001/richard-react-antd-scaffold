import React from 'react';
import style from './profile.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Profile:React.FC=()=>{
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  return (
    <div className={style.main}>
      <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
      <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
      <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
      <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
      <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
      <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
       <h1>用户名：{userInfo&&userInfo.username}</h1>
      <h1>密码：{userInfo&&userInfo.password}</h1>
    </div>
  )
}
export default Profile;
