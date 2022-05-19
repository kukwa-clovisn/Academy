<template>
  <main>
    <header class="large-screen-header">
      <nav class="topNav">
        <div class="left-topNav">
          <a href="/#contact">
            <i class="fa-solid fa-phone icon"></i>+237682449347</a
          >
        </div>
        <div class="right-topNav">
          <a href="/#contact">
            <i class="fa-solid fa-envelope icon"></i>kcn.123.com@gmail.com</a
          >
        </div>
      </nav>
      <nav class="bottom-nav">
        <!-- <nav class="logo-nav">
          <span>AC <i>&</i> FC</span>
        </nav> -->
        <nav class="logo-nav">
          <img src="../assets/logo-white.jpg" alt="" />
        </nav>
        <nav class="routes">
          <router-link to="/course" class="route">courses</router-link>
          <router-link to="/why-us" class="route">why crypto?</router-link>
          <router-link to="/blog" class="route">blog</router-link>
          <a href="/#contact" class="route">contact</a>
        </nav>
        <nav>
          <button class="clear primary-btn">
            <router-link to="/login" class="homeBtn">sign in</router-link>
          </button>
          <button class="current primary-btn">
            <router-link to="/signup" class="homeBtn">register</router-link>
          </button>
        </nav>
      </nav>
    </header>
    <header class="small-screen-header">
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
      <nav class="bottom-nav" v-if="noDropdown">
        <nav class="logo-nav" @click="toHome()">
          <img src="../assets/logo-white.jpg" alt="" />
        </nav>
        <nav class="menu-bars">
          <button @click="menuFunction()">
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>
      </nav>
      <nav class="bottom-nav menu-nav" v-if="onDropdown">
        <nav class="logo-nav">
          <span>ac <i>&</i> fc</span>
        </nav>
        <nav class="menu-bars">
          <button @click="closeDropdown()">&times;</button>
        </nav>
      </nav>
      <nav class="menu-dropdown" v-if="onDropdown">
        <ul>
          <li><a href="/#courses">courses</a></li>
          <li><a href="/signup">sign up</a></li>
          <li><a href="/login">sign in</a></li>
          <li><a href="/signup">register</a></li>
          <li><a href="/why-us">why crypto?</a></li>
          <li><a href="/blog">blog</a></li>
          <li><a href="/about">about us</a></li>
          <li><a href="/#contact">contact</a></li>
        </ul>
      </nav>
    </header>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    let onDropdown = ref(false);
    let noDropdown = ref(true);

    function menuFunction() {
      onDropdown.value = true;
      noDropdown.value = false;
    }

    function closeDropdown() {
      onDropdown.value = false;
      noDropdown.value = true;
    }

    function toHome() {
      router.push("/");
    }

    return { onDropdown, noDropdown, menuFunction, closeDropdown, toHome };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$fallback: rgb(19, 37, 62);

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
    background: $fallback;
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
    width: 95vw;
    padding: 0 20px;
    margin: auto;
    height: 10vh;
    display: flex;
    background: transparent;
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

        @media screen and (max-width: 1000px) {
          width: 40vw;
        }
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
        font-size: 14px;

        @media screen and (max-width: 1060px) {
          font-size: 12px;
        }
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

    .routes {
      @media screen and (max-width: 1000px) {
        width: 50vw;
      }
    }
    .logo-nav {
      width: 10vw;
      background: transparent;

      img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        background: transparent;
        cursor: pointer;
      }

      span {
        display: flex;
        box-shadow: 0 2px 1px 1px rgb(200, 200, 200);
        border-radius: 10px 0 10px 0;
        padding: 10px;
        transform: rotateZ(10deg);
        text-transform: uppercase;
        font: 800 35px "Russo One", sans-serif;
        background: linear-gradient(
          to bottom,
          $SecondaryColor 20%,
          $tertiaryColor,
          $primaryColor
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        i {
          font-size: 23px;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
  .menu-nav {
    width: 90vw;
    margin: auto;
  }
}

.small-screen-header {
  display: none;
}

.large-screen-header {
  @media screen and (max-width: 917px) {
    display: none;
  }
}
.small-screen-header {
  @media screen and (max-width: 917px) {
    display: block;

    .bottom-nav {
      padding: 0 10px;
      position: relative;

      .logo-nav {
        margin-left: 40px;
      }

      .menu-bars {
        width: 100px;
        position: absolute;
        right: 20px;
        top: 10px;
      }

      button {
        box-shadow: 3px 3px;
        width: 100px;
        height: 50px;
        background: transparent;
        border: none;
        font-size: 40px;
        color: white;
        box-shadow: none;

        i {
          color: white;
          font-size: 40px;
        }
      }
    }

    .menu-dropdown {
      width: 100%;
      height: fit-content;
      padding: 20px;

      ul {
        width: 100%;
        height: fit-content;

        li {
          list-style-type: none;
          width: 90%;
          height: 50px;

          margin: 10px auto;
          // box-shadow: 2px 2px 2px 0.2px white;
          border-bottom: 1px solid white;
          list-style-position: outside;
          color: white;

          a {
            text-decoration: none;
            text-transform: capitalize;
            color: $primaryColor;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
