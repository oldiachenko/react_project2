import React, {Component} from 'react';
import PostsServices from "../services/PostsServices";
import Post from "../post/Post";

class Posts extends Component {

  postsServices = new PostsServices()
  state = {posts:[]}

  async componentDidMount() {
    let {id} = this.props;
    let posts = await this.postsServices.userPost(id);
    this.setState({posts})

  }

  render() {
    let {posts} = this.state;
    return (
      <div>
        {
          posts.map(value => <Post item={value} key={value.id}/>)
        }
      </div>
    );
  }
}

export default Posts;