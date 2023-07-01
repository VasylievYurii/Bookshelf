import './buttonAuth.css';
import profilePic from './user.jpg';

export const composeAuthButton = (user) => {

  console.log(profilePic);
  if (!user) {
    return '<button class="modal-auth-button light-colorset-auth" type="button">Sign In</button>';
  } else {
    const { displayName } = user;
    return `<button class="modal-auth-button light-colorset-auth" type="button"><img class="auth-button-userpic" src=${profilePic} />${displayName}</button>`;
  }
};

