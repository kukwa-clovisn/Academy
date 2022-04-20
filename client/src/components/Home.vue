<template>
  <main>
    <div class="landing-page">
      <nav class="topNav">
        <a href="/">contact here</a>
        <a href="">email@gmail.com</a>
      </nav>
      <div id="blur"></div>
      <header>
        <nav class="logo-nav">
          <img src="../assets/logo-b.jpeg" id="logo" alt="logo image" />
        </nav>
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
    <div class="social-sample">
      <div class="left-content">
        <h2>Learning is quite fun</h2>
        <p>
          If you've come this far then you really are curious to learn know. Why
          not join the moving train now and start learning!!
        </p>
        <button>
          <router-link to="/signup" class="route">signup now</router-link>
        </button>
        <button>
          <router-link to="/login" class="route">signin</router-link>
        </button>
      </div>
      <div class="right-content">
        <!-- <img src="../assets/male.jpeg" alt="" /> -->
        <div class="img"><img src="../assets/group.jpeg" alt="" /></div>
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
    <div class="section-3">
      <h1>What is <span>BITCOIN</span>??</h1>
      <p>
        Bitcoin is a decentralized digital currency, without a central bank or
        single administrator, that can be sent from user to user on the
        peer-to-peer bitcoin network without the need for intermediaries.
        Transactions are verified by network nodes through cryptography and
        recorded in a public distributed ledger called a blockchain. The
        cryptocurrency was invented in 2008 by an unknown person or group of
        people using the name Satoshi Nakamoto. The currency began use in 2009
        when its implementation was released as open-source software. Bitcoins
        are created as a reward for a process known as mining. They can be
        exchanged for other currencies, products, and services. Bitcoin has been
        criticized for its use in illegal transactions, the large amount of
        electricity used by mining, price volatility, and thefts from exchanges.
        Some investors and economists have characterized it as a speculative
        bubble at various times
      </p>
      <h1>What is <span>cryptocurrency</span> ??</h1>
      <p>
        A cryptocurrency, crypto-currency, crypto, or coin is a digital currency
        designed to work as a medium of exchange through a computer network that
        is not reliant on any central authority, such as a government or bank,
        to uphold or maintain it. Individual coin ownership records are stored
        in a digital ledger, which is a computerized database using strong
        cryptography to secure transaction records, to control the creation of
        additional coins, and to verify the transfer of coin ownership. Despite
        their name, cryptocurrencies are not considered to be currencies in the
        traditional sense and while varying treatments have been applied to
        them, including classification as commodities, securities, as well as
        currencies, cryptocurrencies are generally viewed as a distinct asset
        class in practice. Some crypto schemes use validators to maintain the
        cryptocurrency. In a proof-of-stake model, owners put up their tokens as
        collateral
      </p>
    </div>
    <div class="illustration-1">
      <Carousel />
      <div class="blur"></div>
      <div class="illustration-content">
        <h1>Want to learn....</h1>
        <ul>
          <li>how to be a profitable trader??</li>
          <li>web development</li>
          <li>graphic design</li>
        </ul>
        <button>
          <router-link to="/signup" class="route"
            ><i class="fa fa-arrow-right" id="illustration-icon"></i> sign up
            and Register</router-link
          >
        </button>
      </div>
    </div>
    <div class="courses-div">
      <div class="blur"></div>
      <h1>courses & services</h1>
      <p>
        Find out the best and outstanding courses in the area of your choice
        with the best and experienced instructors online. Also get online
        mentorship for your course of choice
      </p>

      <section class="courses">
        <div class="course">
          <div class="course-img">
            <img src="../assets/ch1.png" alt="" />
          </div>

          <h3>one month</h3>
          <h5>Learn about crypto & Forex</h5>
          <p>
            Start from a newbie into becomimg a profitable crypto trader in less
            than no time. <br />
            Register now to start your lessons
          </p>
          <button>
            <router-link to="/register" class="route"
              >Register now!</router-link
            >
          </button>
        </div>
        <div class="course">
          <div class="course-img">
            <img src="../assets/web-dev.jpg" alt="" />
          </div>

          <h3>six months</h3>
          <h5>Learn web development</h5>
          <p>
            Have you ever thought of learning web development and it seems hard?
            here we have everything made easy for you. <br />
            register now to start your lessons
          </p>
          <button>
            <router-link to="/register" class="route"
              >register now!</router-link
            >
          </button>
        </div>
        <div class="course">
          <div class="course-img">
            <img src="../assets/graphic-design.jpg" alt="" />
          </div>

          <h3>one month</h3>
          <h5>learn graphic design</h5>
          <p>
            Learn phone and computer design and how to use design apps in less
            than a month. <br />
            register now to start your lessons
          </p>
          <button>
            <router-link to="/register" class="route"
              >register now!</router-link
            >
          </button>
        </div>
      </section>
    </div>
    <div class="contact-form">
      <h1>get in touch!</h1>
      <h6>
        We deal and handle many businesses that will interest you. Check out our
        list of services we offer...
      </h6>
      <div class="contact-header">
        <nav>
          <i class="fa-brands fa-whatsapp icon"></i>
          <p>+237682449347</p>
        </nav>
        <nav>
          <i class="fa-solid fa-phone icon"></i>
          <p>+237682449347</p>
        </nav>
        <nav>
          <i class="fa-solid fa-envelope icon"></i>
          <p>kukwaclovisngong3@gmail.com</p>
        </nav>
      </div>
      <form action="post">
        <h2>contact us!</h2>
        <div class="top-form">
          <div class="credentials">
            <div class="input">
              <label for="name">Name:</label>
              <div class="input-field">
                <i class="fa-regular fa-user"></i
                ><input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name..."
                  required
                />
              </div>
            </div>
            <div class="input">
              <label for="email">email:</label>
              <div class="input-field">
                <i class="fa-solid fa-envelope icon"></i
                ><input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email.."
                  required
                />
              </div>
            </div>
            <div class="input">
              <label for="phone">Phone:</label>
              <div class="input-field">
                <i class="fa-solid fa-mobile-screen-button"></i
                ><input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone number..."
                  required
                />
              </div>
            </div>
          </div>
          <div class="message">
            <label for="message">message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message here!"
              required
            ></textarea>
          </div>
        </div>
        <div class="bottom-form">
          <h3>services</h3>
          <div class="form-services">
            <div class="service"><span>web developement</span></div>
            <div class="service"><span>graphic design</span></div>
            <div class="service"><span>crypto & forex</span></div>
          </div>
        </div>
        <div class="btns">
          <button type="reset">
            <i class="fa-solid fa-ban"></i>
            <span>cancel</span>
          </button>
          <button type="submit">
            <i class="fa-regular fa-paper-plane"></i> <span>send message</span>
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import Carousel from "./carousel.vue";
export default {
  name: "Home",
  components: { Carousel },
};
</script>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease;
}

