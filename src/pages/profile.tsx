import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Profile:React.FC=()=>{
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  useEffect(() => {
    console.log('profile:',userInfo&&userInfo.username);
  }, []);

  return (
    <div>
      <h1>{userInfo&&userInfo.username}</h1>
      <h1>{userInfo&&userInfo.password}</h1>
    </div>
  )
}
export default Profile;
