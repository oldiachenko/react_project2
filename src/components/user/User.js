import React, {Component} from 'react';

class User extends Component {
  render() {
    let {item, onUserChoice, isShowButton} = this.props;

    return (
      <div>
        {item.id} - {item.name} {
        isShowButton && <button onClick={() => {onUserChoice(item.id)}}>Choose Me</button>
      }
      </div>
    );
  }
}

export default User;