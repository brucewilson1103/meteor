import React, { Component } from 'react';
import API from '../utils/API';
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: '',
    neos: []
  };

  componentDidMount() {
    axios
      .get("/neo")
      .then(res => this.setState({ neos: res.data }))
      .catch(err => console.log(err));
      
  }

render() {
  return (
    <React.Fragment>
      {/* make jumbotron */}
      
      {/* create row with two columns */}
      <div className="container-fluid">
        <div className="row">
          {/* form section */}
          <div className="col-12 col-sm-6 col-md-3">
            <h3>Search For An Asteroid</h3>
            <form onSubmit={this.handleFormSubmit}>
              <input
                name="searchTerm"
                onChange={this.handleInputChange}
                placeholder="Enter NEO name here"
                value={this.state.searchTerm}
                type="input"
                className="form-control mb-3"
              />
              <button className="btn btn-block btn-success" onClick={this.handleFormSubmit}>
                Search for an Asteroid.
              </button>
            </form>
          </div>
          {/* end form section */}
          {/* begin book result section */}
          <div className="col-12 col-sm-6 col-md-9">
            {!this.state.neos.length ? (
              <h2 className="text-center">Search For a Near Earth Object</h2>
            ) : (
              <React.Fragment>
                <h3>Recent Hazardous Asteroids {this.state.searchTerm}</h3>
                <div className="row">
                  {this.state.neos.map(neos => {
                    return (
                      <div className="col-12 col-md-6" key={neos.title}>
                        <div className="card">
                          <img src={neos.image} alt={neos.title} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{neos.title}</h5>
                            <p className="card-text">Released: {neos.date}</p>
                            {neos.authors ? <p className="card-text">By: {neos.authors.join(', ')}</p> : ''}
                            <p className="card-text">
                              <strong>Description</strong>: {neos.title}{' '}
                            </p>

                            <a
                              href={neos.link}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="btn btn-success btn-small">
                              See More.
                            </a>
                            <button onClick={() => this.saveBook(neos.bookId)} className="btn btn-dark btn-small">
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

export default Search;