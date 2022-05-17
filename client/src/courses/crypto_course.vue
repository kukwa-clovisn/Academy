<template>
  <main>
    <div class="crypto-courses" v-if="crypto.courses">
      <h2>Learn cryptocurrency today!</h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse1()">
          <div class="video">
            <img src="../assets/lap.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>How to use Binance smart phone App</h3>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse2()">
          <div class="video">
            <img src="../assets/trust-wallet.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>How to use trust wallet smart phone App</h3>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse3()">
          <div class="video">
            <img src="../assets/crypto.jpeg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>Cryptocurrency for beginners <br />what is crypto??</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse4()">
          <div class="video">
            <img src="../assets/crypto.jpeg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>How to invest in cryptocurrency and why</h3>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse5()">
          <div class="video">
            <img src="../assets/phone-a.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>Five(5) free crypto apps to use</h3>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse6()">
          <div class="video">
            <img src="../assets/phone-c.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>How to buy and hold coins for long using bitrue</h3>

            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="crypto.course1">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <h1>How to use Binance smart phone App</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a1"><span>1</span> Account settings</a>
        </li>
        <li>
          <a href="#a2"><span>2</span> settings and security</a>
        </li>
        <li>
          <a href="#a3"><span>3</span> wallet overview</a>
        </li>
        <li>
          <a href="#a4"><span>4</span> Deposite, withdrawal and transfer</a>
        </li>
        <li>
          <a href="#a5"><span>5</span> buy and sell cryptocurrencies</a>
        </li>
        <li>
          <a href="#a6"><span>6</span>convert cryptocurrencies</a>
        </li>
        <li>
          <a href="#a7"><span>7</span>trade market(spot trading)</a>
        </li>
        <li>
          <a href="#a4"><span>8</span> Binane coin staking(Binance earn)</a>
        </li>
      </ul>
      <h2 id="a1">
        <span>1.</span> How to have binance installed in your mobile phone
      </h2>
      <p>
        Carrying out this tutorial you need to have an android or at least a
        smart phone that can accesss the playstore and also run some internet
        operations without any problem.
      </p>
      <p>
        To install the binance app on your smart phone, get to your phone and
        head straight to the playstore in your smart phone and next your search
        "Binance app" you will find many different options or choices of the
        binance app to download you download the verified version of the Binance
        app and hit install and thats pretty all for the installation process.
        <br />
        After the app has been installed, you hit open and it'll take you
        directly to the binance app.
      </p>
      <p>
        Now if you're already a binance user, then you don't need to go about
        reinstalling it again if you already have it installed.
      </p>
      <h2 id="a2"><span>2.</span> Creating a Binance account</h2>
      <p>
        Now after the installation process have been successfully completed, you
        need to have an account a Binance account so to create one you follow
        the steps outlined below to become a Binance user.
      </p>
      <div class="video">
        <iframe
          width="560"
          height="auto"
          src="https://www.youtube.com/embed/pEPLLQToLxU"
          title="Binance for beginners on mobile(phone)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Binance on smart Phone App tutorial<sup>*</sup></p>
      <Contact />
    </div>
    <div class="single-tutorial course-2" v-if="crypto.course2">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <h1>how to use the Binance app on mobile(Phone)</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#b1"><span>1</span> setup and security</a>
        </li>
        <li>
          <a href="#b2"><span>2</span>tokens tab</a>
        </li>
        <li>
          <a href="#b3"><span>3</span>send and receive tokens</a>
        </li>
        <li>
          <a href="#b4"><span>4</span>buy cryptocurrencies</a>
        </li>
        <li>
          <a href="#b5"><span>5</span>finance tab and staking</a>
        </li>
        <li>
          <a href="#b6"><span>6</span>How to swap and exchange coins</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BdWCVKINwKc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course3">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <h1>Cryptocurrency for Beginners</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c1"><span>1</span> what are cryptocurrencies</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>relation with out systems</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1YyAzVmP9xQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course4">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <h1>
        How to invest in Cryptocurrencies and why invest in cryptocurrencies
      </h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#d1"><span>1</span> cryptocurrencies</a>
        </li>
        <li>
          <a href="#d2"><span>2</span>how to invest</a>
        </li>
        <li>
          <a href="#d3"><span>2</span>risk in crypto</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iFIqffaaSH8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course5">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <h1>
        How to invest in Cryptocurrencies and why invest in cryptocurrencies
      </h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#e1"><span>1</span> phemex</a>
        </li>
        <li>
          <a href="#e2"><span>2</span>Binance</a>
        </li>
        <li>
          <a href="#e3"><span>2</span>kucoin</a>
        </li>
        <li>
          <a href="#e3"><span>2</span>bybit</a>
        </li>
        <li>
          <a href="#e3"><span>2</span>FTX exchange</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QZsZ__9CKlI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course6">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <h1>How to buy and hold coins for long with bitrue</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#f1"><span>1</span> bitrue app</a>
        </li>
        <li>
          <a href="#f2"><span>2</span>overview</a>
        </li>
        <li>
          <a href="#f3"><span>2</span>how to buy coins in bitrue</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mLyffo89BSs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import Contact from "../components/contact.vue";
