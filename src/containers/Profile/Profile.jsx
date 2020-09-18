import React from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from '../../utils/firebase';

export const Profile = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("Current User: ", fb.auth.currentUser);
  }

  const goToLoginPage = () => {
    history.push('/signup');
  }

  const currentUserId = fb.auth.currentUser ? fb.auth.currentUser.uid : goToLoginPage();

  return (
    <div>
      <h1>Perfil de {currentUserId}</h1>
      <button onClick={handleClick}>Usuario</button>
    </div>
  );
}