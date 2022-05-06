<template>
  <div class="footer">
    <div class="blur"></div>
    <div class="footer-content">
      <div class="left-content">
        <h1>acfc</h1>
        <h4>Advanced Crypto and Forex Community</h4>
        <h6>Building the future</h6>
      </div>
      <div class="right-content">
        <ul>
          <li><a href="/signup">sign up</a></li>
          <li><a href="/login">sign in</a></li>
          <li><a href="/register">register</a></li>
          <li><a href="/why-us"> why crypto?</a></li>
          <li><a href="/#courses"> courses</a></li>
          <li><a href="/#contact">contact us</a></li>
        </ul>
      </div>
    </div>
    <p>&copy;copyright_codingHerald_2022</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
$baseColor: #072e54;

.footer {
  width: 100vw;
  height: fit-content;
  padding: 30px 20px;
  background: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  .blur {
    background: $baseColor;
    opacity: 0.9;
  }

  .footer-content {
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
        color: rgb(229, 233, 236);
        letter-spacing: 3px;
      }

      h4 {
        color: rgb(195, 202, 210);
      }

      h6 {
        color: rgb(137, 156, 171);
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
          width: 200px;
          height: 75px;
          list-style-type: none;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-transform: capitalize;
            color: rgb(190, 190, 190);
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;

      .left-content,
      .right-content {
        width: 100%;
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
