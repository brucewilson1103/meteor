import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import './App.css';
// import Navbar from './components/Navbar';
import Search from './containers/Search';
import Saved from './containers/Saved';
import SpecificNeo from './containers/SpecificNeo';
import NeoPage from './containers/NeoPage';

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
          <Route exact path="/neoPage" component={NeoPage} />
          <Route exact path="/saved/:Id" component={SpecificNeo} />
          {/* <Route render={() => <img classname= "dynamyte " src="/404.png" alt="404" />} /> */}
        </Switch>
          <div className="App">
            <header className="App-header">
              <p>Bruce Wilson</p>
            </header>
            
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
