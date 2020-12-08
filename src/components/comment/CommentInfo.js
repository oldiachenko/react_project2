import React, {Component} from 'react';

class CommentInfo extends Component {
  render() {
    let {item} = this.props;

    return (
      <div>
        <p>
          {item.body}
        </p>
      </div>
    );
  }
}

export default CommentInfo;