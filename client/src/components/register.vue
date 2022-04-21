<template>
  <main>
    <div class="landing-page" v-if="startProcess">
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
    <div class="step1" v-if="stepOne">
      <h1>
        register now! <br />
        <a href="/">Home</a>
      </h1>
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
    let startProcess = ref(true);
    let stepOne = ref(false);

    const startRegistration = () => {
      startProcess.value = false;
      stepOne.value = true;
    };

    return { startProcess, stepOne, startRegistration };
  },
};
</script>

<style lang="scss" scoped>
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

  .step1 {
    width: 100%;
    height: 100vh;
    background: rgb(231, 231, 231);
    padding: 10px;
  }
}
</style>
