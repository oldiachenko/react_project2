export default class PlanetsServices {

  url='https://swapi.dev/api/planets/'

  async planets() {
    return await fetch(this.url)
      .then(value => value.json())
  }

  async planet(id) {
    return await fetch(this.url + `${id}/`)
      .then(value => value.json())
  }

}