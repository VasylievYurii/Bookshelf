import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onAuthStateChanged } from 'firebase/auth';

import { composeSignModal } from './authModal';
import { composeAuthButton } from '../button-auth/authButton';

import { useUserAuth } from '../firebase/authApi';

const { login, logout, register, auth } = useUserAuth();

const modalAuthRootRef = document.querySelector('.auth-modal-root');
const menuAuthRootRef = document.querySelector('.auth-menu-root');
const themeSelectorRef = document.querySelector('#toggle-theme');

let _theme = 'light';
let _mode = 'signin';

onAuthStateChanged(auth, user => {
  if (!user) {
    initAuth();
    localStorage.removeItem('signeduser');
    return;
  }
  localStorage.setItem('signeduser', user.uid);
  menuAuthRootRef.innerHTML = composeAuthButton(user);
  bindButtonEvents(onLogOut);
});

const bindButtonEvents = cb => {
  const modalAuthButtonRef = document.querySelector('.modal-auth-button');
  modalAuthButtonRef.addEventListener('click', cb);
};

export const initAuth = () => {
  menuAuthRootRef.innerHTML = composeAuthButton(null);
  bindButtonEvents(onModalOpen);
};

export const onModalOpen = () => {
  _theme = !themeSelectorRef.checked ? 'light' : 'dark';
  // _mode = mode;
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
  logout().catch(err => {
    Notify.failure(err);
  });
};

const onSignInSubmit = e => {
  e.preventDefault();
  const username = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  login({ username, password })
    .then(() => {
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
      bindButtonEvents(onLogOut);
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
