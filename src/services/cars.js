import axios from 'axios'

export default class Cars {
  constructor() {

  }
  getAll() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
    return axios.get('cars')
  }
}
    
export const cars = new Cars()