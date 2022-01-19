import React, { Component } from "react";
import BookService from "../Services/BookService";

class UpdateBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      bookname: "",
      bookauthor: "",
      publisher: "",
      publishedyear: "",
    };
    this.changeidHandler = this.changeidHandler.bind(this);
    this.changebooknameHandler = this.changebooknameHandler.bind(this);
    this.changebookauthorHandler = this.changebookauthorHandler.bind(this);
    this.changepublisherHandler = this.changepublisherHandler.bind(this);
    this.changepublishedyearHandler =
    this.changepublishedyearHandler.bind(this);
    //this.saveBook = this.saveBook(this);
    this.cancel = this.cancel.bind(this);
  }
  cancel() {
    this.props.history.push("/book");
  }

  componentDidMount(){
      BookService.getbookbyid(this.state.id).then((Response) => {
          let book = Response.data;
          this.setState({bookname: book.bookname,
            bookauthor: book.bookauthor,
            publisher: book.publisher,
            publishedyear: book.publishedyear
        })

      })
  }

  updateBook = (e) => {
    if (e && e.preventDefault) {
      // add?
      e.preventDefault();
      e.persist();
    }
    let book = {
      id: this.state.id,
      bookname: this.state.bookname,
      bookauthor: this.state.bookauthor,
      publisher: this.state.publisher,
      publishedyear: this.state.publishedyear,
    };
    console.log("book => " + JSON.stringify(book));
    BookService.updateBook(book, this.state.id).then((Response) => {
        this.props.history.push("/");
    })
    
  };

  changeidHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changebooknameHandler = (event) => {
    this.setState({ bookname: event.target.value });
  };

  changebookauthorHandler = (event) => {
    this.setState({ bookauthor: event.target.value });
  };

  changepublisherHandler = (event) => {
    this.setState({ publisher: event.target.value });
  };

  changepublishedyearHandler = (event) => {
    this.setState({ publishedyear: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row" style={{marginTop: "35px"}}>
            <div className="card col-md-6 offset-md-3 offset-md-1">
              <h2 className="text-center" style={{marginTop: "10px"}}>Update the Book Details</h2>

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>ID : </label>
                    <input
                      placeholder="ID"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      onChange={this.changeidHandler}
                    />
                  </div>
                  <p> </p>
                  <div className="form-group">
                    <label>Book Name : </label>
                    <input
                      placeholder="Book Name"
                      name="bookname"
                      className="form-control"
                      value={this.state.bookname}
                      onChange={this.changebooknameHandler}
                    />
                  </div>
                  <p> </p>
                  <div className="form-group">
                    <label>Book Author : </label>
                    <input
                      placeholder="Book Author"
                      name="bookauthor"
                      className="form-control"
                      value={this.state.bookauthor}
                      onChange={this.changebookauthorHandler}
                    />
                  </div>
                  <p> </p>
                  <div className="form-group">
                    <label>Publisher : </label>
                    <input
                      placeholder="Publisher"
                      name="publisher"
                      className="form-control"
                      value={this.state.publisher}
                      onChange={this.changepublisherHandler}
                    />
                  </div>
                  <p> </p>
                  <div className="form-group">
                    <label>Published Year : </label>
                    <input
                      placeholder="Published Year"
                      name="publishedyear"
                      className="form-control"
                      value={this.state.publishedyear}
                      onChange={this.changepublishedyearHandler}
                    />
                  </div>
                  <p> </p>
                  <div className="text-center">
                    <button className="btn btn-success" onClick={this.updateBook}>
                      Save Book Details
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBookComponent;