export default {
  name: "Crypto_course",
  components: {
    Contact,
  },
  setup() {
    let crypto = reactive({
      courses: true,
      course1: false,
      course2: false,
      course3: false,
      course4: false,
      course5: false,
      course6: false,
    });

    function backToCourses() {
      crypto.courses = true;
      crypto.course1 = false;
      crypto.course2 = false;
      crypto.course3 = false;
      crypto.course4 = false;
      crypto.course5 = false;
      crypto.course6 = false;
    }

    const getCourse1 = () => {
      crypto.courses = false;
      crypto.course1 = true;
    };

    const getCourse2 = () => {
      crypto.courses = false;
      crypto.course2 = true;
    };

    function getCourse3() {
      crypto.courses = false;
      crypto.course3 = true;
    }

    function getCourse4() {
      crypto.courses = false;
      crypto.course4 = true;
    }

    function getCourse5() {
      crypto.courses = false;
      crypto.course5 = true;
    }

    function getCourse6() {
      crypto.courses = false;
      crypto.course6 = true;
    }

    return {
      crypto,
      backToCourses,
      getCourse1,
      getCourse2,
      getCourse3,
      getCourse4,
      getCourse5,
      getCourse6,
    };
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

main {
  width: 100%;
}

.crypto-courses {
  width: 100%;
  height: fit-content;
  padding: 20px;
  padding-top: 30px;
  background: white;
  z-index: 0.4;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-top: 50px;
  }

  h2 {
    text-transform: capitalize;
    padding: 30px 20px;
    font: 600 50px "Poppins", sans-serif;
  }

  h4 {
    text-transform: capitalize;
    padding: 20px;
    font: 500 30px "Poppins", sans-serif;
  }

  ul {
    width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px auto;
    position: relative;

    .blur {
      display: none;
    }

    .list {
      width: 40%;
      position: relative;
      padding: 20px;

      li {
        list-style-type: square;
        text-align: left;
        height: 50px;
        margin-bottom: 5px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          color: $SecondaryColor;
          transform: scale(1.1);
        }
      }
    }
    .img {
      width: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      background: url(../assets/phone-a.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: scroll;

      .blur {
        display: block;
        opacity: 0.9;
      }

      .img {
        display: none;
      }

      .list {
        width: 95%;
        padding-left: 10px;
        li {
          color: $primaryColor;
          font-weight: 600;
        }
      }
    }
  }

  .courses {
    width: 90%;
    height: fit-content;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .tutorial {
      width: 450px;
      height: fit-content;
      margin-right: 40px;
      margin-bottom: 50px;
      border-radius: 7px;
      box-shadow: 0 0 2px 1px $col;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      .video {
        width: 100%;
        height: 190px;
        overflow: hidden;

        img {
          width: 100%;
          height: fit-content;
        }
      }

      .video-title {
        width: 100%;
        min-height: 200px;
        padding: 15px;
        padding-top: 35px;
        position: relative;
        background: $baseColor;

        .free-course {
          width: 60px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 5px;
          right: 0;
          color: $primaryColor;
          background: $SecondaryColor;
          border-radius: 10px 0 0 10px;
        }

        h3 {
          padding: 10px;
          font: 600 20px "Poppins", sans-serif;
          text-align: left;
          text-transform: capitalize;
          color: white;
        }

        button {
          width: 80%;
          height: 45px;
          margin: 10px auto;
          background: $SecondaryColor;
          color: $primaryColor;
          border: none;
          border-radius: 5px;
          text-transform: capitalize;
        }
      }

      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(0.9);
      }
    }

    @media screen and (max-width: 1172px) {
      justify-content: center;

      .tutorial {
        width: 90%;

        .video {
          height: fit-content;
        }

        .video-title {
          height: 300px;
          button {
            height: 55px;
          }
        }
      }
    }
  }
}

.single-tutorial {
  width: 100%;
  margin: 5px auto;
  height: fit-content;
  padding: 20px 0;
  background: white;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    position: relative;
    width: 95%;
    margin: auto;
  }

  .return {
    color: $tertiaryColor;
    text-decoration: none;
    padding: 10px;
    font: 600 20px "Poppins", sans-serif;
  }

  h1 {
    padding: 20px;
    margin: 30px auto;
    margin-top: 80px;
    font: 800 50px "Nunito Sans", "Poppins", sans-serif;
    text-transform: uppercase;
  }

  h2 {
    font: 600 25px "Nunito sans", sans-serif;
    text-transform: capitalize;
    text-align: left;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 100%;
      background: $SecondaryColor;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  h3 {
    text-transform: capitalize;
    font: 600 30px "Poppins", sans-serif;
    text-align: left;
    padding: 10px;
    color: white;
  }

  h4 {
    font: 600 19px "Poppins", sans-serif;
    padding: 10px;
  }

  h5 {
    font: 600 25px "Nunito sans", sans-serif;
    text-align: left;
  }

  p {
    font: 400 16px "Poppins", sans-serif;
    text-align: left;
    padding: 10px;
    padding-left: 30px;
    line-height: 30px;
  }

  ul {
    width: 100%;
    padding: 20px;
    background: $baseColor;

    li {
      list-style-type: none;
      height: 50px;
      margin-bottom: 10px;

      a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        text-align: left;
        color: $primaryColor;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      span {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        border-radius: 100%;
        background: $tertiaryColor;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .pic {
    width: 100%;
    height: 100vh;
    padding: 10px;
    background: url(../assets/lap.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    position: relative;

    h1 {
      position: relative;
      color: $primaryColor;
    }
    h3 {
      text-align: center;
      position: relative;
    }
    p {
      text-align: center;
      position: relative;
      color: $primaryColor;
    }
  }

  .video {
    width: 100%;
    height: fit-content;
    margin: 60px auto;
    margin-bottom: 20px;

    iframe {
      width: 90%;
      height: 80vh;
      margin: auto;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 10px;

    h1 {
      font-size: 30px;
    }
  }
}
</style>
