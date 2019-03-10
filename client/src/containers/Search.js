import React, { Component } from "react";
import API from "../utils/API";
import axios from "axios";
import moment from "moment";
import SpecificNeo from "./SpecificNeo"

class Search extends Component {
  state = {
    searchTerm: "",
    neos: [],
    recentNeos: []
  };

  componentDidMount() {
    axios
      .get(API.getNeosByDate(moment(Date.now()).format("YYYY, MM, DD")))
      .then(res => this.setState({ recentNeos: res.data }))
      .catch(err => console.log(err));
  }
  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.searchTerm) {
      return false;
    }
    API.getNeosByDate(this.state.searchTerm).then(res => 
      {console.log(res.data);
      
        this.setState({ recentNeos: res.data })
      }

    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
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
            <div className="col-12 col-sm-6 col-md-3">
              <h3 className="whiteFont">
                Did an Asteroid come close to destroying the Earth on your Birthday?
              </h3>
              <form onSubmit={this.handleFormSubmit}>
                <input
                  name="searchTerm"
                  onChange={this.handleInputChange}
                  placeholder="Enter NEO name here"
                  value={this.state.searchTerm}
                  type="date"
                  className="form-control mb-3"
                />
                <button
                  className="btn btn-block btn-success"
                  onClick={this.handleFormSubmit}
                >
                  Search for a Birthday Asteroid.
                </button>
              </form>
            </div>
            {/* end form section */}
            {/* begin neo result section */}
            <div className="col-12 col-sm-6 col-md-9">
              {!this.state.recentNeos.data ? (
                <h2 className="text-center whiteFont">Birthday Destruction?</h2>
              ) : (
                <React.Fragment>
                  <h3 className="whiteFont">Hazardous Asteroids Near Your Birthday On {this.state.searchTerm}</h3>
                  <div className="row">
                  {this.state.recentNeos.data.map((recentNeo, i) => (
                    <div className="col-12 col-md-6" key={i}>
                    <div className="card paddedCard">
              
                      <div className="card-body">
                        <h5 className="card-title titleNeo"><strong> NEO Designation</strong>: {recentNeo[0]}</h5>
                        <p className="card-text"><strong>Time of Closest Approach</strong>: {recentNeo[3]}</p>
                        <p className="card-text"><strong>Distance of Closest Approach (AU)</strong>: {recentNeo[5]}</p>
                        {recentNeo[10] ? <p className="card-text"><strong>Observable Brightness</strong>: {recentNeo[10]} in Magnitude</p> : ''}
                        <p className="card-text">
                          <strong>Velocity of Asteroid Relative to Earth</strong>: {recentNeo[7]} km/s
                        </p>
                          
                          {/* FIX THIS WITH DAVID */}
                        <a 
                          href={`https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=${recentNeo[0]}&orb=1`}
                          
                          rel="noopener noreferrer"
                          target="_blank"
                          className="btn btn-success btn-small">
                          See More.
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  ))}
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
