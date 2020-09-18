import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from '../../utils/firebase';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleEmailInputChange = (event) => {
    let newValue = event.target.value;
    setEmail(newValue);
  }

  const handlePasswordInputChange = (event) => {
    let newValue = event.target.value;
    setPassword(newValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn();
  }

  const signIn = () => {
    fb.signUp(email, password)
      .then((userCredential) => {
        console.log('Credentials: ', userCredential);
        addNewUser();
      }, (reason) => {
        console.log(reason);
      });
  }

  const logIn = () => {
    fb.logIn(email, password).then((userCredential) => {
      console.log("Credentials: ", userCredential);
      history.push('/profile');
    }, (error) => {
      console.log(error);
    });
  }

  const addNewUser = () => {
    let user = {
      email,
    }

    fb.addUser({ user }).then((userDoc) => {
      console.log(userDoc.id);
      history.push('/profile');
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='email' onChange={handleEmailInputChange} placeholder='Email' />
        <input type='password' name='password' onChange={handlePasswordInputChange} placeholder='Contraseña' />
        <button type='submit'>Registrarse</button>
      </form>
      <button onClick={logIn}>Ingresar</button>
    </div>
  );
}