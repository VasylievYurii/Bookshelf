
//Для роботи потрібно вставити в розмітку, наприклад index.html,
// порожній div з класом modal - root
// Потім імпортувати методи з цього файлу та викликати, де треба,
// наприклад на івент, або на просто на старт завантаження

// import { openLoader, closeLoader } from "./loader/loader";

// const openModalButtonRef = document.querySelector(".open-modal");
// openModalButtonRef.addEventListener("click", openLoader);

import './progress-waves.css';

const spinnerMarkup = '<div class="loader-modal in-progress"></div > ';

export const openLoader = () => {
  const modalPortal = document.querySelector(".loader-root");
  modalPortal.innerHTML = spinnerMarkup;
};

export const closeLoader = () => {
  const modalPortal = document.querySelector('.loader-root');
  modalPortal.innerHTML = '';
};
