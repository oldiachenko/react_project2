import React, {Component} from 'react';
import PostServices from "../services/PostServices";
import Post from "../post/Post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../post/FullPost";

class AllPosts extends Component {

  postServices = new PostServices();

  state = {posts: []}

  async componentDidMount() {
    let posts = await this.postServices.posts();
    this.setState({posts})
  }

  render() {
    let {posts} = this.state;
    let {match: {url}} = this.props;

    return (
      <div>
        {
          posts.map(value => <Post item={value} key={value.id}/>)
        }
        <hr/>

        <Switch>
          <Route path={url + `/:id`} render={(props) => {
            const {match: {params: {id}}} = props
            return <FullPost {...props} key={id}/>
          }}/>

        </Switch>

      </div>


    );
  }
}

export default withRouter(AllPosts);