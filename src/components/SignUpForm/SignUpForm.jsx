import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from '../../utils/firebase';

export const SignUpForm = () => {
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
    fb.signUp(email, password);
    history.push('/profile');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' onChange={handleEmailInputChange} placeholder='Email' />
      <input type='password' name='password' onChange={handlePasswordInputChange} placeholder='Contraseña' />
      <button type='submit'>Registrarse</button>
    </form>
  );
}