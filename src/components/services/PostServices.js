export class PostServices {

  url = 'https://jsonplaceholder.typicode.com/posts'

  getAllPosts () {
   return fetch(this.url)
      .then(value => value.json())
      .then(value => value)
  }

 getPostById (id) {
   return fetch(`${this.url}/${id}`)
     .then(value => value.json())
     .then(value => value)
 }

}