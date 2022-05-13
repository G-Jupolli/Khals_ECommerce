import { AlignHorizontalLeftRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../Util/firebase';

import './Login.css';

function Login() {
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');

    const signIn = (e) => {
        e.preventDefault();

        // Link to database login
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
            })
            .catch(err => AlignHorizontalLeftRounded(err.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <div className='login__logo'>LOGO</div>
        </Link>

        <div className='login__container' >
            <h1>Sign-in</h1>

            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button className='login__signinButton' type='submit' onClick={signIn} > 
                    Sign in
                </button>

            </form>

            <p>
                Terms and Conditions.<br />This is not a real e commerce website so you do not have the ability to actually buy anything.
            </p>

            <button className='login__registerButton' onClick={register} >
                Create Account
            </button>

        </div>
    </div>
  )
}

export default Login