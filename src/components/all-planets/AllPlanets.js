import React, {Component} from 'react';
import PlanetsServices from "../services/PlanetsServices";
import Planet from "../planet/Planet";
import {Route, Switch, withRouter} from "react-router-dom";
import PlanetData from "../planet/PlanetData";

class AllPlanets extends Component {

  state = {planets: null}
  planetServices = new PlanetsServices();

  async componentDidMount() {
    let planets = await this.planetServices.planets();
    this.setState({planets})
  }

  render() {
    let {planets} = this.state;
    let {match: {url}} = this.props;
    return (
      <div>
        {
          planets && planets.results.map((value, index) => <Planet item={value} number={++index} key={index}/>)
        }
        <hr/>
        <Switch>
          <Route path={url + `/:id/`} render={(props) => {
            let {match: {params: {id}}} = props;
            return <PlanetData {...props} key={id}/>
          }}/>

        </Switch>

      </div>
    );
  }
}

export default withRouter(AllPlanets);