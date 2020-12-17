export default class PostServices {

  url = 'https://jsonplaceholder.typicode.com/posts'

  getPost (id) {
    return fetch(this.url +`/${id}`)
      .then(value => {
        if (value.status === 200) {
          return value.json()
        } else {
          throw new Error('Unavailable data')
        }
      })
  }
}