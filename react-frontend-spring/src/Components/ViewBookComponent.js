import React, { Component } from 'react';
import bookservice from '../Services/BookService';

class ViewBookComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            books: {}
        }
    }
componentDidMount(){
    bookservice.getbookbyid(this.state.id).then((Response)=>{
        this.setState({book: Response.data});
    })
}

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3" style={{marginTop: "30px"}}>
                    <h2 className="text-center">View Book Details</h2>
                    <div className="card-body">
                        <div className="row" style={{margin: "20px"}}>
                            <label> Book Name : </label>
                            <div>{ this.state.books.bookname }</div>
                        </div>
                        <div className="row" style={{margin: "20px"}}>
                            <label> Book Author : </label>
                            <div>{this.state.books.bookname}</div>
                        </div>
                        <div className="row" style={{margin: "20px"}}>
                            <label> Publisher : </label>
                            <div>{this.state.books.bookname}</div>
                        </div>
                        <div className="row" style={{margin: "20px"}}>
                            <label> Published Year : </label>
                            <div>{this.state.books.bookname}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBookComponent;
