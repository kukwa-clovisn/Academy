<template>
  <main>
    <div class="landing-page">
      <nav class="topNav">
        <a href="/">contact here</a>
        <a href="">email@gmail.com</a>
      </nav>
      <div id="blur"></div>
      <header>
        <nav>logo here!</nav>
        <nav>
          <router-link to="/" class="route">about</router-link>
          <router-link to="/" class="route">why crypto?</router-link>
          <router-link to="/" class="route">blog</router-link>
        </nav>
        <nav>
          <button class="landing-page-btn">
            <router-link to="/register" class="homeBtn">register</router-link>
          </button>
          <button class="clear landing-page-btn">
            <router-link to="/login" class="homeBtn">sign in</router-link>
          </button>
        </nav>
      </header>
      <div class="title">
        <h1>
          Advanced <br />
          crypto & forex Academy
        </h1>
        <p>
          this is a crypto trading website where you get to learn all about
          crypto currency and also how to trade with crypto and forex
        </p>
        <button class="landing-page-btn">
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
    <div class="section-1">
      <header>
        <h1>The World’s Largest And Fast Growing Technology</h1>
        <p>Be the first to assimilatete this wonderful technology</p>
      </header>
      <div class="content">
        <h2>Cryptocurrencies | Prices Today!</h2>
        <ul>
          <li>
            <span class="name">Bitcoin</span><span class="symbol">BTC</span
            ><span class="percentage">+1.00%</span>
            <span class="value">$40,290.18</span>
            <button class="landing-page-btn">
              <router-link to="#" class="homeBtn">trade</router-link>
            </button>
          </li>
          <hr />
          <li>
            <span class="name">ethereum</span><span class="symbol">eth</span
            ><span class="percentage">+2.34%</span>
            <span class="value">$3,074.30</span>
            <button class="landing-page-btn">
              <router-link to="#" class="homeBtn">trade</router-link>
            </button>
          </li>
          <hr />
          <li>
            <span class="name">dogecoin</span><span class="symbol">doge</span
            ><span class="percentage">+3.46%</span>
            <span class="value">$0.142228</span>
            <button class="landing-page-btn">
              <router-link to="#" class="homeBtn">trade</router-link>
            </button>
          </li>
          <hr />
          <li>
            <span class="name">polkadot</span><span class="symbol">dot</span
            ><span class="percentage">+3.24%</span>
            <span class="value">$17.96</span>
            <button class="landing-page-btn">
              <router-link to="#" class="homeBtn">trade</router-link>
            </button>
          </li>
          <hr />
          <li>
            <span class="name">cardano</span><span class="symbol">ada</span
            ><span class="percentage">+3.14%</span>
            <span class="value">$0.964214</span>
            <button class="landing-page-btn">
              <router-link to="#" class="homeBtn">trade</router-link>
            </button>
          </li>
          <hr />
        </ul>
      </div>
    </div>
    <div class="section-2">
      <h2>Ever wondering how Cryptocurrencies work?</h2>
      <p>
        cryptocurrencies are decentralized and monitized currencies which
        function as money online with no liquid value
      </p>
      <div class="video-div">
        <div class="btc">
          <img src="../assets/bitcoin.png" alt="" />
          <h3>Bitcoin</h3>
          <p>Digital decentralized currency</p>
        </div>

        <div class="video">
          <iframe
            width="545"
            height="300"
            src="https://www.youtube.com/embed/rYQgy8QDEBI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease;
}
.landing-page-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: rgb(10, 109, 221);
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
main {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.landing-page {
  width: 100vw;
  height: 100vh;
  background: url(../assets/team.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;

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
      color: white;
      text-decoration: none;
      font-size: 13px;
    }
  }

  header {
    width: 100%;
    padding: 0 20px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 40vw;
      height: 100%;

      &:first-child {
        width: 20vw;
        border: 1px solid white;
        color: white;
      }

      &:last-child {
        width: 26vw;
      }

      .route {
        width: 150px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
      }

      button.clear {
        background: transparent;
        border: 1px solid rgb(245, 248, 250);

        .homeBtn {
          color: white;
        }
      }
    }
  }

  .title {
    width: 100%;
    height: 83vh;
    position: relative;
    padding: 20px;
    top: 20px;

    h1 {
      text-transform: capitalize;
      font: 800 50px "Poppins", sans-serif;
      color: white;
      padding: 10px;
      padding-top: 75px;
    }

    p {
      font: 500 13px "Poppins", sans-serif;
      color: white;
    }

    button {
      width: 200px;
      height: 50px;
      margin: 30px auto;
      margin-bottom: 5px;

      .homeBtn {
        animation: blink 1.7s infinite alternate forwards;
      }
      &:hover {
        background: transparent;
        border: 1px solid white;
      }
      @keyframes blink {
        from {
          left: 0;
          opacity: 1;
        }
        to {
          left: 60vw;
          opacity: 0.3;
        }
      }
    }

    section {
      width: 100%;
      height: auto;
      display: block;
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      animation: run 2s linear infinite alternate forwards;
    }
  }

  @keyframes run {
    from {
      left: 0;
      opacity: 1;
    }
    to {
      left: 60vw;
      opacity: 0;
    }
  }

  #blur {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: black;
  }
}

