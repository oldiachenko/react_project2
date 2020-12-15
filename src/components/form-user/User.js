import React from 'react';

function User(props) {
  let {item} = props;

  return (
    <div>
      {item.id} - {item.name}
    </div>
  );
}

export default User;