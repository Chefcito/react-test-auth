import React from 'react';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("history ", history);
  }

  const handlePush = () => {
    history.push('/');
    console.log("history ", history);
  }

  return (
    <div className='Home'>
      <h1>Home</h1>
      <button onClick={handleClick}>Historial</button>
      <button onClick={handlePush}>Push</button>
    </div>
  );
}