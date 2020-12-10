import React, {Component} from 'react';
import CommentsServices from "../services/CommentsServices";

class FullComment extends Component {

  state={comment:null}
  commentsServices = new CommentsServices()

  async componentDidMount() {
    let {match:{params:{id}}} = this.props;
    let comment = await this.commentsServices.comment(id);
    this.setState({comment})

  }

  render() {
    let {comment} = this.state;
    return (
      <div>
        {comment && comment.body}
      </div>
    );
  }
}

export default FullComment;