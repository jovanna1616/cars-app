import axios from 'axios'

export default class Cars {
  constructor() {

  }
  getAll() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
    return axios.get('cars')
  }

  addCar(car) {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
    return axios.post('cars', car)
  }
}
    
export const cars = new Cars()