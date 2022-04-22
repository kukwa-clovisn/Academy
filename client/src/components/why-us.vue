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
        <h1 class="title-head">why choose Crypto & Forex??</h1>
        <button class="primary-btn">
          <router-link to="/signup" class="homeBtn">sign up</router-link>
        </button>
      </div>
    </div>
    <div class="why-us">
      <h1>importance and future of Cryptocurrencies and trading</h1>
      <div class="logo-display">
        <div class="left-content">
          <img src="../assets/logo-w.jpeg" alt="crypto & forex" />
        </div>
        <div class="right-content">
          <h3>The future of Billionaires lies in the digital economy</h3>
          <p>
            In as much as the digital economy is taking over, the world finds it
            safer and more trusthworthy having its value online. Many reasons
            will encourage or push you not to be left out in this growing
            economy but before you start invest in yourself and learn more about
            this wind that is taking over the atmosphere.
          </p>
          <button>
            <router-link to="/signup" class="route">start learning</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="div-flex">
      <div class="div-flex-content">
        <div class="head">
          <img src="../assets/logo-w.jpeg" alt="" />
        </div>
        <div class="bottom">
          <h3>realibility</h3>
          <p>
            most realiable source of income. Still stand despite of wars or any
            societal changes
          </p>
        </div>
      </div>
      <div class="div-flex-content">
        <div class="head">
          <img src="../assets/logo-w.jpeg" alt="" />
        </div>
        <div class="bottom">
          <h3>sustainability</h3>
          <p>
            most realiable source of income. Still stand despite of wars or any
            societal changes
          </p>
        </div>
      </div>
      <div class="div-flex-content">
        <div class="head">
          <img src="../assets/logo-w.jpeg" alt="" />
        </div>
        <div class="bottom">
          <h3>uniqueness</h3>
          <p>
            most realiable source of income. Still stand despite of wars or any
            societal changes
          </p>
        </div>
      </div>
    </div>
    <div class="illustration">
      <h3>why you should invest in crypto & forex!</h3>
      <p>
        Many reasons will push you to really want to start investing in the
        world of crypto & forex. Go through the points below and you'll find a
        reason why you must invest in this economy
      </p>
      <ul>
        <div class="list-item">
          <li>realiability</li>
          <dl>
            Crypto & Forex markets are very reliable because this is a system
            that is not owned or controlled by any Government or institution so
            the decision or choice of any Government or institution can not stop
            the market from operating. <br />In times of wars and all soughts of
            natural disaster, the market still works and functions 100% with no
            disturbance
          </dl>
        </div>
        <div class="list-item">
          <li>longetivity</li>
          <dl>
            Crypto & Forex markets are very reliable because this is a system
            that is not owned or controlled by any Government or institution so
            the decision or choice of any Government or institution can not stop
            the market from operating. <br />In times of wars and all soughts of
            natural disaster, the market still works and functions 100% with no
            disturbance
          </dl>
        </div>
        <div class="list-item">
          <li>accessibility</li>
          <dl>
            One hinderance that people always have with businesses, investsments
            and other platforms is the accessibility hinderance. The good news
            about the crypto and forex economy is that is guarantees you work
            from home, and you can access it from any android device be it smart
            phone and all digital devices like computers, smart tvs and more.
            Having access to the crypto space is open wherever as long as you
            have an internet connection so there's no need passing through an
            office or a middle man to have access to your portfolio and account.
          </dl>
        </div>
        <div class="list-item">
          <li>freedom</li>
          <dl>
            Crypto & Forex markets are very open to anyone of any age size, sex,
            country or location. Being in the crypto space is open to even a
            baby born just today and to a man of 100years and its an economy
            that you get in and out whenever you like and wherever you like
            however you like. No restrictions to whether disable or not rich or
            poor no language bariers or color barier but open to anyone who is
            interested in investing in the future. <br />
            One most unique characteristic of the crypto and forex market is
            that it is open to anyone and anyone at anytime can change or relate
            the way the one without having to go through any permission or
            whatever.
          </dl>
        </div>
      </ul>
    </div>
    <div class="why-learn">
      <h3>why learn from us??</h3>
    </div>
  </main>
</template>

<script>
import Header from "./header.vue";
export default {
  name: "Why-us",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$primeColor: rgb(218, 121, 121);
$baseColor: #072e54;
main {
  width: 100vw;

  .landing-page {
    background: url(../assets/learn.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

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

  .why-us {
    width: 90vw;
    margin: auto;
    padding: 20px;

    h1 {
      font: 700 45px "Poppins", sans-serif;
      text-transform: capitalize;
      padding: 20px;
      @media screen and (max-width: 650px) {
        font-size: 30px;
      }
    }

    .logo-display {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .left-content {
        width: 40%;
        height: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
        }
      }
      .right-content {
        height: 100%;
        width: 60%;

        h3 {
          font: 600 23px "Poppins", sans-serif;
          padding: 10px;
        }

        button {
          width: 250px;
          height: 45px;
          border: none;
          background: transparent;
          box-shadow: 0 0 0.6px 2px $primeColor;
          margin: 20px auto;
          border-radius: 5px;

          .route {
            text-decoration: none;
            font: 600 14px "Poppins", sans-serif;
            color: $primeColor;
            text-transform: capitalize;
          }
        }
      }
      @media screen and (max-width: 715px) {
        .left-content {
          display: none;
        }
        .right-content {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 768px) {
      width: 100vw;
    }
  }

  .div-flex {
    width: 80vw;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;

    .div-flex-content {
      width: 300px;
      height: fit-content;

      .head {
        width: 100%;
        height: 190px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
      .bottom {
        width: 100%;
        padding: 10px;

        h3 {
          text-transform: capitalize;
          padding: 5px;
          font: 600 25px "Poppins", sans-serif;
        }
      }
      @media screen and (max-width: 800px) {
        width: 100vw;
        margin-top: 20px;

        .head {
          img {
            width: 70%;
          }
        }
      }
    }
  }

  .illustration {
    width: 80vw;
    margin: auto;
    padding: 20px;

    h3 {
      font: 600 30px "Poppins", sans-serif;
      padding: 10px;
      text-transform: capitalize;
    }

    ul {
      width: 100%;
      padding: 10px;

      .list-item {
        width: 100%;
        height: fit-content;
        margin: 40px auto;

        li {
          list-style-type: none;
          text-transform: uppercase;
          font: 700 30px "Poppins", sans-serif;
          text-align: left;
        }

        dl {
          width: 98%;
          background: rgb(241, 241, 241);
          padding: 20px;
          border-radius: 3px;
        }
      }
    }
  }

  .why-learn {
    width: 80vw;
    margin: auto;
    padding: 20px;

    h3 {
      font: 600 30px "Poppins", sans-serif;
      padding: 10px;
      text-transform: capitalize;
    }
  }
}
</style>
