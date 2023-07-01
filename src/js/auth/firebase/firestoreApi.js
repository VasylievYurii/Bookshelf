import { getDoc, setDoc, doc } from 'firebase/firestore';

import { db } from './firebaseCredentials';
import { openLoader, closeLoader } from '../../loader/loader';
import { useUserAuth } from './authApi';

const { auth } = useUserAuth();


const putCartToFirebase = async (books = []) => {
  openLoader();
  const user = auth.currentUser;
  try {
    return setDoc(doc(db, 'carts', user.uid), { books });
  } catch (error) {
    throw new Error('DB Error');
  } finally {
    closeLoader();
  }
};

const getCartFromFirebase = async () => {
  openLoader();
   const user = auth.currentUser;
  try {
    const { books } = (await getDoc(doc(db, 'carts', user.uid))).data();
    return books;
  } catch (error) {
    throw new Error('DB Error');
  } finally {
    closeLoader();
  }
};

export const useFireStore = () => {
  return {
    getCartFromFirebase,
    putCartToFirebase,
  };
};


// Для запису / читання Firestore:

// 1. Імпортуйте useFireStore до свого скрипта
// 2. Викличте та деструризуйти те, що вона поверне в залежності, яка функція треба
// 3. Функція запису отримує масив об'єктів, функція читання повертає масив обїєктів
// 4. Обидві функції асинхронні, тож обробляйте проміс, який вони повертають.
// 5. Є нюанси з користувачем, який залогінився коли сторінка рефрешиться...