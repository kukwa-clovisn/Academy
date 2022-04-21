<template>
  <main>
    <div class="landing-page">
      <div class="blur"></div>
      <Header />
      <div class="title">
        <h1>
          Advanced <br />
          crypto & forex community
        </h1>
        <p>
          this is a crypto trading website where you get to learn all about
          crypto currency and also how to trade with crypto and forex
        </p>
        <button class="primary-btn">
          <router-link to="/signup" class="homeBtn">sign up</router-link>
        </button>
        <h1 class="title-head">our blog stats</h1>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./header.vue";
export default {
  name: "Blog",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
main {
  .landing-page {
    background: url(../assets/learn-b.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .title {
      top: 50px;

      h1 {
        padding: 30px;
        padding-bottom: 10px;
      }
      .title-head {
        text-transform: uppercase;
        color: rgb(222, 221, 221);
        font: 600 30px "Poppins", sans-serif;
      }
    }
  }
}
</style>
