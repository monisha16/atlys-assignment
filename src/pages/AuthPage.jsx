import { useState } from 'react';
import Logo from 'src/assets/login-logo.svg';
import Login from '../components/Login';
import Register from 'src/components/Register';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='h-full w-full flex flex-col justify-center items-center gap-12'>
      <img src={Logo} alt='logo' />

      <div className='p-0.5 rounded-[10px] bg-gradient-to-r from-[#969696] to-[#343434]'>
        <div className='bg-charcoal-light py-10 px-6 rounded-lg'>
          {showLogin ? (
            <Login setShowLogin={setShowLogin} />
          ) : (
            <Register setShowLogin={setShowLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
