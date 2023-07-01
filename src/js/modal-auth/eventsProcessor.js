import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { composeSignModal } from './authModal';
import { composeAuthButton } from './authButton';

import { useUserAuth } from '../firebase/authApi';

const { login, logout, register, isLoggedIn } = useUserAuth();

const modalAuthRootRef = document.querySelector('.auth-modal-root');
const menuAuthRootRef = document.querySelector('.auth-menu-root');

let _theme = 'light';
let _mode = 'signin';

export const initAuth = () => {
  console.log(modalAuthRootRef);
  console.log(menuAuthRootRef);
  menuAuthRootRef.innerHTML = composeAuthButton(null);
  const modalAuthButtonRef = document.querySelector('.modal-auth-button');
  modalAuthButtonRef.addEventListener('click', onModalOpen);
};

export const onModalOpen = (theme = _theme, mode = _mode) => {
  _theme = theme;
  _mode = mode;
  drawModal();
  mountEvents();
};

const drawModal = () => {
  modalAuthRootRef.innerHTML = composeSignModal(_theme, _mode);
};

const reverseMode = () => {
  return _mode === 'signin' ? 'signup' : 'signin';
};

const mountEvents = () => {
  const closeModalRef = document.querySelector(`.close-auth`);
  closeModalRef.addEventListener('click', onModalClose);
  const switchAuthRef = document.querySelector(`.sign-auth.${reverseMode()}`);
  switchAuthRef.addEventListener('click', onModeSwitch);
  const submitFormRef = document.querySelector('.form-auth');

  if (_mode === 'signin') {
    submitFormRef.addEventListener('submit', onSignInSubmit);
  } else {
    submitFormRef.addEventListener('submit', onSignUpSubmit);
  }
};

const onLogOut = () => {
  logout()
    .then(() => {
      menuAuthRootRef.innerHTML = composeAuthButton(null);
      const modalAuthButtonRef = document.querySelector('.modal-auth-button');
      modalAuthButtonRef.addEventListener('click', onModalOpen);
    })
    .catch(err => {
      Notify.failure(err);
    }); 
};

const onSignInSubmit = e => {
  e.preventDefault();
  const username = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  login({ username, password })
    .then(user => {
      menuAuthRootRef.innerHTML = composeAuthButton(user);
      const modalAuthButtonRef = document.querySelector('.modal-auth-button');
      modalAuthButtonRef.addEventListener('click', onLogOut);
      onModalClose();
    })
    .catch(err => {
      Notify.failure(err);
    });
};

const onSignUpSubmit = e => {
  e.preventDefault();
  const username = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  const displayName = e.target.elements.name.value;
  register({ username, password, displayName })
    .then(user => {
      menuAuthRootRef.innerHTML = composeAuthButton(user);
      const modalAuthButtonRef = document.querySelector('.modal-auth-button');
      modalAuthButtonRef.addEventListener('click', onLogOut);
      onModalClose();
    })
    .catch(err => {
      Notify.failure(err);
    });
};

const onModalClose = () => {
  modalAuthRootRef.innerHTML = '';
};

const onModeSwitch = e => {
  e.preventDefault();
  _mode = e.target.value;
  drawModal();
  mountEvents();
};

initAuth();
