import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPlanets from "./components/all-planets/AllPlanets";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={'/planets'}> Planets </Link>
            </li>
          </ul>
          <Switch>
            <Route path={'/planets'} render={() => <AllPlanets/>}/>
            
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
