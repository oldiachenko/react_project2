import React, {Component} from 'react';
import './Post.css'

class Post extends Component {
  render() {
    let {item} = this.props;
    return (
      <div >
        <div className={'post'}>
          <div className={'postTitle'}>{item.id}. {item.title} </div>
          {item.body}
        </div>
      </div>

    );
  }
}

export default Post;