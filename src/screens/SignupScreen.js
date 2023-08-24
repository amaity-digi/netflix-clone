import React, { useRef } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {  signInWithEmailAndPassword } from "firebase/auth";

import { getAuth } from "firebase/auth";
import './SignupScreen.css';

const SignupScreen = () => {
    const emailRef=useRef(null);//userRef Hooks is basically pointing an elements
    const passwordRef=useRef(null);

    
    const register =(e)=>{
       e.preventDefault();

       const auth = getAuth();
      createUserWithEmailAndPassword(
         auth,
         emailRef.current.value,
         passwordRef.current.value
       ).then((authUser)=>{
        console.log(authUser)
       })
       .catch((error)=>{
          alert(error.message);
       });
    };

    const signIn =(e)=>{
       e.preventDefault();

       const auth = getAuth();
     signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
     ).then((authUser)=>{
      console.log(authUser)
     })
     .catch((error)=>{
        alert(error.message);
     });

    }
  return (
    <div className='signupScreen'>
       <form>
        <h1>Sign In</h1>
        <input placeholder='Email' ref={emailRef} type='email' />
        <input placeholder='Password' ref={passwordRef} type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
           <span className='signupScreen_gray'> New to Netflix? </span>
           <span className='signupScreen_link' onClick={register }>Sign up now.</span> 
        </h4>
       </form>
    </div>
  )
}

export default SignupScreen