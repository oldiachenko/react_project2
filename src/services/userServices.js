export default class UserServices {

  url = 'https://jsonplaceholder.typicode.com/users'

  user(id) {
    return fetch(this.url + `/${id}`)
      .then(value => value.json())
  }

}