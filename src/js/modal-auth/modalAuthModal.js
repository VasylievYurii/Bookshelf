import "./modalAuth.css";
import sprite from "./sprite-auth.svg";

export const drawSignupModal = (theme = "light") => {
  let themeClass = "light-colorset-auth";
  if (theme === "dark") {
    themeClass = "dark-colorset-auth";
  }
  const signUpMarkup = `<div class="backdrop-auth ${themeClass}">
      <div class="modal-auth">
        <button class="close-auth" type="button">
          <svg class="icon">
            <use href="${sprite}#x"></use>
          </svg>
        </button>
        <form class="form-auth">
          <input class="input-auth" type="text" placeholder="Name" />
          <label class="label-auth">
            <input class="input-auth" type="email" placeholder="Email" />
            <svg class="icon">
              <use href="${sprite}#mail"></use>
            </svg>
          </label>
          <label class="label-auth">
            <input class="input-auth" type="password" placeholder="Password" />
            <svg class="icon">
              <use href="${sprite}#lock"></use>
            </svg>
          </label>

          <button class="submit-auth" type="submit">SIGN UP</button>
        </form>
        <div class="selector-auth">
          <button class="sign-auth" type="button" disabled>SIGN IN</button>
          <button class="sign-auth" type="button">SIGN UP</button>
        </div>
      </div>
    </div>`;
  return signUpMarkup;
};

// An example of use:
// ---------------------

// const handleOpenSingUpModal = (e) => {
//   e.preventDefault();

//   const modalRootRef = document.querySelector(".auth-modal-root");
//   modalRootRef.innerHTML = drawSignupModal("light");

//   const closeModalRef = document.querySelector(".close-auth");
//   closeModalRef.addEventListener('click', handleCloseAuthModal)
// }

// const handleCloseAuthModal = () => {
//   const modalRootRef = document.querySelector(".auth-modal-root");
//   modalRootRef.innerHTML = '';
// }

// const modalAuthButtonRef = document.querySelector(".modal-auth-button");
// modalAuthButtonRef.addEventListener("click", handleOpenSingUpModal);
