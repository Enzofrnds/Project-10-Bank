import './SignIn.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setToken, setUserProfile } from '../../features/userSlice';

const API_URL = 'http://localhost:3001/api/v1/user';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.target);
    const email = formData.get('username'); // L'API d'Argent Bank attend l'email ici
    const password = formData.get('password');
    const rememberMe = formData.get('remember-me');

    try {
      const loginResponse = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        throw new Error(loginData.message || 'Identifiants incorrects');
      }

      const token = loginData.body.token;

      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      
      dispatch(setToken(token));

      const profileResponse = await fetch(`${API_URL}/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
        const profileData = await profileResponse.json();
        if(profileResponse.ok) {
          dispatch(setUserProfile(profileData.body));
        }

       navigate('/User'); 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="signIn-main main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {}
          {errorMessage && (
            <p className="error-message">
              {errorMessage}
            </p>
          )}

          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;