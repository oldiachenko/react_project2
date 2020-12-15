export default class PostsServices {

  url ='https://jsonplaceholder.typicode.com/posts'

  userPost (id) {
     return fetch (this.url +`?userId=${id}`)
      .then(value => value.json())
  }


}