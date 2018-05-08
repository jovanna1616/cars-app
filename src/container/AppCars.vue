<template>
  <div>
    <ul>
      <li v-for="(car, key) in cars" :key="key">
        <p>brand: {{ car.brand }}</p>
        <p>model: {{ car.model }}</p>
        <p>year: {{ car.year }}</p>
        <p>engine: {{ car.engine }}</p>
        <p>is automatic: {{ car.isAutomatic }}</p>
        <p>max speed: {{ car.maxSpeed }}</p>
        <p>model: {{ car.model }}</p>
        <p>number of doors: {{ car.numberOfDoors }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { cars } from '../services/cars'
  export default {
    data() {
      return {
        cars: []
      }
    },
    created() {
      cars.getAll()
      .then(response => {
        this.cars = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  
  }
</script>

<style>
  
</style>
