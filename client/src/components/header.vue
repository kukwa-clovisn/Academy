<template>
  <header>
    <nav class="topNav">
      <div class="left-topNav">
        <a href="/"> <i class="fa-solid fa-phone icon"></i>+237682449347</a>
      </div>
      <div class="right-topNav">
        <a href="">
          <i class="fa-solid fa-envelope icon"></i>kcn.123.com@gmail.com</a
        >
      </div>
    </nav>
    <nav class="bottom-nav">
      <nav class="logo-nav">
        <img src="../assets/logo-b.jpeg" id="logo" alt="logo image" />
      </nav>
      <nav>
        <router-link to="/about" class="route">about</router-link>
        <router-link to="/why-us" class="route">why crypto?</router-link>
        <router-link to="/blog" class="route">blog</router-link>
        <a href="/#contact" class="route">contact</a>
      </nav>
      <nav>
        <button class="clear primary-btn">
          <router-link to="/login" class="homeBtn">sign in</router-link>
        </button>
        <button class="current primary-btn">
          <router-link to="/register" class="homeBtn">register</router-link>
        </button>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);

.primary-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: rgba(218, 121, 121, 1);
  border-radius: 3px;
  display: block;

  .homeBtn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: capitalize;
    font: 700 20px "Poppins", sans-serif;
    text-decoration: none;
  }
}

header {
  width: 100vw;
  height: fit-content;
  position: relative;

  .topNav {
    width: 100vw;
    height: 7vh;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;

    a {
      color: rgb(228, 228, 228);
      text-decoration: none;
      font-size: 11px;
      text-transform: lowercase;

      i {
        margin-right: 5px;
      }
    }
  }
  .bottom-nav {
    width: 100vw;
    padding: 0 20px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 40vw;
      height: 100%;
      padding: 0;
      &:last-child {
        width: 32vw;
      }

      .route {
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
        font-size: 16px;
      }

      .current {
        background: white;

        .homeBtn {
          color: $SecondaryColor;
        }
      }

      button.clear {
        background: transparent;
        border: 1px solid rgb(245, 248, 250);

        .homeBtn {
          color: white;
        }
      }
    }
    .logo-nav {
      width: 10vw;
      background: transparent;

      #logo {
        width: 105px;
        height: auto;
        border-radius: 100%;
      }
    }
  }
}
</style>
