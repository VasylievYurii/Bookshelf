import { useFireStore } from './auth/firebase/firestoreApi';

const { getCartFromFirebase, putCartToFirebase, isLoggedIn } = useFireStore();

const STORAGE_KEY = 'shopping-list';
const STORAGE_FIREBASE_KEY = 'TOAST UI pagination for localhost: Statistics'

const AUTHORIZATION_KEY = JSON.parse(localStorage.getItem(STORAGE_FIREBASE_KEY));

// console.log("AUTHORIZATION_KEY:", AUTHORIZATION_KEY);

if (AUTHORIZATION_KEY) {
  isLoggedIn (true)
}

let shoppingListArray;

async function fetchData() {
  try {
    const res = await getCartFromFirebase();
    shoppingListArray = res;
    
    if (shoppingListArray.length === 0){
        // console.log('empty fireBase');
        shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY));
        putCartToFirebase(shoppingListArray);
    } else {
        // console.log('array from fireBase');
        shoppingListArray = array;
    }

    // console.log("shoppingListArray:", shoppingListArray);
    
  } catch (error) {
    console.log(error);
  }
}

fetchData();

