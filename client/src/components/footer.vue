<template>
  <footer>
    <div class="blur"></div>
    <div class="content">
      <div class="left-content">
        <h1>acfc</h1>
        <h4>Advanced Crypto and Forex Community</h4>
      </div>
      <div class="right-content">
        <ul>
          <li>why crypto?</li>
          <li>courses</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
    <p>&copy;copyright_codingHerald_2022</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
$baseColor: #072e54;
footer {
  width: 100vw;
  height: 55vh;
  background: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  position: relative;

  .blur {
    background: $baseColor;
    opacity: 0.9;
  }

  .content {
    width: 90vw;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 1;

    .left-content {
      width: 34%;
      padding: 20px;
      border-right: 1px solid rgb(176, 175, 175);
      position: relative;

      h1 {
        text-transform: uppercase;
        font: 900 60px "Russo One", sans-serif;
        position: relative;
        z-index: 1;
      }
    }

    .right-content {
      width: 65%;
      padding: 10px;
      position: relative;

      ul {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        li {
          width: 230px;
          height: 60px;
          list-style-type: none;

          a {
            text-decoration: none;
            text-transform: capitalize;
            color: rgb(190, 190, 190);
          }
        }
      }
    }
  }

  p {
    color: rgb(226, 241, 245);
    position: relative;
    margin: 20px auto;
  }
}
</style>
