import axios from 'axios';


export default {

    getNeosByDate (neoDate) {
      return axios.get(`https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=${neoDate}&sort=dist`)
    }
  // getSavedBooks() {
  //   return axios.get('/api/books');
  // },
  // getBookById(bookId) {
  //   return axios.get(`/api/books/${bookId}`);
  // },
  // saveBook(bookData) {
  //   return axios.post('/api/books', bookData);
  // },
  // deleteBook(bookId) {
  //   return axios.delete(`/api/books/${bookId}`);
  // },
  // // https://www.googleapis.com/books/v1/volumes?q=Harry+Potter
  // searchGoogleBooks(bookQuery) {
  //   return axios.get('https://www.googleapis.com/books/v1/volumes', { params: {
  //     q: bookQuery    
  //   }
  // })
  // }
};
