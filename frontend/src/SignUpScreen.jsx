import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from './HomeScreen';
import { Link } from 'react-router-dom';
import GrassHopper from './assets/grasshopper.png';
import './SignUpScreen.css';

function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [hiddenPassword, onChangeHiddenPassword] = useState('');
  const [bool, setBool] = useState(false);

  const handleChangePassword = (newText) => {
    const lastLetter = newText.slice(-1);
    if (newText.length > password.length) {
      onChangePassword(password + lastLetter);
    } else if (newText.length < password.length) {
      onChangePassword(password.slice(0, newText.length));
    } else if (newText === '') {
      onChangePassword('');
      setBool(false);
    }
    let newTextWithDots = '';
    newText.split('').forEach((char, index, array) => {
      if (index === array.length - 1) {
        newTextWithDots += char;
      } else {
        newTextWithDots += '•';
      }
    });
    onChangeHiddenPassword(newTextWithDots);
  };

  const handleSignUp = async () => {
    setFirstName('');
    setEmail('');
    onChangePassword('');
  };


  return (
    <div className="signUp">
      <div className = 'wholePage'>
        <img src={GrassHopper} className='GrassHopper' />
        <div className="inputContainer">
          <input
            type="text"
            className="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="first name"
          />
        </div>
        <div className="inputContainer">
          <input
            type="email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            />
        </div>
        <div className="inputContainer">
            <input
              type={bool ? 'text' : 'password'}
              className="password"
              onChange={(e) => handleChangePassword(e.target.value)}
              value={hiddenPassword}
              placeholder="password"
            />
        </div>
        <div className="alignSignUp">
          <Link to="/home">
            <button className="SignUp" onClick={handleSignUp}>sign up</button>
          </Link>
        </div>
      </div>
    </div>
    );
  }
  
  export default SignUpScreen;
