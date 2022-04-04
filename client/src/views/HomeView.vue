<template>
  <div class="home">
    <h1>learn Graphic Design now!</h1>
    <img alt="Vue logo" src="../assets/graphic-design.jpg" />
    <button>register now!</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
.home {
  width: 80vw;
  margin: 0 auto;

  h1 {
    text-transform: capitalize;
    font: 700 29px sans-serif;
    padding: 10px;
    text-align: center;
    color: rgb(203, 39, 60);
  }
  button {
    display: block;
    margin: 10px auto;
    cursor: pointer;
    width: 180px;
    height: 50px;
    border: none;
    border-radius: 3px;
    color: white;
    font: 600 20px sans-serif;
    background: linear-gradient(300deg, purple, rgb(203, 39, 60));
  }
}
</style>
