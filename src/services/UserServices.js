export default class UserServices {
  url = 'https://jsonplaceholder.typicode.com/users'

 allUsers() {
    return fetch(this.url)
      .then(value => value.json())
  }
  user(id) {
    return fetch(this.url+`/${id}`)
      .then(value => value.json())
  }
}


