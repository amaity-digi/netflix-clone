import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Check from './Check';
import LoginScreen from './screens/LoginScreen';
import { authApp } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';

function App() {
   const user= useSelector(selectUser);
   const dispatch=useDispatch();

   useEffect(() => {
     const unsubscribe= authApp.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //logged in
       console.log(userAuth);
       dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,

       }))
       
      }else{
        //logged out
      dispatch(logout());
      }
     });
     return unsubscribe;
   },[dispatch])

  return (
    <Router>
    <div className="app">

      {
        !user?(
          <LoginScreen/>
        ):(
      
      
     <Routes >
          <Route path="/" element={<HomeScreen />}></Route>          
          <Route path='/test'  element={<Check />}></Route>
          <Route path='/profile'  element={<ProfileScreen />}></Route>
        </Routes >
         )};
    </div>
    </Router>
  );
}

export default App;
