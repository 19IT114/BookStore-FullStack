package com.example.BookStore.Controller;

import com.example.BookStore.Entity.Books;
import com.example.BookStore.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {

    @Autowired
    public BookService bookService;

    @GetMapping("/")
    public String welcome()
    {
        return "Welcome to the Book Store";
    }

    @GetMapping("/books")
    public List<Books> getallbooks()
    {
        return this.bookService.getAllBooks();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Books> getbook(@PathVariable Long id)
    {
        return this.bookService.getbook(id);
    }

    @PostMapping("/books")
    public Books insertBook(@RequestBody Books books)
    {
        return this.bookService.insertbook(books);
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Books> updatebook(@PathVariable Long id, @RequestBody Books books)
    {
        return this.bookService.updatebook(id, books);
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deletebook(@PathVariable Long id)
    {
          return this.bookService.deleteBook(id);
    }

}
