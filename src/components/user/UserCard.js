import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import './UserCard.css'
import {Link, Route, withRouter} from "react-router-dom";
import Posts from "../posts/Posts";

class UserCard extends Component {
  state = {user: null}
  userServices = new UserServices();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let user = await this.userServices.user(id);
    this.setState({user})
  }

  render() {
    let {user} = this.state;
    let {match: {url, params: {id}}} = this.props;

    return (
      <div>
        {
          user &&
          <div className={'userCard'}>
            <span className={'userName'}>{user.name} </span>

            <br/>
            <span className={'nickName'}>{user.username}</span>
            <hr/>
            <span className={'bold'}>Phone:</span> {user.phone}
            <hr/>
            <span className={'bold'}>Email:</span> {user.email}
            <hr/>
            <span className={'bold'}>Website:</span> {user.website}
            <div className={'postsLink'}>
              <Link to={url + '/posts'}>Posts</Link>
            </div>

          </div>
        }
        <div className={'allPosts'}>
          <Route path={url + '/posts'} render={() => {
            return <Posts id={id} key={id}/>
          }}/>
        </div>

      </div>
    );
  }
}
export default withRouter(UserCard);

