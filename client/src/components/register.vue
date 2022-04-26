<template>
  <main>
    <div class="landing-page">
      <div class="blur"></div>
      <header><img src="../assets/logo-w.jpeg" alt="" /></header>
      <div class="title">
        <h1>
          welcome to <br />
          <span>Advanced crypto & forex trading community</span>
        </h1>
        <p>Be among the first to explore our well analysed courses</p>
        <button class="primary-btn" @click="startRegistration()">
          start registration
        </button>
        <router-link to="/" class="hroute">back home</router-link>
      </div>
    </div>
    <div class="blur stepone" v-if="stepOne"></div>
    <div class="step1" v-if="stepOne">
      <button class="close"><i class="fa-solid fa-xmark"></i></button>
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
          <input type="email" name="email" id="email" placeholder="Email..." />
        </div>
        <div class="input">
          <label for="password"> sign up password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
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

    return { stepOne, startRegistration };
  },
};
</script>

<style lang="scss" scoped>
$fallback: rgb(19, 37, 62);
main {
  width: 100vw;

  .landing-page {
    background: url(../assets/group.jpeg);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    header {
      width: 150px;
      height: 100px;
      margin: 30px auto;
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
    }
    .title {
      width: 90vw;
      margin: auto;
      top: 0;

      h1 {
        padding-top: 5px;
      }
      button {
        width: 300px;
        text-transform: capitalize;
        height: 55px;
        color: white;
        font: 600 20px "Poppins", sans-serif;
      }

      .hroute {
        text-decoration: none;
        text-transform: capitalize;
        color: rgb(156, 154, 154);

        &:hover {
          text-decoration: underline;
          transform: scale(0.9);
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
