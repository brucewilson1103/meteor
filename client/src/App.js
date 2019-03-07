import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {      
    neos: []
  };
  componentDidMount() {
    axios.get("/neo")
    .then (res => this.setState({neos:  res.data}))
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p>This is App.js</p>
        </header>
      </div>
    );
  }

  
}

export default App;
