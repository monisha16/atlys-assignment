import PropTypes from 'prop-types';
import { useState } from 'react';

import Arrow from 'src/assets/arrow_back.svg';
import ClosedEyeLogo from 'src/assets/closed_eye.svg';
import EyeLogo from 'src/assets/eye.svg';

const RegisterScreen = (props) => {
  const { setShowLogin, handleRegisterSubmit = () => {} } = props;

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div>
      <div className='flex flex-col justify-center items-center mb-[45px]'>
        <span className='text-[#6B6C70] mb-2 text-sm'>SIGN UP</span>
        <span className='text-lg text-white font-bold'>
          Create an account to continue
        </span>
      </div>

      <form
        onSubmit={(e) =>
          handleRegisterSubmit({ e, user: { username, email, password } })
        }
        className='flex flex-col gap-4'
      >
        <div>
          <label htmlFor='email' className='block text-sm text-gray-light mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-[43px] border-[1.5px] border-charcoal-medium rounded p-3 min-w-[415px] w-full text-gray-medium !bg-transparent outline-none placeholder:font-light placeholder:text-gray-medium'
            required
            autoComplete='off'
          />
        </div>

        <div>
          <label
            htmlFor='username'
            className='block text-sm text-gray-light mb-2'
          >
            UserName
          </label>
          <input
            type='username'
            id='username'
            placeholder='Choose a preferred username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            Continue
          </button>

          <span
            onClick={() => setShowLogin((prev) => !prev)}
            className='flex text-sm items-baseline text-gray-medium hover:cursor-pointer'
          >
            Already have an account?
            <span className='text-gray-light flex items-center'>
              &nbsp;Login&nbsp;
              <img src={Arrow} className='rotate-180 w-4' />
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

RegisterScreen.propTypes = {
  setShowLogin: PropTypes.func,
  handleRegisterSubmit: PropTypes.func,
};

export default RegisterScreen;
