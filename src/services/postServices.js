export default class PostServices {

  url = 'https://jsonplaceholder.typicode.com/posts'

  getPost (id) {
    return fetch(this.url +`/${id}`)
      .then(value => value.json())
  }
}