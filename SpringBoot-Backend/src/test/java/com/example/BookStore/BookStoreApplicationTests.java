package com.example.BookStore;


import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class BookStoreApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	void contextLoads() {
	}

	@Test
	@Order(2)
	public void getallbooks() throws Exception{
		mockMvc.perform(MockMvcRequestBuilders.get("/books")
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andReturn();
	}

	@Test
	@Order(3)
	public void getsSingleBook() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/books/1")
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andReturn();
	}

	@Test
	public void InvalidId() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/books/40000000")
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound())
				.andReturn();
	}

	@Test
	@Order(1)
	public void InsertBook() throws Exception {
		String newBook =
				"{\"id\":9,\"bookname\":\"Dummy\",\"bookauthor\":\"Dummy\",\"publisher\":\"Dummy\",\"publishedyear\":\"Dummy\"}";

		mockMvc.perform(MockMvcRequestBuilders.post("/books")
				.contentType(MediaType.APPLICATION_JSON)
				.content(newBook)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andReturn();
	}

}
