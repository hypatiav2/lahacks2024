import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from './HomeScreen';
import { auth } from './firebase'; // Import Firebase Authentication module
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext } from 'react'
import { Namecontext } from './App'
import { Link, useNavigate } from 'react-router-dom';
import GrassHopper from './assets/Group1.png';

import './SignUpScreen.css';

function SignUpScreen() {
  const navigate = useNavigate();
  const { firstName , setFirstName} = useContext(Namecontext);
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

  // const checkInputs = () => {
  //   if (email === '') {
  //     alert('Please enter an email to proceed');
  //   } else if (!validateEmail(email)) {
  //     alert('Please enter a valid email to proceed');
  //   } else if (password === '') {
  //     alert('Please enter a password to proceed');
  //   } else if (password.length < 6) {
  //     alert('Password must be longer than five characters');
  //   } else {
  //     return true;
  //   }
  //   return false;
  // };



  const handleSignUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Signed up 
        console.log("Success signing up ", firstName);
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Error, please try again");
      });
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
              placeholder="password (7+ chars)"
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
