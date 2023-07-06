import { makeRemoveBtnVisible } from './pop-up-book';
import Notiflix from 'notiflix';

export function isBookAdded(id) {
  const arrayBooks = localStorage.getItem('shopping-list');
  const parsedArray = JSON.parse(arrayBooks);
  const bookObject = parsedArray.find(book => book._id === id);

  if (!bookObject) {
    return;
  }
  makeRemoveBtnVisible();
  Notiflix.Notify.info(
    'This book has already been added to your shopping list.',
    {
      timeout: 3000,
      width:'400px',
      position: 'center-center',
      borderRadius: '20px',
      opacity: 0.9,
      fontSize: '22px',
      cssAnimation: true,
      cssAnimationDuration: 300,
      cssAnimationStyle: 'zoom',
      clickToClose: true,
    }
  );
}
