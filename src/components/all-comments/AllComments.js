import React, {Component} from 'react';
import {CommentsServices} from "../services/CommentsServices";
import Comment from "../comment/Comment";

class AllComments extends Component {

  commentsServices = new CommentsServices ();
  state={comments:[]}

  async componentDidMount() {
    let comments = await this.commentsServices.getAllComments();
    this.setState({comments})
  }

  render() {
    let {comments} = this.state;
    return (
      <div>
        {
          comments.map(value => <Comment item={value} key={value.id}/>)
        }

      </div>
    );
  }
}

export default AllComments;