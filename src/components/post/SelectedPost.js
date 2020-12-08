import React, {Component} from 'react';

class SelectedPost extends Component {
  render() {
    let {item} = this.props;
    return (
      <div>
        {item.id} - {item.title} - {item.body}
      </div>
    );
  }
}

export default SelectedPost;