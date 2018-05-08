<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="brand">Brand</label>
        <input v-model="car.brand" type="text" class="form-control" placeholder="Brand">
      </div>
      <div class="form-group">
        <label for="model">Car Model</label>
        <input v-model="car.model" type="text" class="form-control" placeholder="Car Model">
      </div>
      <div class="form-group">
        <label for="select">Select Year</label>
        <select class="select form-control" v-model="car.year">
                  <option :value="year" v-for="(year, key) in allYears" :key="key" >{{ year }}</option>
              </select>
      </div>
      <div class="form-group">
        <label for="maxSpeed">Max speed</label>
        <input v-model="car.maxSpeed" type="number" class="form-control" placeholder="Car max speed">
      </div>
      <div class="form-group">
        <label for="numberOfDoors">Number of doors</label>
        <input v-model="car.numberOfDoors" type="number" class="form-control" placeholder="Car Number of doors">
      </div>
      <div class="form-group">
        <input type="checkbox" v-model="car.IsAutomatic">
        <label for="checkbox">{{ car.IsAutomatic }}</label>
      </div>
      <div class="form-group">
        <input type="radio" value="Diesel" v-model="car.engine">
        <label for="diesel">Diesel</label>
        <br>
        <input type="radio" value="Petrol" v-model="car.engine">
        <label for="petrol">Petrol</label>
        <br>
        <input type="radio" value="Electric" v-model="car.engine">
        <label for="electric">Electric</label>
        <br>
        <input type="radio" value="Hybrid" v-model="car.engine">
        <label for="hybrid">Hybrid</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="button" @click="resetForm()" class="btn btn-primary">Reset</button>
    </form>
  </div>
</template>

<script>
  import {
    cars
  } from '../services/cars'
  export default {
    data() {
      return {
        car: {
          brand: '',
          model: '',
          year: 0,
          maxSpeed: 0,
          isAutomatic: true,
          engine: '',
          numberOfDoors: 0
        },
        years: []
      }
    },
    computed: {
      allYears() {
        for (let i = 1990; i <= 2018; i++) {
          this.years.push(i)
        }
        return this.years
      }
    },
    methods: {
      onSubmit() {
        this.car.year = parseInt(this.car.year)
        this.car.maxSpeed = parseInt(this.car.maxSpeed)
        this.car.numberOfDoors = parseInt(this.car.numberOfDoors)
        cars.addCar(this.car)
          .then(response => {
            this.$router.push('/cars')
          }).catch(error => {
            console.log('error', error)
          })
      },
      resetForm() {
        Object.keys(this.car).forEach((key, value) => {
          this.car[key] = ''
        })
        
      }
    }
  }
</script>
