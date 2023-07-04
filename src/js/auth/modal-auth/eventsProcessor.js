import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onAuthStateChanged } from 'firebase/auth';

import { composeSignModal } from './authModal';
import { composeAuthButton } from '../button-auth/authButton';

import { useUserAuth } from '../firebase/authApi';
import { useFireStore } from '../firebase/firestoreApi';
import { useFireUserAuthChanges } from './authChangesSubscriber';

const { fireLoggedIn, fireLoggedOut } = useFireUserAuthChanges();
const { login, logout, register, auth } = useUserAuth();
const { putCartToFirebase } = useFireStore();

const modalAuthRootRef = document.querySelector('.auth-modal-root');
const menuAuthRootListRef = document.querySelectorAll('.auth-menu-root');
// const menuAuthRootListRef = document.querySelector('.auth-menu-root');
const themeSelectorRef = document.querySelector('#toggle-theme');

console.log(menuAuthRootListRef);

let _theme = 'light';
let _mode = 'signin';

onAuthStateChanged(auth, user => {
  if (!user) {
    initAuth();
    localStorage.removeItem('signeduser');
    fireLoggedOut();
    return;
  }
  localStorage.setItem('signeduser', user.uid);
  menuAuthRootListRef.forEach(elem => elem.innerHTML = composeAuthButton(user));
  bindButtonEvents(onLogOut);
  fireLoggedIn()
});

const bindButtonEvents = cb => {
  const modalAuthButtonRef = document.querySelector('.modal-auth-button');
  modalAuthButtonRef.addEventListener('click', cb);
};

export const initAuth = () => {
menuAuthRootListRef.forEach(elem => (elem.innerHTML = composeAuthButton(null)));
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
      putCartToFirebase([]);
      menuAuthRootListRef.forEach(
        elem => (elem.innerHTML = composeAuthButton(user))
      );
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
