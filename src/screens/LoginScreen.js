import React, { useState } from 'react'
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
    const [signIn,setSignIn] = useState(false);

  return (
    <div className='loginscreen'>
       <div className='loginscreen_background'>
         <img  className='loginscreen_logo'
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' 
         alt=''></img>

         <button className='loginscreen_button' onClick={()=>setSignIn(true)}>Sign In</button>
         <div className='loginscreen_gradient' />
       </div>
       <div className='loginscreen_body'>
          {
            signIn ? (
              <SignupScreen/>
            ):(

              <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='loginscreen_input'>
                  <form>
                   <input type='email' placeholder='Email Address' />
                  <button className='loginscreen_getstated' onClick={()=>setSignIn(true)}>GET STARTED</button>
                  </form>
              </div>
              </>
              
            )
          }

         
       </div>
    </div>
  )
}

export default LoginScreen
