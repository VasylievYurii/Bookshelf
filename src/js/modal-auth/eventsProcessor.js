import { composeSignModal } from "./authModal";

// const modalAuthButtonRef = document.querySelector(".modal-auth-button");
const modalAuthRootRef = document.querySelector(".auth-modal-root");
const menuAuthRootRef = document.querySelector(".auth-menu-root");



// modalAuthButtonRef.addEventListener("click", onModalOpen);
let _theme = "light";
let _mode = "signin";

export const initAuth = () => {
  console.log(modalAuthRootRef);
  console.log(menuAuthRootRef);
  // modalAuthButtonRef.addEventListener("click", onModalOpen);
  menuAuthRootRef.innerHTML =
    '<button class="modal-auth-button light-colorset-auth" type="button">Sign In</button>';
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
  return _mode === "signin" ? "signup" : "signin";
};

const mountEvents = () => {
  const closeModalRef = document.querySelector(`.close-auth`);
  closeModalRef.addEventListener("click", onModalClose);
  const switchAuthRef = document.querySelector(`.sign-auth.${reverseMode()}`);
  switchAuthRef.addEventListener("click", onModeSwitch);
};

const onModalClose = () => {
  modalAuthRootRef.innerHTML = "";
};

const onModeSwitch = (e) => {
  e.preventDefault();
  _mode = e.target.value;
  drawModal();
  mountEvents();
};

initAuth();