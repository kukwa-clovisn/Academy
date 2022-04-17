<template>
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
* {
  transition: all 0.3s ease;
}

button,
a,
label {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;

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
