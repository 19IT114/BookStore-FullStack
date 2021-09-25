package com.example.BookStore.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "Store")
@Entity
public class Books implements Serializable {

    @Id
    public Long id;

    public String bookname;
    public String bookauthor;
    public String publisher;
    public String publishedyear;

    public Books(Long id, String bookname, String bookauthor, String publisher, String publishedyear) {
        this.id = id;
        this.bookname = bookname;
        this.bookauthor = bookauthor;
        this.publisher = publisher;
        this.publishedyear = publishedyear;
    }


    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", bookname='" + bookname + '\'' +
                ", bookauthor='" + bookauthor + '\'' +
                ", publisher='" + publisher + '\'' +
                ", publishedyear='" + publishedyear + '\'' +
                '}';
    }
}
