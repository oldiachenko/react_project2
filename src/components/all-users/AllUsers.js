import React, {Component} from 'react';
import UserServices from "../services/UserServices";
import User from "../user/User";
import {Route, Switch, withRouter} from "react-router-dom";
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {

  userServices = new UserServices()
  state = {users: []}

  async componentDidMount() {
    let users = await this.userServices.users();
    this.setState({users})
  }


  render() {

    let {users} = this.state;
    let {match:{url}} = this.props;

    return (

      <div>
        {
          users.map(value => <User item={value} key={value.id}/>)
        }
        <hr/>
        <Switch>
          <Route path={url + `/:id`} render={(props) => {
            const {match:{params:{id}}} = props;
            return <FullUser {...props} key={id}/>
          } }/>
        </Switch>

      </div>
    );
  }
}

export default withRouter(AllUsers);