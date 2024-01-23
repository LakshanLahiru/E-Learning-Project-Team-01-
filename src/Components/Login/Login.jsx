import React, { useState } from 'react';
import { FaUserAlt, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import './Login.css'
import LogIcon from '../logIcon/logIcon';

function Login() {
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
    
  };

  const handleLoginClick = () => {
    // Pass the userName to the LogIcon component
    LogIcon.updateName(userName);
  };

  return (
    <div className='wap'>
      <div className="boxl">
        <form action=''>
          <h1>LOGIN</h1>
          <div className='inputBox'>
            <input
              type='text'
              placeholder='User Name'
              required
              value={userName}
              onChange={handleInputChange}
            />
            <FaUserAlt className='is' />
          </div>
          <div className='inputBox'>
            <input
              type='password'
              placeholder='Password'
              required
            />
            <FaUnlockAlt className='is' />
          </div>
          <div className='remember'>
            <label>
              <input type='checkbox' />
              Remember Me
            </label>
            <a href='#'>Forget Password? </a>
          </div>
          <div className='bu'>
          <Link to='/'>
            <button type='button' onClick={handleLoginClick}>Login</button>
            </Link> 
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;