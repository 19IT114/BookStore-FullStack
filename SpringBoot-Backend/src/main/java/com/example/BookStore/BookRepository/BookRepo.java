package com.example.BookStore.BookRepository;

import com.example.BookStore.Entity.Books;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo extends JpaRepository<Books, Long> {
}
