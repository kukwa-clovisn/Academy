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
        <h4>
          register to get access to our pro courses
          <i class="fa-solid fa-hand-point-right"></i>
        </h4>
      </div>
      <div class="right-content">
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="title">
          <nav class="logo">
            <img src="../assets/logo-white.jpg" alt="" />
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
  padding: 0;
  margin: 0;

  .landing-page {
    height: 100vh;
    overflow-y: scroll;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .blur {
      opacity: 0.7;
    }

    .left-content {
      // position: relative;
      width: 35%;
      height: 100%;
      background: url(../assets/register-background.jpeg) no-repeat fixed;
      background-size: cover;
      background-position-y: bottom;
      padding: 20px 5px 10px 10px;

      h1 {
        color: white;
        padding: 20px;
        font: 700 40px "Poppin", sans-serif;
        position: relative;
        border-bottom: 1px double rgb(221, 221, 221);
      }

      li {
        width: 100%;
        height: fit-content;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        position: relative;

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
          text-transform: capitalize;
        }

        &:hover {
          cursor: pointer;
          p {
            font-size: 20px;
          }
        }

        @media screen and (max-width: 960px) {
          i {
            font-size: 20px;
          }
          p {
            font-size: 15px;
            width: 65%;
          }
        }
      }

      h4 {
        position: relative;
        color: whitesmoke;
        margin-top: 40px;
        i {
          color: yellow;
        }
      }
    }

    .right-content {
      width: 65%;
      height: 100%;
      background: rgb(243, 247, 249);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      // z-index: 1;

      .c1 {
        width: 100%;
        height: 50vh;
        border-radius: 30%;
        position: absolute;
        left: 0;
        bottom: -2%;
        box-shadow: 0 -3px 1.5px 1px $fallback;
        background: $col;
        opacity: 0.2;
      }

      .logo {
        border: 3px solid red;
        width: 100%;
        height: 200px;
        margin: 20px auto;
        padding: 0;
        border-radius: 0 0 10px 10px;
        cursor: pointer;

        img {
          height: 100%;
        }
      }
    }

    .title {
      width: 100%;
      height: fit-content;
      margin: auto;
      h1 {
        padding: 20px;
        margin-top: 10px;
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
        color: $col;
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

    @media screen and (max-width: 821px) {
      flex-direction: column-reverse;
      padding: 0;
      justify-content: flex-end;
      height: fit-content;

      .left-content {
        width: 100%;
        height: 50vh;

        li {
          p {
            font-size: 20px;
          }
        }

        h4 {
          margin-top: 10px;
        }

        @media screen and (max-width: 450px) {
          height: fit-content;
        }
      }
      .right-content {
        width: 100%;
        padding-bottom: 25px;
        height: 50vh;
        margin: 0;
        .c1 {
          top: 0%;
          height: 50vh;
        }

        h1 {
          margin: 0;
        }

        @media screen and (max-width: 650px) {
          height: fit-content;
          .c1 {
            border-radius: 10%;
          }
        }
        @media screen and (max-width: 450px) {
          .c1 {
            height: 60vh;

            @media screen and (max-width: 410px) {
              height: 65vh;
            }
          }
          .logo span {
            font-size: 20px;
          }
          button {
            width: 95%;
          }

          @media screen and (max-width: 300px) {
            .logo span {
              font-size: 15px;
            }
            h1 {
              font-size: 20px;
              margin: 0;
            }
          }
        }
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
