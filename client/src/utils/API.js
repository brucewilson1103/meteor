import axios from 'axios';


export default {

    getNeosByDate (neoDate) {
      return axios.get(`https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=${neoDate}&date-max=2050-01-01&sort=date`)
    },
    getNeosByName (neoByName) {
      return axios.get(`https://ssd-api.jpl.nasa.gov/cad.api?des=${neoByName}&date-min=1900-01-01&date-max=2100-01-01&dist-max=0.9`)
    },
    saveObject(neoName, object) {
      return axios.put(`/api/neo/${neoName}`, {saved:true});
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