.section-1 {
  width: 100vw;
  height: fit-content;

  header {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background: linear-gradient(to bottom right, black, rgba(36, 107, 190, 1));

    h1 {
      width: 90%;
      margin: auto;
      padding: 10px;
      padding-bottom: 0;
      font: 800 60px "Poppins", sans-serif;
      // text-align: right;
      // color: white;
    }

    p {
      width: 90%;
      margin: auto;
      // text-align: right;
      padding: 10px;
      padding-top: 0;
      // color: whitesmoke;
    }
  }

  .content {
    width: 100%;
    h2 {
      padding: 20px;
      text-transform: capitalize;
      font: 600 35px "Poppins", sans-serif;
      background: linear-gradient(
        to bottom,
        rgba(14, 180, 16, 1),
        rgba(129, 115, 46, 1)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ul {
      width: 80vw;
      height: fit-content;
      margin: auto;

      li {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        .name,
        .symbol,
        .percentage,
        .value {
          text-align: left;
          width: 20%;
          font-weight: 600;
        }

        .name {
          text-transform: capitalize;
          font-weight: 600;
          color: rgba(129, 115, 46, 1);
        }
        .symbol {
          text-transform: uppercase;
        }

        .percentage {
          color: rgb(3, 177, 174);
        }
      }
    }
  }
}

.section-2 {
  width: 100vw;
  height: 100vh;
  padding-top: 20px;

  h2 {
    padding: 10px;
    font: 700 30px "Poppins", sans-serif;
  }
  p {
    width: 85vw;
    margin: auto;
    line-height: 30px;
    font: 500 17px "Poppins", sans-serif;
    padding: 10px;
    word-spacing: 2px;
  }

  .video-div {
    width: 90vw;
    margin: 30px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .btc {
      width: 30%;
      height: fit-content;

      h3 {
        color: rgb(5, 50, 173);
      }

      p {
        color: rgb(3, 55, 123);
        width: 100%;
      }
    }

    img {
      display: block;
      width: 300px;
      height: auto;
      transform: rotateZ(7deg);
    }
  }

  .video {
    width: 70vw;
    height: 80vh;
    margin: auto;
    background: url(../assets/blank-c.jpg);
    background-size: 575px 440px;
    background-repeat: no-repeat;
    background-attachment: scroll;
    position: relative;
    left: 100px;
    top: 100px;
    transform: rotateZ(10deg);
    iframe {
      position: absolute;
      top: 12.5px;
      left: 17px;
    }
  }
}
</style>
