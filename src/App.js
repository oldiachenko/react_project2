import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import AllUsers from "./components/all-users/AllUsers";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/all-users'}>Users</Link>
          </nav>
          <Switch>
            <Route path={'/all-users'} render={() => {
              return <AllUsers/>
            }}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
