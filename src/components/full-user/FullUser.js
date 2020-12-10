import React, {Component} from 'react';
import UserServices from "../services/UserServices";

class FullUser extends Component {

  state = {user: null}
  userServices = new UserServices()

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let user = await this.userServices.user(id);
    this.setState({user})

  }

  render() {

    let {user} = this.state;

    return (
      <div>
        {
          user && <div>{user.id} - {user.name} - {user.username} - {user.email}</div>
        }

      </div>
    );
  }
}

export default FullUser;