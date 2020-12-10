import React, {Component} from 'react';
import CommentsServices from "../services/CommentsServices";
import Comment from "../comment/Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComment from "../comment/FullComment";

class AllComments extends Component {

  state={comments:[]}
  commentsServices = new CommentsServices();

  async componentDidMount() {
    let comments = await this.commentsServices.comments();
    this.setState({comments})
  }

  render() {
    let {comments} = this.state;
    let {match:{url}} = this.props;

    return (
      <div>
        {comments.map(value => <Comment item={value} key={value.id}/>)}
        <hr/>
        <Switch>
          <Route path={url + `/:id`} render={(props) => {
            let {match:{params:{id}}} = props;
            return <FullComment {...props} key={id}/>
          }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(AllComments);