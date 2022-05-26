import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { auth } from '../../Util/firebase';

import Logo from './../../Util/Logo.png';

import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
         .signInWithEmailAndPassword(email, password)
         .then(auth => {
            navigate('/');
         })
         .catch(err => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            })
            .catch(err => alert(err.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src={Logo} alt='Acerune Isle' />
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

            <small>You can create an account by entering an email and password or use the test account:</small>
            <small>Email: test123@gmail.com</small>
            <small>Password: password</small>

        </div>
    </div>
  )
}

export default Login