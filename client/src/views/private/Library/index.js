import React, { Component } from 'react';
import './index.css';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      addedBooks: []
    }

    this.addBook = this.addBook.bind(this);
  }

  addBook(id) {
    const { addedBooks } = this.state;
    if (!addedBooks.includes(id)) {
      this.setState({
        addedBooks: this.state.addedBooks.concat(id)
      });
    } else {
      const updatedBooks = addedBooks.filter(book => book !== id);

      this.setState({
        addedBooks : updatedBooks
      });
    }
  }

  checkBook(id) {
    const { addedBooks } = this.state;

    if (addedBooks.includes(id)) {
      return "Remove From Your Library";
    } else {
      return "Add to Your Library";
    }
  }

  getLibrary() {
    fetch('/api/books/')
    .then(result => {
      return result.json();
    }).then(data => {
      this.setState({
        books: this.state.books.concat(data)
      })
    })
  }

  componentDidMount() {
    this.getLibrary();
  }

  render() {
    console.log(this.state.addedBooks);
    const { books } = this.state;
    const library = books.map((book) => {
      return (
        <div className="book" key={book.isdn}>
          <img src={book.cover} />
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <a className="btn btn-primary"
            onClick={() => this.addBook(book.isdn)}>{this.checkBook(book.isdn)}
          </a>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>My Library</h1>
            {library}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
