import './SignIn.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setToken, setUserProfile } from '../../features/userSlice';
import { loginUser, getUserProfile } from '../../services/authApi';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.target);
    const email = formData.get('username');
    const password = formData.get('password');
    const rememberMe = formData.get('remember-me');

    try {
      const loginData = await loginUser({ email, password });
      const token = loginData.body.token;

      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      dispatch(setToken(token));

      const profileData = await getUserProfile(token);
      dispatch(setUserProfile(profileData.body));

      navigate('/User');
    } catch (error) {
      setErrorMessage(error.message || 'Identifiants incorrects');
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