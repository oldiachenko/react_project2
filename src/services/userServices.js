export default class UserServices {

  url = 'https://jsonplaceholder.typicode.com/users'

  user(id) {
    return fetch(this.url + `/${id}`)
      .then(value => {
          if (value.status === 200) {
            return value.json()
          } else {
            throw new Error('Unavailable data')
          }
        }
      )
  }

}