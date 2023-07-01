import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { app } from './firebaseCredentials';
import { openLoader, closeLoader } from '../../loader/loader';

const auth = getAuth(app);

const login = async ({ username, password }) => {
  openLoader();

  try {
    await signInWithEmailAndPassword(auth, username, password);
    localStorage.setItem('singedin', 'true');
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    closeLoader();
  }
};

const logout = async () => {
  openLoader();
  try {
    await signOut(auth);
    localStorage.removeItem('singedin');
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    closeLoader();
  }
};

const register = async ({ username, password, displayName }) => {
  openLoader();
  try {
    const res = await createUserWithEmailAndPassword(auth, username, password);
    localStorage.setItem('singedin', 'true');
    await updateProfile(res.user, {
      displayName,
    });
    return auth.currentUser;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    closeLoader();
  }
};

export const useUserAuth = () => {
  return {
    login,
    logout,
    register,
    auth,
  };
};
