import React, {Component} from 'react';

class UserInfo extends Component {
  render() {
    let {item} = this.props;
    return (
      <div>
        <p>
          E-mail: {item.email}
          <br/>
          Address: {item.address.street}, {item.address.suite}, {item.address.city}
          <br/>
          Company: {item.company.name}
        </p>

      </div>
    );
  }
}

export default UserInfo;