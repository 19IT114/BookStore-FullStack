import React, { Component } from "react";
import Bookservice from "../Services/BookService";

class ViewBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      bookname: "",
      bookauthor: "",
      publisher: "",
      publishedyear: "",
    };
    this.cancel = this.cancel.bind(this);
  }
  componentDidMount() {
    Bookservice.getbookbyid(this.state.id).then((Response) => {
      let book = Response.data;
      this.setState({
        bookname: book.bookname,
        bookauthor: book.bookauthor,
        publisher: book.publisher,
        publishedyear: book.publishedyear,
      });
    });
  }

  cancel()
  {
      this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div
          className="card col-md-5 offset-md-3"
          style={{ marginTop: "30px" }}
        >
          <h2 className="text-center">View Book Details</h2>
          <div className="card-body">
            <div className="row" style={{ margin: "20px", textAlign: "center"}}>
              <label><b> Book Name :</b> {this.state.bookname}</label>
              
            </div>
            <div className="row" style={{ margin: "20px" , textAlign: "center"}}>
              <label><b> Book Author :</b> {this.state.bookauthor}</label>
             
            </div>
            <div className="row" style={{ margin: "20px" , textAlign: "center"}}>
              <label><b> Publisher :</b> {this.state.publisher}</label>

            </div>
            <div className="row" style={{ margin: "20px", textAlign: "center" }}>
              <label> <b>Published Year :</b>  {this.state.publishedyear}</label>
            </div>

            <div className="text-center">
                
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel}
                      style={{ marginLeft: "10px" }}
                    >
                      Go Back
                    </button>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBookComponent;
