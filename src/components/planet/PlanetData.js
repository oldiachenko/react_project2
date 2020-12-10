import React, {Component} from 'react';
import PlanetsServices from "../services/PlanetsServices";

class PlanetData extends Component {

  state = {planet: null}
  planetServices = new PlanetsServices();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let planet = await this.planetServices.planet(id);
    this.setState({planet})
  }

  render() {
    let {planet} = this.state;

    return (
      <div>
        {
          planet &&
          <div>
            Climate: {planet.climate}
            <br/>
            Rotation period: {planet.rotation_period}
            <br/>
            Diameter: {planet.diameter}
            <br/>
            Gravity: {planet.gravity}
            <br/>
            Terrain: {planet.terrain}
          </div>
        }


      </div>
    );
  }
}

export default PlanetData;