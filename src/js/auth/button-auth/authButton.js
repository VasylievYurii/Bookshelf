import './buttonAuth.css';
import profilePic from './user.jpg';

export const composeAuthButton = user => {
  if (!user) {
    return '<button class="modal-auth-button light-colorset-auth" type="button">Sign In</button>';
  } else {
    const { displayName } = user;
    const name = displayName ? displayName : '';
    return `<button class="modal-auth-button light-colorset-auth auth-button-loggedin" type="button"><img class="auth-button-userpic" src=${profilePic} />${name}</button>`;
  }
};
