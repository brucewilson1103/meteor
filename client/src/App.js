import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import './App.css';
// import Navbar from './components/Navbar';
import Search from './containers/Search';
import Saved from './containers/Saved';
import SpecificNeo from './containers/SpecificNeo';

class App extends Component {
  state = {
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
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path="/" component={SpecificNeo} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved/:bookId" component={SpecificNeo} />
          <Route render={() => <h1 className="text-center m-5">404, Page Not Found!</h1>} />
        </Switch>
          <div className="App">
            <header className="App-header">
              <p>This is App.js</p>
            </header>
            
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
