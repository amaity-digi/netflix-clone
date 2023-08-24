import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { authApp } from './firebase';
import Nav from './Nav';
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';

const ProfileScreen = () => {
     const user= useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
         <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt=' ' />

       <div className='profileScreen_details '>
        <h2>{user.email}</h2>
        <div className='profileScreen_plans'>
            <h2>Plans</h2>
            <PlansScreen/>
          <button
          onClick={() => authApp.signOut()}
           className='profileScreen_signOut'>Sign Out</button>
        </div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen