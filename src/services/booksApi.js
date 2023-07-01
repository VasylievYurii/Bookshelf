import axios from 'axios';

const API_ENDPOINTS = {
  baseUrl: 'https://books-backend.p.goit.global',
  categoryList: '/books/category-list',
  topBooks: '/books/top-books',
  categoryBooks: '/books/category',
  book: '/books/',
};

axios.defaults.baseURL = API_ENDPOINTS.baseUrl;

const getCategoryList = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.categoryList);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getTopBooks = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.topBooks);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getBooksByCategory = async category => {
  try {
    const result = await axios.get(API_ENDPOINTS.categoryBooks, {
      params: { category },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getBookById = async id => {
  try {
    const result = await axios.get(API_ENDPOINTS.book + id);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const useBooksApi = () => {
  return {
    getCategoryList,
    getTopBooks,
    getBooksByCategory,
    getBookById,
  };
};

// Приклад використання:

// const booksApi = useBooksApi();

// const handleOnPress = (e) => {
//   e.preventDefault();

//   state.isLoading = true;
//   state.isError = false;

//   booksApi
//     .getCategoryList()
//     .then((res) => {
//       state.data = res;
//       parceCategoryList(res);
//     })
//     .catch((err) => {
//       state.error = err;
//         state.isError = true;
//         console.log(err);
//     })
//     .finally(() => {
//       state.isLoading = false;
//     });
// };

// const parceCategoryList = (list) => {
//   const innerList = list
//     .map(({ list_name }) => `<li>${list_name}</li>`)
//     .join("");
//   console.log(innerList);
//   ListRef.innerHTML = innerList;
// };
