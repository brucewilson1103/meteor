import React, { Component } from 'react';
import API from '../utils/API';
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: '',
    neos: [],
    recentNeos: []
  };

  componentDidMount() {
    axios
      .get("/api/neo")
      .then(res => this.setState({ neos: res.data }))
      .catch(err => console.log(err));
      
  }
  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.searchTerm) {
      return false;
    }
    API.getNeosByDate(this.state.searchTerm)
    .then(res => this.setState({ recentNeos: res.data }))
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  saveObject = objectTitle => {
    
    alert("Your Asteroid has been marked for further review." )
    // find book in this.state.booksList based on the objectTitle value
    // const objectPicked = this.state.neos.find(object => object.title === objectTitle);
    
    API.saveObject(objectTitle,{saved:true})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

render() {
  return (
    <React.Fragment>
      {/* make jumbotron */}
      
      {/* create row with two columns */}
      <div className="container-fluid">
        <div className="row">
          {/* form section */}
          {/* <div className="col-12 col-sm-6 col-md-3">
            <h3>Search For An Asteroid</h3>
            <form onSubmit={this.handleFormSubmit}>
              <input
                name="searchTerm"
                onChange={this.handleInputChange}
                placeholder="Enter NEO name here"
                value={this.state.searchTerm}
                type="string"
                className="form-control mb-3"
              />
              <button className="btn btn-block btn-success" onClick={this.handleFormSubmit}>
                Search for an Asteroid. padded
              </button>
            </form>
          </div> */}
          {/* end form section */}
          {/* begin book result section */}
          <div className="col-12 col-sm-6 col-md-9">
            {!this.state.neos.length ? (
              <h2 className="text-center">Near Earth Objects Can be Found with a Scrape</h2>
            ) : (
              <React.Fragment>
                <h3 className="whiteFont">Recent Hazardous Asteroids</h3>
                <div className="row">
                <h5 className="whiteFont">Click Save Object to flag the NEO for further review.</h5><br/>
                  {this.state.neos.map(neos => {
                    return (
                      <div className="col-12 col-md-6" key={neos.title}>
                        <div className="card paddedCard">
                          <img className = "sizeAst" src="/asteroid.png" alt={neos.title} className="card-img-top" />
                          <div className="card-body">
                            <h5 className="card-title">{neos.title}</h5>
                            
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
                            <button onClick={() => this.saveObject(neos._id)} className="btn btn-dark btn-small">
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