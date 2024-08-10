import PropTypes from 'prop-types';
import { useState } from 'react';

import Arrow from 'src/assets/arrow_back.svg';
import ClosedEyeLogo from 'src/assets/closed_eye.svg';
import EyeLogo from 'src/assets/eye.svg';

const LoginScreen = (props) => {
  const { setShowLogin } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center mb-[45px]'>
        <span className='text-[#6B6C70] mb-2 text-sm'>WELCOME BACK</span>
        <span className='text-lg text-white font-bold'>
          Log into your account
        </span>
      </div>

      {/* <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-light'>Email or Username</span>
          <span className='border-[1.5px] border-charcoal-medium rounded p-3 min-w-[415px] text-gray-medium mt-[10px]'>
            Enter your email or username
          </span>
        </div>

        <div>
          <div className='flex justify-between items-baseline'>
            <span className='text-sm text-gray-light'>Password</span>
            <span className='text-xs text-gray-light  hover:cursor-pointer'>
              Forgot password?
            </span>
          </div>

          <div className='border-[1.5px] border-charcoal-medium rounded p-3 min-w-[415px] text-gray-medium mt-[10px] flex justify-between items-center'>
            <span>Enter your password </span>
            <img src={EyeLogo} alt='show' className='hover:cursor-pointer' />
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='flex items-center justify-center rounded-[4px] bg-[#4A96FF] p-3 mb-3'>
            Login
          </div>

          <span
            onClick={() => setShowLogin((prev) => !prev)}
            className='flex text-sm items-baseline text-gray-medium hover:cursor-pointer'
          >
            Not registered yet?
            <span className='text-gray-light flex items-center'>
              &nbsp;Register&nbsp;
              <img src={Arrow} className='rotate-180 w-4' />
            </span>
          </span>
        </div>
      </div> */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label htmlFor='email' className='block text-sm text-gray-light mb-2'>
            Email or Username
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email or username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-[43px] border-[1.5px] border-charcoal-medium rounded p-3 min-w-[415px] w-full text-gray-medium !bg-transparent outline-none placeholder:font-light placeholder:text-gray-medium'
            required
            autoComplete='off'
          />
        </div>

        <div className=''>
          <label
            htmlFor='password'
            className='block text-sm text-gray-light mb-2'
          >
            Password
          </label>
          <div className='relative flex items-center h-[43px]'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              value={password}
              placeholder='Choose a strong password'
              onChange={(e) => setPassword(e.target.value)}
              className='h-[43px] border-[1.5px] border-charcoal-medium rounded p-3 min-w-[415px] w-full text-gray-medium !bg-transparent outline-none placeholder:font-light placeholder:text-gray-medium'
              required
            />

            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-0 px-3 focus:outline-none'
            >
              {showPassword ? (
                <img
                  src={EyeLogo}
                  alt='show'
                  className='hover:cursor-pointer'
                />
              ) : (
                <img
                  src={ClosedEyeLogo}
                  alt='show'
                  className='hover:cursor-pointer'
                />
              )}
            </button>
          </div>
        </div>

        <div className='flex flex-col justify-center mt-1'>
          <button
            type='submit'
            className='flex items-center justify-center rounded-[4px] bg-blue-light text-white p-3 mb-3'
          >
            Login Now
          </button>

          <span
            onClick={() => setShowLogin((prev) => !prev)}
            className='flex text-sm items-baseline text-gray-medium hover:cursor-pointer'
          >
            Not registered yet?
            <span className='text-gray-light flex items-center'>
              &nbsp;Register&nbsp;
              <img src={Arrow} className='rotate-180 w-4' />
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

LoginScreen.propTypes = {
  setShowLogin: PropTypes.func,
};

export default LoginScreen;
