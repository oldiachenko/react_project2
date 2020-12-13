import React, {Component} from 'react';
import './User.css'
import {Link, withRouter} from "react-router-dom";

class User extends Component {


  render() {

    let {item, match:{url}} = this.props;

    return (
      <div className={'user'}>
           {item.id}. {item.name}
           <div className={'userNav'}>
             <div className={'details'}>
               <Link to={url + `/` + item.id}>Details</Link>
             </div>


           </div>

      </div>
    );
  }
}

export default withRouter(User);