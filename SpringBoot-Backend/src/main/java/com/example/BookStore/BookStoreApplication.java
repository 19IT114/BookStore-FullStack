package com.example.BookStore;

import com.example.BookStore.BookRepository.BookRepo;
import com.example.BookStore.Entity.Books;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookStoreApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BookStoreApplication.class, args);
	}

	@Autowired
	BookRepo bookRepo;

	@Override
	public void run(String... args) throws Exception {
		bookRepo.save(new Books(1L,"Think Like A Monk","Jay Shetty","Simon","2021"));
		bookRepo.save(new Books(2L,"Three Men in a Boat","William Bro","G&D Publications","2017"));
	}
}
