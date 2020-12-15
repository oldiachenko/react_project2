import React from 'react';

function Post(props) {
  let {item} = props;
  return (
    <div>
      {item.id} - <b>{item.title} </b>
      <p>{item.body}</p>

    </div>
  );
}

export default Post;