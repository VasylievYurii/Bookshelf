import "./modalAuth.css";
import sprite from "./sprite-auth.svg";

export const composeSignModal = (theme, mode) => {
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
          <input 
          class="input-auth" 
          type="text" 
          name="name" 
          placeholder="Name" 
          pattern="^[a-zA-Zа-яА-Я ]{3,16}$"
          title="Name may contain only letters and spaces, 3-16 symbols"
          required />
          <label class="label-auth">
            <input 
            class="input-auth" 
            type="email" 
            name="email" 
            placeholder="Email" 
            required/>
            <svg class="icon">
              <use href="${sprite}#mail"></use>
            </svg>
          </label>
          <label class="label-auth">
            <input class="input-auth" type="password" name="password" placeholder="Password" minlength="6" required/>
            <svg class="icon">
              <use href="${sprite}#lock"></use>
            </svg>
          </label>

          <button class="submit-auth" type="submit">SIGN UP</button>
        </form>
        <div class="selector-auth">
          <button class="sign-auth signin" type="button" value="signin">SIGN IN</button>
          <button class="sign-auth signup" type="button" value="signup" disabled>SIGN UP</button>
        </div>
      </div>
    </div>`;

  const signInMarkup = `<div class="backdrop-auth ${themeClass}">
      <div class="modal-auth">
        <button class="close-auth" type="button">
          <svg class="icon">
            <use href="${sprite}#x"></use>
          </svg>
        </button>
        <form class="form-auth">
          <label class="label-auth">
            <input 
            class="input-auth" 
            type="email" 
            name="email" 
            placeholder="Email" 
            required/>
            <svg class="icon">
              <use href="${sprite}#mail"></use>
            </svg>
          </label>
          <label class="label-auth">
            <input 
            class="input-auth" 
            type="password" 
            name="password" 
            placeholder="Password" 
            minlength="6" 
            required/>
            <svg class="icon">
              <use href="${sprite}#lock"></use>
            </svg>
          </label>

          <button class="submit-auth" type="submit">SIGN IN</button>
        </form>
        <div class="selector-auth">
          <button class="sign-auth signin" type="button" value="signin" disabled>SIGN IN</button>
          <button class="sign-auth signup" type="button" value="signup">SIGN UP</button>
        </div>
      </div>
    </div>`;
  if (mode === "signin") return signInMarkup;
  return signUpMarkup;
};

