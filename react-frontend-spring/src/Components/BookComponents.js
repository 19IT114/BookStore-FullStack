
import React from "react";
import bookservice from "../Services/BookService";
import {Button} from 'react-bootstrap'
class BookComponents extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            books:[]
        }
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.viewbook = this.viewbook.bind(this);
    }

    viewbook(id){
       
        this.props.history.push(`/view-book/${id}`)

    }

    deleteBook(id){
        bookservice.DeleteBook(id).then((Reponse)=>{
            this.setState({books: this.state.books.filter(book => book.id !== id)});
        })
        
    }

    editBook(id){
        this.props.history.push(`/update-book/${id}`);
    }

    componentDidMount(){
        bookservice.getBooks().then((Response)=> {
            this.setState({books:Response.data})
        });
    }

    addBook(){
        this.props.history.push('/add-book')
    }

    render(){
        return(
            <div>
                
                <h1 className = "text-center">Books List</h1>
                <div className = "btn text-center">
                    <button className = "text-center btn btn-primary" onClick= {this.addBook}> Add a Book </button>
                </div>              
                <table className = "table table-hover">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Publisher</th>
                            <th>Published Year</th>
                            <th colSpan="2">Actions</th>
                           
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                <tr key = {book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.bookname}</td>
                                    <td>{book.bookauthor}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.publishedyear}</td>
                                    <td><Button variant="outline-warning" onClick = { () => this.editBook(book.id)}>UPDATE</Button>
                                    <Button variant="outline-danger" onClick = { () => this.deleteBook(book.id) }   style={{marginLeft: "10px"}}>DELETE</Button>
                                    <Button variant="outline-primary" style={{marginLeft: "10px"}} onClick={() => this.viewbook(book.id)}>VIEW</Button></td>
                                    
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookComponents