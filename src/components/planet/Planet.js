import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Planet extends Component {
  render() {
    let {item, number, match:{url}} = this.props;

    return (
      <div>
        {number}: {item.name} <Link to={url + `/${number}/`}> Show data </Link>
      </div>
    );
  }
}

export default withRouter(Planet);