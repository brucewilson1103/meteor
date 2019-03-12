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
        .get("/api/neo")
        .then(res => {
          console.log(res.data)
          const newArray = res.data.filter(function savedCheck(neo) {
              return neo.saved
            })
          
          console.log(newArray);
          this.setState({ neos: newArray})
          
        })
        
        .catch(err => console.log(err));
        
    }
  saveObject = (neoTitle) => {alert("hello");
    API.savedObject(neoTitle)
      .then(res => console.log(res.data))
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
              {!this.state.neos.length ? (
                <h2 className="text-center">No Saved Objects To Display</h2>
              ) : (
                <React.Fragment>
                  <h3 className="whiteFont">Showing Saved Objects</h3>
                  <div className="row">
                  {this.state.neos.map(neos => {
                    return (
                      <div className="col-12 col-md-6" key={neos.title}>
                        <div className="card paddedCard">
                          <img className = "sizeAst" src="/asteroid.png" alt={neos.title} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{neos.title}</h5>
                            {neos.authors ? <p className="card-text">By: {neos.authors.join(', ')}</p> : ''}
                            <p className="card-text">
                              <strong>Dangerous Asteroid Name</strong>: {neos.title}{' '}
                            </p>

                            <a
                              href={neos.link}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="btn btn-success btn-small">
                              See More.
                            </a>
                            <button onClick={() => this.saveObject(neos.title)} className="btn btn-dark btn-small">
                              Save Object.
                            </button>
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
