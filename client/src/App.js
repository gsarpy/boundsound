import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';

/* Import Components */
import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  state = {
    search: "Ready Player One",
    books: [
      {
        title: "Ready Player One",
        isdn: "1234",
        description: `Ready Player One is a 2011 science fiction novel, and the
        debut novel of American author Ernest Cline. The story, set in a dystopian
        2044, follows protagonist Wade Watts on his search for an Easter egg in a
        virtual reality game, the discovery of which will lead him to inherit a
        fortune in a world wrecked by an energy crisis.`,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61huLU47zbL._AA300_.jpg',
      },
      {
        title: "Snow Crash",
        isdn: "3214",
        description: `Snow Crash is a science fiction novel by American writer
        Neal Stephenson, published in 1992. Like many of Stephenson's other novels
        it covers history, linguistics, anthropology, archaeology, religion,
        computer science, politics, cryptography, memetics and philosophy.`,
        cover: 'https://f4.bcbits.com/img/a2053759137_16.jpg',
      }
    ]
  }

  handleSearch(e) {
    const search = e.target.value;

    this.setState({ search });
  }

  render() {
    const { books } = this.state;

    const allBooks = books.map((book) => {
      return(
        <Player
          title={book.title}
          cover={book.cover}
          description={book.description}
          key={book.isdn}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><i className="fas fa-headphones"></i>boundsound</h1>
        </header>
        <p className="App-intro">
          Search for an audiobook to listen to.
        </p>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
              <input
                type="text"
                onChange={this.handleSearch}
                value={this.state.search}
                className="form-control"
                id="search"
              />
              <a className="btn btn-block btn-lg btn-primary">Search</a>
            </div>
          </div>
        </div><br />

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {allBooks}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
