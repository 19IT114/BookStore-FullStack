package com.example.BookStore.Service;

import com.example.BookStore.Entity.Books;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;


public interface BookService {

    public List<Books> getAllBooks();

    public Books insertbook(Books books);

    public ResponseEntity<Books> getbook(Long id);

    public ResponseEntity<Books> updatebook(Long id, Books books);

    public ResponseEntity<Map<String, Boolean>> deleteBook(Long id);
}
