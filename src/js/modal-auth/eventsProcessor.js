import { composeSignModal } from "./authModal";

// const modalAuthButtonRef = document.querySelector(".modal-auth-button");
const modalAuthRootRef = document.querySelector(".auth-modal-root");
const menuAuthRootRef = document.querySelector(".auth-menu-root");

const modalAuthButtonRef = document.querySelector(".modal-auth-button");

// modalAuthButtonRef.addEventListener("click", onModalOpen);
let _theme = "light";
let _mode = "signin";

export const initAuth = () => {
  modalAuthButtonRef.addEventListener("click", onModalOpen);
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
