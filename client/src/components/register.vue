<template>
  <main>
    <div class="landing-page">
      <div class="blur"></div>
      <div class="left-content">
        <h1>courses</h1>
        <li>
          <span><i class="fa-solid fa-bitcoin-sign"></i></span>
          <p>cryptocurrency</p>
        </li>

        <li>
          <span><i class="fa-solid fa-chart-line"></i></span>
          <p>Forex</p>
        </li>

        <li>
          <span>
            <i class="fa-brands fa-sketch"></i>
          </span>
          <p>Graphic design</p>
        </li>

        <li>
          <span><i class="fa-solid fa-code"></i></span>
          <p>Web developement</p>
        </li>
        <p>register to get access to our pro courses</p>
      </div>
      <div class="right-content">
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="title">
          <nav class="logo">
            <span title="World of Technology and more">
              AdvancedTechAcademy
            </span>
          </nav>
          <h1>
            welcome to <br />
            <span>Advanced Tech Academy</span>
          </h1>
          <p>Be among the first to explore our well analysed courses</p>
          <button class="primary-btn" @click="startRegistration()">
            start registration
          </button>
          <router-link to="/" class="hroute">back home</router-link>
          <footer>
            <i class="fa-solid fa-copyright"></i>Advancedtechacademy_2022
          </footer>
        </div>
      </div>
    </div>
    <div class="blur stepone" v-if="stepOne"></div>
    <div class="step1" v-if="stepOne">
      <button class="close" @click="close()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h3>
        Make sure you sign up first before getting to register<a href="/signup"
          >sign up</a
        >
      </h3>
      <div class="steps">
        <span class="current">step-1</span><span>step-2</span
        ><span>step-3</span>
      </div>
      <form>
        <div class="input">
          <label for="email">sign up Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            required
          />
        </div>
        <div class="input">
          <label for="password"> sign up password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            required
          />
        </div>
        <button type="submit">next</button>
      </form>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import Header from "./header.vue";
export default {
  name: "Register",
  components: {
    Header,
  },
  setup() {
    let stepOne = ref(false);

    const startRegistration = () => {
      stepOne.value = true;
    };

    const close = () => {
      stepOne.value = false;
    };

    return { stepOne, startRegistration, close };
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
$col: #3d566f;
$adminCol: rgb(21, 55, 101);
main {
  width: 100vw;

  .landing-page {
    height: 100vh;
    background: url(../assets/group.jpeg);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .blur {
      opacity: 0.6;
    }

    .left-content {
      // position: relative;
      width: 35%;
      height: 100%;
      background: url(../assets/register-background.jpeg) no-repeat fixed;
      background-size: cover;
      background-position-y: bottom;

      h1 {
        color: white;
        padding: 20px;
        font: 700 40px "Poppin", sans-serif;
      }

      li {
        width: 100%;
        height: fit-content;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        i {
          width: 60px;
          height: 60px;
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          padding: 10px;
          color: $col;
          border-radius: 7px;
        }

        p {
          color: white;
          width: 78%;
          text-align: left;
          font: 600 25px "Poppins", sans-serif;
        }
      }
    }

    .right-content {
      width: 65%;
      height: 100%;
      background: white;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      // z-index: 1;

      .c1 {
        width: 100%;
        height: 61vh;
        border-radius: 30%;
        position: absolute;
        left: 0;
        top: 17%;
        box-shadow: 0 -3px 1.5px 1px $fallback;
        background: $col;
        opacity: 0.5;
      }

      .c2 {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        position: absolute;
        bottom: 5%;
        right: 10%;
        // background: $SecondaryColor;
      }

      .logo {
        width: fit-content;
        height: 90px;
        margin: 20px auto;
        border-radius: 0 0 10px 10px;
        cursor: pointer;

        span {
          display: flex;
          box-shadow: 0 2px 1px 1px rgb(200, 200, 200);
          border-radius: 10px 0 10px 0;
          padding: 10px;
          font: 700 40px "Nunito Sans", sans-serif;
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

    .title {
      width: 100%;
      height: fit-content;
      margin: auto;
      h1 {
        padding: 20px;
        margin-top: 50px;
        color: $col;
        font: 500 25px "Poppins", sans-serif;

        span {
          color: $col;
          font: 700 30px "Jacques Francois Shadow", cursive;
        }
      }
      button {
        width: 350px;
        text-transform: capitalize;
        height: 60px;
        color: white;
        border-radius: 7px;
        margin-top: 35px;
        font: 600 20px "Poppins", sans-serif;

        &:hover {
          background: $SecondaryColor;
          border: none;
        }
      }

      .hroute {
        text-decoration: none;
        text-transform: capitalize;
        color: rgb(156, 154, 154);
        padding: 10px;

        &:hover {
          text-decoration: underline;
          transform: scale(0.9);
        }
      }
      footer {
        margin-top: 40px;
        margin-bottom: 0;
      }
    }
  }

  .stepone {
    opacity: 0.8;
  }

  .step1 {
    width: 550px;
    height: 500px;
    background: white;
    padding: 20px;
    position: fixed;
    top: 6vh;
    left: 27vw;
    z-index: 1;
    border-radius: 5px;
    padding: 30px;

    .close {
      border: none;
      background: transparent;
      margin-right: 20px;
      display: block;
      height: 30px;
      width: 50px;
      height: 40px;
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 30px;
      font-weight: 700;
    }

    h3 {
      padding: 10px;
      padding-top: 20px;
      font-size: 20px;

      a {
        margin-left: 15px;
        color: rgb(184, 157, 2);
      }
    }

    .steps {
      width: 80%;
      margin: 15px auto;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      span {
        font: 600 23px "Nunito sans", sans-serif;
        color: rgb(180, 178, 178);
      }
      .current {
        color: rgb(7, 143, 71);
      }
    }

    form {
      width: 85%;
      height: 65%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .input {
        width: 100%;
        height: fit-content;

        label {
          text-transform: capitalize;
          display: block;
          padding-bottom: 5px;
          text-align: left;
          padding-left: 15px;
          font-size: 20px;
          font-weight: 600;
        }
        input {
          width: 100%;
          height: 50px;
          padding: 3px 10px 3px 20px;
          border: none;
          background: rgb(242, 242, 242);
          border-radius: 30px;
          outline: none;
        }
      }
      button {
        width: 100%;
        height: 50px;
        border-radius: 30px;
        border: none;
        background: $fallback;
        color: white;
        font: 600 23px "Poppins", sans-serif;
        text-transform: capitalize;
      }
    }
  }
}
</style>
