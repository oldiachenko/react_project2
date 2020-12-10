import React, {Component} from 'react';
import PostServices from "../services/PostServices";

class FullPost extends Component {

  state = {post: null}
  postServices = new PostServices();



  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let post = await this.postServices.post(id);
    this.setState({post})

  }

  render() {
    let {post} = this.state;

    return (
      <div>
        {post && post.body}

      </div>
    );
  }
}

export default FullPost;