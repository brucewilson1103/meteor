import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import axios from "axios";


class Saved extends Component {
  
    state = {
      neos: []
    };
  
    componentDidMount() {
      axios
        .get("/neo")
        .then(res => this.setState({ neos: res.data }))
        .catch(err => console.log(err));
        
    }
  getBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ booksList: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = bookId => {
    API.deleteBook(bookId)
      .then(this.getBooks)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {/* make jumbotron */}
        <div className="jumbotron jumbotron-fluid bg-dark text-light">
          <div className="container-fluid">
            <h1>View Saved NEO's Here</h1>
          </div>
        </div>
        {/* create row with two columns */}
        <div className="container-fluid">
          <div className="row">
            {/* begin book result section */}
            <div className="col-12">
              {!this.state.length ? (
                <h2 className="text-center">No Saved Objects To Display</h2>
              ) : (
                <React.Fragment>
                  <h3>Showing Saved Objects</h3>
                  <div className="row">
                    {this.state.map(book => {
                      return (
                        <div className="col-12 col-md-4" key={book._id}>
                          <div className="card">
                            <img src={book.image} alt={book.title} className="card-img-top" />
                            <div className="card-body">
                              <h5 className="card-title">{book.title}</h5>
                              <p className="card-text">Released: {book.date}</p>
                              {book.authors ? <p className="card-text">By: {book.authors.join(', ')}</p> : ''}
                              <p className="card-text">
                                <strong>Description</strong>: {book.description}{' '}
                              </p>

                              <a
                                href={book.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn-success btn-small">
                                See More.
                              </a>
                              <button onClick={() => this.deleteBook(book._id)} className="btn btn-dark btn-small">
                                Delete Object.
                              </button>
                              <Link to={`/saved/${book._id}`} className="btn btn-block btn-danger">View Object</Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Saved;
