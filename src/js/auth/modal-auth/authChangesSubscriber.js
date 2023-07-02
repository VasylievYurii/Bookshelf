const callbacksLoggedIn = [];
const callbacksLoggedOut = [];

const subscribeUserLoggedIn = callback => {
  if (typeof callback !== 'function') {
    console.error(callback, ' not a function');
    return;
  }
  callbacksLoggedIn.push(callback);
};

const subscribeUserLoggedOut = callback => {
  if (typeof callback !== 'function') {
    return;
  }
  callbacksLoggedOut.push(callback);
};

const fireLoggedIn = () => {
  callbacksLoggedIn.forEach(callback => callback());
};

const fireLoggedOut = () => {
  callbacksLoggedIn.forEach(callback => callback());
};

export const useSubscribeUserAuthChanges = () => {
  return { subscribeUserLoggedIn, subscribeUserLoggedOut };
};

export const useFireUserAuthChanges = () => {
  return { fireLoggedIn, fireLoggedOut };
};

// 1) Імпортуємо
// import { useSubscribeUserAuthChanges } from 'шлях до цього файла';

// 2) Забираємо функції
// const { subscribeUserLoggedIn, subscribeUserLoggedOut } = useSubscribeUserAuthChanges();

// 3)Підписуємось на події
// subscribeUserLoggedIn(колбек-функція-X)
//   - колбек - функція1 виконається, коли юзер залогінився, або зареєструвався,
//     або був залогінений, і оновив сторінку

// subscribeUserLoggedOut(колбек - функція-Y)
//   - колбек - функція2 виконається, коли юзер відлогінився
  
//   Підписувати можна будь - яку кількість функцій, типу:
  
// subscribeUserLoggedIn(колбек - функція-1)
// subscribeUserLoggedIn(колбек - функція-2)
// subscribeUserLoggedIn(колбек - функція-3)
//   ...
// subscribeUserLoggedIn(колбек - функція - n)

// 4) Коли відбудеться подія логіна(реєстрації, оновлення), або логаута,
//   то виконаются функції, які ви додали через сабскрайбери.Вони після додавання лежать 
//   в відповідних масивах і "чекають на свій час"
