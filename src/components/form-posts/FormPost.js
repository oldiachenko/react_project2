import React, {Component} from 'react';
import PostServices from "../../services/postServices";
import Post from "./Post";

class FormPost extends Component {

  postForm = React.createRef();
  postServices = new PostServices();

  state = {inputValue: '', post: null}

  prevDefault = (e) => {
    e.preventDefault()
  }
  commitState = (e) => {
    this.setState({inputValue: e.target.value})
  }

  async selectPost(id) {
    let post = await this.postServices.getPost(id)
    this.setState({post})
  }


  render() {
    let {inputValue, post} = this.state;
    return (
      <div>
        <form onSubmit={this.prevDefault} ref={this.postForm}>
          <input type={'number'} onInput={this.commitState} value={inputValue}/>
          <button onClick={() => this.selectPost(this.postForm.current[0].value)}>Get Post</button>
        </form>
        <br/>
        {
          post && <Post item={post} key={post.id}/>
        }

      </div>
    );
  }

}

export default FormPost;