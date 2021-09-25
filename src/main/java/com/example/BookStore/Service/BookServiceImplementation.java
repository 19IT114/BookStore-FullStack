package com.example.BookStore.Service;

import com.example.BookStore.BookRepository.BookRepo;
import com.example.BookStore.Entity.Books;
import com.example.BookStore.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookServiceImplementation implements BookService {

    @Autowired
    public BookRepo bookRepo;

    @Override
    public List<Books> getAllBooks() {
        return bookRepo.findAll();
    }

    @Override
    public Books insertbook(Books books) {
        return bookRepo.save(books);
    }

    @Override
    public ResponseEntity<Books> getbook(Long id) {
        Books b = bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exits with ID : " + id));
        return ResponseEntity.ok(b);
    }

    @Override
    public ResponseEntity<Books> updatebook(Long id, Books books) {
        Books b = bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exits with ID : " + id));
        b.setBookname(books.getBookname());
        b.setBookauthor(books.getBookauthor());
        b.setPublisher(books.getPublisher());
        b.setPublishedyear(books.getPublishedyear());

        Books b1 = bookRepo.save(b);
        return ResponseEntity.ok(b1);

    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteBook(Long id) {
        Books b = bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book does not exits with ID : " + id));
        bookRepo.delete(b);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Successfully", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
