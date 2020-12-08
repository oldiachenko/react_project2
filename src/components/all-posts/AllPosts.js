import React, {Component} from 'react';
import {PostServices} from "../services/PostServices";
import Post from "../post/Post";
import SelectedPost from "../post/SelectedPost";

class AllPosts extends Component {

  postServices = new PostServices()

  state={posts:[], chosenPost:null}

  componentDidMount() {
    this.postServices.getAllPosts().then(value=>this.setState({posts:value}))
  }

  selectPost = (id) => ( this.postServices.getPostById(id).then(value => this.setState({chosenPost:value})))


  render() {
    let {posts,chosenPost} = this.state;
    
    return (
      <div>
        {posts.map(value => <Post item={value} key={value.id} selectPost={this.selectPost} />)}
      <hr/>
        {chosenPost && <SelectedPost item={chosenPost} key={chosenPost.id}/>}
      </div>
    );
  }
}

export default AllPosts;