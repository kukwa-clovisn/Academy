<template>
  <main>
    <div class="landing-page">
      <div id="blur"></div>
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
        <!-- <img src="../assets/ch1.png" id="homeImg" alt="crypto chart" /> -->

        <section>
          <h2>running animation here!</h2>
          <!-- <p>Get trusted signals for your trading</p>
        <div>
          <p>the future of Billionaires</p>
        </div> -->
        </section>
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
  }
}
</style>
