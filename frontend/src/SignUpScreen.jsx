import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from './HomeScreen';
import { Link } from "react-router-dom";
//import './SignUpScreen.css'; // Import your CSS file for styling

function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [hiddenPassword, onChangeHiddenPassword] = useState('');
  const [bool, setBool] = useState(false);

//   const validateEmail = (text) => {
//     const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
//     return reg.test(text);
//   };

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

  const handleSignUp = async () => {
    // if (!checkInputs()) {
    //   return;
    // }
    setFirstName('');
    setEmail('');
    onChangePassword('');
    //window.navigate('/home');
    // try {
    //   const userData = {
    //     email,
    //     password,
    //   };
    //   const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post`, userData); // Adjust server URL
    //   if (res.data.error) {
    //     console.error(res.data.error);
    //   } else {
    //     const userId = res.data._id;
    //     // Adjust storage mechanism as needed for web
    //     localStorage.setItem('userId', userId);
    //     navigation.navigate('Home');
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
    //navigation.navigate('Home');
  };


  return (
    <div>
      <h1>welcome</h1>
      <div className="inputContainer">
        <input
          type="text"
          className="textfields"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          placeholder="first name"
        />
      </div>
      <div className="inputContainer">
        <input
          type="email"
          className="textfields"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          />
        </div>
        <div className="inputContainer">
          <input
            type={bool ? 'text' : 'password'}
            className="textfields"
            onChange={(e) => handleChangePassword(e.target.value)}
            value={hiddenPassword}
            placeholder="password"
          />
        </div>
        <Link to="/home">
          <button onClick={handleSignUp}>sign up</button>
        </Link>
      </div>
    );
  }
  
  export default SignUpScreen;
