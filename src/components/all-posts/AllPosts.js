import React, {Component} from 'react';
import {PostsServices} from "../services/PostsServices";
import Post from "../post/Post";

class AllPosts extends Component {

  postsServices = new PostsServices ()
  state={posts:[]}

  async componentDidMount() {
    let posts = await this.postsServices.getAllPosts();
    this.setState({posts})
  }

  render() {
    let {posts} = this.state;
    return (
      <div>
        {posts.map(value => <Post item={value} key={value.id}/>)}
      </div>
    );
  }
}

export default AllPosts;