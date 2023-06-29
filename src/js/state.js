class BooksState {
  constructor() {}

  data = [];
  error = null;
  totalPages = null;
  currentPage = 1;
  isThemeDark = false;

  isLoading = false;
  isError = false;

  user = {
    username: "",
    isLoggedIn: false,
  };

  switchTheme = () => {
    this.isThemeDark = !this.isThemeDark;
  };

  logIn = (username) => {
    this.user = { username, isLoggedIn: true };
  };
  logOut = () => {
    this.user = { username: "", isLoggedIn: false };
  };
}

export const state = new BooksState();
