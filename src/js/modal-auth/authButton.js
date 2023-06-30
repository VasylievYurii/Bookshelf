import './buttonAuth.css';

export const composeAuthButton = (theme, user) => {
  //   let themeClass = 'light-colorset-auth';
  //   if (theme === 'dark') {
  //     themeClass = 'dark-colorset-auth';
  //   }
  if (!user) {
    return '<button class="modal-auth-button light-colorset-auth" type="button">Sign In</button>';
  } else {
    const { displayName } = user;
    return `<button class="modal-auth-button light-colorset-auth" type="button">${displayName} Sign out</button>`;
  }
};
