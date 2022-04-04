<template>
  <nav>
    <router-link to="/">Graphic Design</router-link> |
    <router-link to="/about">wed Developement</router-link> |
    <router-link to="/nest">crytpocurrency</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    color: #072e54;
    font: 600 23px sans-serif;
    text-transform: capitalize;
    padding: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #14bb70;
    }
  }
}
</style>
