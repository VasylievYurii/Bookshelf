import { getDoc, setDoc, doc } from 'firebase/firestore';

import { db } from './firebaseCredentials';
import { openLoader, closeLoader } from '../../loader/loader';

const getUid = () => localStorage.getItem('signeduser');
const isLoggedIn = () => (getUid() ? true : false);

const putCartToFirebase = async (books = []) => {
  // console.log('put Cart to DB');
  if (!isLoggedIn()) {
    // console.log('not logged in');
    return []
  };
  openLoader();
  try {
    console.log('creating cart for user', getUid());
    return setDoc(doc(db, 'carts', getUid()), { books });
  } catch (error) {
    throw new Error('DB Error');
  } finally {
    closeLoader();
  }
};

const getCartFromFirebase = async () => {
  if (!isLoggedIn()) return [];
  openLoader();
  try {
    const { books } = (await getDoc(doc(db, 'carts', getUid()))).data();
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
    isLoggedIn,
  };
};

// Для запису / читання Firestore:

// 1. Імпортуйте useFireStore до свого скрипта
// import { useFireStore } from 'шлях';

// 2. Викличте та деструризуйти те, що вона поверне в залежності, яка функція треба (або чи залогінений користувач)
// const { getCartFromFirebase, putCartToFirebase, isLoggedIn } = useFireStore();

// 3. Функція запису отримує масив об'єктів, функція читання повертає масив обїєктів. Функція запису повністтю перезаписує те, що в базі тим, що їй передали.

// 4. Обидві функції читання-запису асинхронні, тож обробляйте проміс, який вони повертають.
// getCartFromFirebase().then(res => {
//   console.log(res);
// });

// 5. Якщо юзер не залогінений, а функії читання або запису в до бази все ж таки викликали, то вони повернуть порожній масив.

// 6. Логіку в якому порядку використовувати локалстор, та базу (коли затерти карт з локастора в базу, або навпаки - з бази в локастор) - то вже треба придумати