.blur {
  width: 100%;
  height: 100%;
  background: rgb(59, 59, 59);
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
}

.landing-page-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: linear-gradient(to right, rgb(2, 49, 102), rgb(58, 141, 235));
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

      &:last-child {
        width: 32vw;
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
        font-size: 18px;
      }

      button.clear {
        background: transparent;
        border: 1px solid rgb(245, 248, 250);

        .homeBtn {
          color: white;
        }
      }
    }
    .logo-nav {
      width: 10vw;
      background: transparent;

      #logo {
        width: 105px;
        height: auto;
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

.social-sample {
  width: 80vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 20px 5px;
  .left-content {
    width: 40%;

    h2 {
      padding: 10px;
    }
    p {
      padding: 10px;
    }
    button {
      width: 200px;
      height: 45px;
      border-radius: 3px;
      display: block;
      margin: 10px auto;
      border: none;
      background: rgba(230, 101, 129, 1);
      .route {
        text-decoration: none;
        text-transform: capitalize;
        color: white;
      }
    }
  }

  .right-content {
    width: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 400px;
      height: 400px;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}

.section-2 {
  width: 100vw;
  height: fit-content;
  padding: 50px 10px;
  position: relative;

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

.section-3 {
  width: 85vw;
  margin: auto;
  height: fit-content;
  padding: 20px 5px;

  h1 {
    padding: 30px 10px;
    font: 700 45px "Poppins", sans-serif;

    span {
      color: rgb(58, 141, 235);
    }
  }

  p {
    padding: 0;
    font-family: serif;
    line-height: 30px;
    font-size: 19px;
  }
}

.illustration-1 {
  width: 100vw;
  height: 90vh;
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .illustration-content {
    width: 70vw;
    height: fit-content;
    position: relative;
    padding: 20px;
    // background: white;
    border-radius: 3px;
    opacity: 0.85;

    h1 {
      margin: auto;
      font: 800 50px "Poppins", sans-serif;
      padding: 10px;
      position: relative;
      color: rgb(213, 231, 251);
    }
    ul {
      width: 100%;
      height: fit-content;
      padding-left: 30px;

      li {
        list-style-type: square;
        text-align: left;
        padding: 10px 30px;
        font: 500 22px "Poppins", sans-serif;
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.4s ease;
        width: 500px;
        height: 50px;
        color: white;
        font-weight: 550;
        text-transform: capitalize;

        &:hover {
          text-align: center;
          border-radius: 3px;
          background: linear-gradient(
            to right,
            rgb(58, 141, 235),
            rgb(2, 54, 113)
          );
          color: white;
          transform: translateX(150px);
        }
      }
    }
    button {
      display: block;
      width: 300px;
      height: 60px;
      padding: 10px 20px;
      margin: 25px auto;
      position: relative;
      border-radius: 3px;
      background: rgb(58, 141, 235);
      border: none;

      .route {
        text-decoration: none;
        text-transform: capitalize;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 22px;
      }
    }
  }

  img {
    display: block;
    width: 80%;
    height: auto;
    margin: 10px auto;
  }
}

.courses-div {
  width: 100vw;
  height: fit-content;
  // background: url(../assets/logo-w.jpeg);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;

  h1 {
    padding: 10px;
    text-transform: capitalize;
    font: 800 35px "Poppins", sans-serif;
    position: relative;
    color: white;
  }

  p {
    width: 80vw;
    padding: 10px;
    padding-bottom: 40px;
    position: relative;
    margin: auto;
    color: white;
  }

  .courses {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90vw;
    padding: 10px;
    margin: auto;
    position: relative;

    .course {
      width: 31%;
      background: white;
      border-radius: 3px;

      .course-img {
        width: 100%;
        height: 180px;
        overflow: hidden;
        img {
          width: 100%;
          cursor: pointer;
        }
      }

      h3 {
        width: 95%;
        margin: auto;
        padding: 10px;
        color: rgba(230, 101, 129, 1);
        text-transform: capitalize;
        text-align: left;
      }

      h5 {
        width: 95%;
        font: 700 19px "Poppins", sans-serif;
        margin: auto;
        text-transform: capitalize;
        text-align: center;
      }
      p {
        padding: 5px;
        line-height: 25px;
        width: 90%;
        margin: auto;
        text-align: center;
        color: #3d566f;
        font: 500 14px "Poppins", sans-serif;
      }

      button {
        width: 85%;
        height: 50px;
        border-radius: 2px;
        margin: 10px auto;
        border: none;

        background: rgba(230, 101, 129, 1);
        .route {
          color: white;
          text-decoration: none;
          text-transform: capitalize;
          font: 600 18px "Poppins", sans-serif;
        }
      }
    }
  }
}

.contact-form {
  width: 100vw;
  height: fit-content;
  padding: 30px 5px 10px 5px;
  background: linear-gradient(
    to bottom right,
    rgba(11, 10, 67, 1),
    rgba(37, 109, 193, 1)
  );

  h1 {
    padding: 20px;
    padding-bottom: 10px;
    text-transform: capitalize;
    color: white;
  }

  h6 {
    color: rgb(194, 194, 194);
    padding: 10px;
    font: 400 13px "Poppins", sans-serif;
  }

  .contact-header {
    width: 850px;
    margin: 10px auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      width: 270px;
      height: 70px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      padding: 0;
      transition: all 0.3s ease;

      .icon {
        color: white;
      }
      p {
        padding: 0;
        color: rgb(219, 217, 217);
      }

      &:hover {
        border-radius: 5px;
        background: rgba(230, 101, 129, 1);
      }
    }
  }

  form {
    width: 900px;
    height: fit-content;
    background: white;
    margin: 10px auto;
    padding: 20px;
    border-radius: 3px;

    h2 {
      padding: 10px;
      text-transform: capitalize;
      width: 100%;
      text-align: center;
      color: rgba(22, 54, 123, 1);
    }

    .top-form {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .credentials {
        width: 48%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .input {
          width: 100%;
          height: 85px;

          label {
            text-align: left;
            text-transform: capitalize;
            display: block;
            color: rgba(22, 54, 123, 1);
            font: 700 18px "Poppins", sans-serif;
            width: 100%;
            padding: 2px 0 4px 0;
          }

          .input-field {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            background: rgba(255, 251, 251, 1);
            box-shadow: 0 0 0.5px 3px rgba(255, 251, 251, 1);

            i {
              width: 15%;
              height: 100%;
              color: rgba(25, 24, 81, 0.7);
            }
            input {
              width: 100%;
              height: 50px;
              display: block;
              border: none;
              background: inherit;
              color: rgba(22, 53, 123, 0.54);
              outline: none;
            }

            &:hover {
              background: white;
              border: 2px solid rgba(218, 121, 121, 1);

              i {
                color: rgba(218, 121, 121, 1);
              }
            }
          }
        }
      }
      .message {
        width: 48%;
        height: 300px;

        label {
          text-align: left;
          text-transform: capitalize;
          display: block;
          color: rgba(22, 54, 123, 1);
          font: 800 18px "Poppins", sans-serif;
          width: 100%;
          padding: 2px 0 4px 0;
        }
        textarea {
          display: block;
          width: 100%;
          height: 90%;
          padding: 10px 20px;
          border: none;
          background: rgba(255, 251, 251, 1);
          box-shadow: 0 0 0.5px 3px rgba(255, 251, 251, 1);
          border-radius: 3px;
          outline: none;

          &:hover {
            box-shadow: 0 0 0.5px 1px rgba(230, 101, 129, 1);
            background: white;
          }
        }
      }
    }

    .bottom-form {
      width: 95%;
      margin: auto;

      h3 {
        text-align: left;
        text-transform: capitalize;
        color: rgba(22, 54, 123, 1);
        font: 800 19px "Poppins", sans-serif;
        padding: 10px;
        padding-left: 0;
      }

      .form-services {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .service {
          width: 31%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          background: rgba(241, 245, 245, 1);
          cursor: pointer;

          span {
            text-transform: capitalize;
            color: rgba(22, 54, 123, 1);
            font: 500 16px "Poppins", sans-serif;
          }

          &:hover {
            box-shadow: 0 0 0.6px 2px rgba(230, 101, 129, 1);
            background: white;
            span {
              color: rgba(230, 101, 129, 1);
            }
          }
        }
      }
    }
    .btns {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      button {
        width: 47%;
        height: 60px;
        background: rgba(218, 121, 121, 1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        i {
          color: white;
          margin-right: 10px;
          font-size: 20px;
        }
        span {
          color: white;
          font: 500 18px "Poppins", sans-serif;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
