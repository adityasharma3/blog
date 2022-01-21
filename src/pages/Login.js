import React from 'react';
import { LoginPage } from '../GlobalStyles';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem('isAuth', true);
                setIsAuth(true);
                navigate('/');
            });
    };

    return (
        <LoginPage>
            <button
                className='login-with-google-btn'
                onClick={signInWithGoogle}
            >
                Sign In with Google
            </button>
        </LoginPage>
    )
}

export default Login
