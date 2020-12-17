import React, {Component} from 'react';
import PostServices from "../../services/postServices";
import Post from "./Post";

class FormPost extends Component {

  postForm = React.createRef();
  postServices = new PostServices();

  state = {inputValue: '', post: null, error: false}

  prevDefault = (e) => {
    e.preventDefault()
  }
  commitState = (e) => {
    this.setState({inputValue: e.target.value})
  }

  async selectPost(id) {
    try {
      let post = await this.postServices.getPost(id)
      this.setState({post, error:false})
    }
    catch (error) {
      this.setState({error:true})
    }
  }


  render() {
    let {inputValue, post, error} = this.state;
    const onError = error ? 'Unavailable data' : null
    return (
      <div>
        <form onSubmit={this.prevDefault} ref={this.postForm}>
          <input type={'number'} onInput={this.commitState} value={inputValue}/>
          <button onClick={() => this.selectPost(this.postForm.current[0].value)}>Get Post</button>
        </form>
        <br/>
        {post && !error && <Post item={post} key={post.id}/>}
        {onError}

      </div>
    );
  }

}

export default FormPost;