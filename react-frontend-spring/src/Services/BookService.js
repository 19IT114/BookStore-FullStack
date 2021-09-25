import axios from 'axios'

const BOOK_REST_API_URL = 'http://localhost:8080/books'
class BookService{

    getBooks(){
        return axios.get(BOOK_REST_API_URL);
    }

    insertBook(book){
        return axios.post(BOOK_REST_API_URL, book);
    }

    getbookbyid(bookid){
        return axios.get(BOOK_REST_API_URL + '/' + bookid);
    }
    
    updateBook(book, bookId){
        return axios.put(BOOK_REST_API_URL + '/' + bookId, book);
    }

    DeleteBook (bookId){
        return axios.delete(BOOK_REST_API_URL + '/' + bookId);
    }
}

export default new BookService();