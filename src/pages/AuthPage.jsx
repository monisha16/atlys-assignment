import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'src/assets/login-logo.svg';
import Login from '../components/Login';
import Register from 'src/components/Register';

const AuthPage = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const loggedInUser =
      JSON.parse(sessionStorage.getItem('loggedInUser')) || null;
    if (loggedInUser) {
      navigate('/home', { state: { user: loggedInUser } });
    }
  }, []);

  const handleLoginSubmit = ({ e, user }) => {
    e.preventDefault();

    const atlysUsersInLS = JSON.parse(localStorage.getItem('atlysUsers')) || [];

    const userExists = atlysUsersInLS.filter(
      (userInLS) =>
        userInLS.email === user.userInfo || userInLS.username === user.userInfo
    );

    // const isValidPass = userExists[0].password === user.password;

    if (userExists.length === 0) {
      // setMessage("User doesn't exists! Please Register.");
      setShowLogin((prev) => !prev);
    } else {
      sessionStorage.setItem('loggedInUser', JSON.stringify(userExists[0]));
      navigate('/home', { state: { user: userExists[0] } });
    }
  };

  const handleRegisterSubmit = ({ e, user }) => {
    const { email, username, password } = user;
    e.preventDefault();

    const atlysUser = {
      email: email,
      username: username,
      password: password,
    };

    let atlysUsersInLS = JSON.parse(localStorage.getItem('atlysUsers')) || [];

    const userExists = atlysUsersInLS.filter(
      (user) => user.email === email || user.username === username
    );

    if (userExists.length > 0) {
      // setMessage('User already exists!');
      setShowLogin((prev) => !prev);
    } else {
      atlysUsersInLS.push(atlysUser);
      localStorage.setItem('atlysUsers', JSON.stringify(atlysUsersInLS));
      sessionStorage.setItem('loggedInUser', JSON.stringify(atlysUser));
      // setMessage('User registered successfully!');
      navigate('/home', { state: { user: atlysUser } });
    }
  };

  return (
    <div className='h-full w-full flex flex-col justify-center items-center gap-12'>
      <img src={Logo} alt='logo' />

      <div className='p-0.5 rounded-[10px] bg-gradient-to-br from-[#969696] to-[#343434]'>
        <div className='bg-charcoal-light py-10 px-6 rounded-lg'>
          {showLogin ? (
            <Login
              setShowLogin={setShowLogin}
              handleLoginSubmit={handleLoginSubmit}
            />
          ) : (
            <Register
              setShowLogin={setShowLogin}
              handleRegisterSubmit={handleRegisterSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
