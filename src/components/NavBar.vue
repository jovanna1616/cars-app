<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Cars</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-item nav-link" to="cars">Cars <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-item nav-link" to="add">Add car <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
  </div>
</nav>
</template>
