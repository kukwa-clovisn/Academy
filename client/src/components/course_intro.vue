<template>
  <main>
    <header>
      <nav class="logo">
        <span>AC <i>& </i>FC</span>
      </nav>
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/#contact">contact us</a>
        </li>
      </nav>
      <nav class="register">
        <a href="/register">register</a>
      </nav>
    </header>
    <div class="course-intro">
      <h1>courses</h1>
      <p>Before you strive to earn, learn. Knowledge is never wasted!</p>
      <h3>what we offer...</h3>
      <div class="course-choice">
        <button>crytpocurrency</button><button>forex</button
        ><button>web developement</button><button>graphic design</button>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from "./footer.vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Course_intro",
  components: {
    Footer,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    console.log(route.params);

    let getFromLocalStorage = ref(localStorage.getItem("token"));

    onMounted(() => {
      if (!route.params.id) {
        router.push("/login");
      }
      console.log(getFromLocalStorage.value);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
main {
  width: 100vw;
  background: linear-gradient(to bottom, rgb(169, 70, 91), $baseColor);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  header {
    width: 98vw;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      li {
        list-style-type: none;
        width: 200px;
        height: 60px;
      }

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        text-decoration: none;
        text-transform: uppercase;
        font: 600 19px "Poppins", sans-serif;
        color: $primaryColor;
      }
    }

    .logo {
      width: 190px;
      height: 90px;
      border: 1px solid white;
      background: $baseColor;
      transform: rotateZ(-10deg);
      border-radius: 0 0 10px 10px;
      border: none;
      cursor: pointer;

      span {
        display: flex;
        box-shadow: 0 2px 1px 1px rgb(200, 200, 200);
        border-radius: 10px 0 10px 0;
        padding: 10px;
        transform: rotateZ(15deg);
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
  .register {
    a {
      width: 200px;
      height: 60px;
      background: white;
      color: $baseColor;
      border-radius: 0 10px 0 10px;
    }
  }

  .course-intro {
    width: 90vw;
    margin: 20px auto;
    height: fit-content;
    padding: 20px;

    h1 {
      font: 800 65px "Nunito sans", sans-serif;
      text-transform: uppercase;
      padding: 20px;
      color: rgb(239, 236, 236);
    }

    p {
      padding: 10px;
      color: rgb(165, 165, 165);
    }

    h3 {
      text-transform: capitalize;
      color: rgb(209, 208, 208);
      font: 600 20px "Poppins", sans-serif;
      padding: 10px;
      margin-top: 70px;
    }

    .course-choice {
      width: 90vw;
      margin: 20px auto;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      button {
        width: 230px;
        height: 100px;
        margin-bottom: 23px;
        color: rgb(225, 238, 252);
        border: none;
        border-radius: 10px 0 10px 0;
        font: 700 20px "Russo One", sans-serif;
        text-transform: capitalize;
        background: radial-gradient(rgb(120, 148, 165), $baseColor);
      }
    }
  }
}
</style>
