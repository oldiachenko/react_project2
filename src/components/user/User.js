import React, {Component} from 'react';

class User extends Component {
  render() {
    let {item, onUserChoice, isShowBtn} = this.props;

    return (
      <div>
        {item.id} - {item.name} {
       isShowBtn && <button onClick={() => {onUserChoice(item.id)} }>Choose Me</button>
      }

      </div>
    );
  }
}

export default User;