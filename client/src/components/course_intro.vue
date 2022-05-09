<template>
  <main>
    <header v-if="crypto.showCourseIntro">
      <nav class="logo">
        <span>AC <i>& </i>FC</span>
      </nav>
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/#contact">contact us</a>
        </li>
      </nav>
      <nav class="register">
        <a href="/register">register</a>
      </nav>
    </header>
    <div class="course-intro" v-if="crypto.showCourseIntro">
      <h1>courses</h1>
      <p>Before you strive to earn, learn. Knowledge is never wasted!</p>
      <section>
        <h2>There is a reason:</h2>
        <div class="words">
          <ul>
            <li>you love music</li>
            <li>you love technology</li>
            <li>you love the blockchain</li>
            <li>you love graphics & paper</li>
          </ul>
        </div>
      </section>
      <h3>Our different courses</h3>

      <div class="course-choice">
        <button @click="showCryptoCourses()">crytpocurrency</button
        ><button>forex</button><button>web developement</button
        ><button>graphic design</button>
      </div>
    </div>
    <div class="crypto-courses" v-if="crypto.courses">
      <button class="back" @click="showCourseIntroPage()">
        <i class="fa-solid fa-arrow-left"></i>back
      </button>
      <h2>Learn cryptocurrency today!</h2>
      <h4>what you'll learn:</h4>
      <ul>
        <div class="list">
          <li>intro and basics of cryptocurrency</li>
          <li>Different ways to invest in cryptocurrency</li>
          <li>How to buy coins</li>
          <li>How to swap coins</li>
          <li>cryptocurrency apps</li>
          <li>how to follow coins in cryptocurrency</li>
        </div>
        <div class="img">
          <img src="../assets/phone-a.jpg" alt="" />
        </div>
      </ul>
      <h2>Tutorials point</h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse(1)">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>the history and emergence of BITCOIN</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>what are cryptocurrencies and how they relate</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to use the Binance app on mobile (smart phone)</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to install and use the Trust wallet</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to use the Blockchain wallet</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to swap and transfer coins to and from the Trust wallet</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>howt to become a verified Binance user</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>Different trading methods in Binance</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to place a trade in Binance</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>coin market cap tutorial</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to use pancake swap</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to use cryptopanic and get crypto news</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>what is gate.io?</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video
              src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
              controls
            ></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              Different crypto apps in which you can hold long term coins in
            </h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial">
          <div class="video">
            <video :src="link" controls></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>how to verify your gate.io account</h3>
            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial">
      <h1>How to buy cryptocurrency with the Binance mobile (phone) app.</h1>
      <h3>tutorial objectives:</h3>
      <ul>
        <li>install the binance app</li>
        <li>create an account</li>
        <li>learn to navigate to the crypto of choice</li>
        <li>learn how to actually but the cryto of choice</li>
      </ul>
      <h2>1. How to have binance installed in your mobile phone</h2>
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
      <h2>2. Creating a Binance account</h2>
      <p>
        Now after the installation process have been successfully completed, you
        to have an account a Binance account so to create one you follow the
        steps outlined below to become a Binance user.
      </p>
      <h5>
        This is just a summary you can go back to the courses and take the
        tutorial on how to use the Binance app on smart phone
      </h5>
      <div class="video">
        <video
          src="client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
          controls
        ></video>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import axios from "axios";
import Footer from "./footer.vue";
import { onMounted, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Course_intro",
  components: {
    Footer,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let crypto = reactive({
      courses: false,
      showCourseIntro: true,
    });

    const link = ref(
      "client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4"
    );

    onMounted(() => {
      if (!route.params.id) {
        router.push("/login");
      }
    });

    const showCryptoCourses = () => {
      crypto.courses = true;
      crypto.showCourseIntro = false;
    };

    const showCourseIntroPage = () => {
      crypto.courses = false;
      crypto.showCourseIntro = true;
    };

    const getCourse = (courseId) => {
      console.log(courseId);
      axios("http://localhost:9002/course").then((res) => console.log(res));
    };

    return { link, crypto, showCryptoCourses, showCourseIntroPage, getCourse };
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
main {
  width: 100vw;
  background: linear-gradient(to bottom, rgb(169, 70, 91), $baseColor);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  header {
    width: 98vw;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      li {
        list-style-type: none;
        width: 200px;
        height: 60px;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          text-decoration: none;
          text-transform: uppercase;
          font: 600 19px "Poppins", sans-serif;
          color: $primaryColor;
        }
        @media screen and (max-width: 1110px) {
          width: 140px;
          a {
            font-size: 13px;
          }
        }
      }
    }

    .logo {
      width: 190px;
      height: 90px;
      border: 1px solid white;
      background: $baseColor;
      transform: rotateZ(-10deg);
      border-radius: 0 0 10px 10px;
      border: none;
      cursor: pointer;

      span {
        display: flex;
        box-shadow: 0 2px 1px 1px rgb(200, 200, 200);
        border-radius: 10px 0 10px 0;
        padding: 10px;
        transform: rotateZ(15deg);
        text-transform: uppercase;
        font: 800 35px "Russo One", sans-serif;
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

      @media screen and (max-width: 1050px) {
        width: 130px;
      }
    }
  }
  .register {
    a {
      width: 200px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      color: $baseColor;
      border-radius: 0 10px 0 10px;
    }

    @media screen and (max-width: 930px) {
      a {
        width: 130px;
        font-size: 16px;
      }
    }
  }

  .course-intro {
    width: 90vw;
    margin: 20px auto;
    height: fit-content;
    padding: 10px;
    padding-top: 50px;

    h1 {
      font: 800 65px "Nunito sans", sans-serif;
      text-transform: uppercase;
      padding: 20px;
      color: rgb(239, 236, 236);

      @media screen and (max-width: 560px) {
        font-size: 45px;
      }
    }

    p {
      padding: 10px;
      color: rgb(165, 165, 165);
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
      margin-top: 30px;

      h2 {
        border: 1px solid white;
        width: 300px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        color: $fallback;
        border-radius: 10px 0 10px 0;
      }
      .words {
        width: 300px;
        height: 40px;
        border-bottom: 1px solid white;
        position: relative;
        overflow: hidden;

        ul {
          width: 100%;
          height: 40px;
          position: relative;
          top: 0;
          animation: change 10s steps(4) infinite;

          li {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            list-style-type: none;
            text-transform: capitalize;
            text-align: left;
            padding: 0 10px;
            font-family: "Nunito sans", sans-serif;
          }
        }
      }
    }

    h3 {
      text-transform: capitalize;
      color: rgb(209, 208, 208);
      font: 600 23px "Poppins", sans-serif;
      padding: 20px;
      margin-top: 70px;
    }

    .course-choice {
      width: 90vw;
      margin: 20px auto;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      button {
        width: 230px;
        height: 100px;
        margin-bottom: 23px;
        margin-right: 13px;
        color: rgb(225, 238, 252);
        border: none;
        border-radius: 10px 0 10px 0;
        font: 700 20px "Russo One", sans-serif;
        text-transform: capitalize;
        background: radial-gradient(rgb(120, 148, 165), $baseColor);
      }
    }
  }

  .crypto-courses {
    width: 100vw;
    height: fit-content;
    padding: 20px;
    padding-top: 30px;
    background: white;
    position: relative;

    .back {
      width: 70px;
      height: 40px;
      background: $baseColor;
      border: none;
      border-radius: 3px;
      color: white;
      text-transform: capitalize;
      position: absolute;
      top: 20px;
      left: 50px;
    }

    h2 {
      padding: 20px;
      font: 600 45px "Poppins", sans-serif;
    }

    h4 {
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

      .list {
        width: 40%;

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
    }

    .courses {
      width: 90vw;
      height: fit-content;
      margin: auto;
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .tutorial {
        width: 300px;
        height: fit-content;
        margin-right: 20px;
        margin-bottom: 50px;
        box-shadow: 0 3px 2px 1px rgb(203, 203, 203);
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        .video {
          width: 100%;
          height: 160px;

          video {
            width: 100%;
            height: 100%;
          }
        }

        .video-title {
          width: 100%;
          padding: 15px;
          padding-top: 35px;
          position: relative;

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
            box-shadow: 0 0 2px 1px rgb(221, 218, 218);
          }

          h3 {
            padding: 10px;
            font: 500 16px "Nunito sans", sans-serif;
            text-align: left;
            text-transform: capitalize;
          }

          button {
            width: 70%;
            height: 40px;
            margin: 10px auto;
            background: $SecondaryColor;
            color: $primaryColor;
            border: none;
            border-radius: 5px;
            text-transform: capitalize;
          }
        }

        &:hover {
          transform: scale(1.2);
        }
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }

  .single-tutorial {
    width: 100vw;
    height: fit-content;
    padding: 20px 100px;
    background: white;

    h1 {
      padding: 20px;
      font: 800 50px "Nunito sans", sans-serif;
      text-transform: uppercase;
    }

    h2 {
      font: 600 25px "Nunito sans", sans-serif;
      text-transform: capitalize;
      text-align: left;
      padding: 10px;
    }

    h3 {
      text-transform: capitalize;
      font: 600 30px "Poppins", sans-serif;
      text-align: left;
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
      line-height: 30px;
    }

    ul {
      width: 100%;
      padding: 10px;

      li {
        list-style-type: decimal;
        height: 50px;
        text-align: left;
      }
    }

    .video {
      width: 100%;
      height: fit-content;
      margin: 60px auto;

      video {
        width: 90%;
        height: auto;
        margin: auto;
      }
    }
  }
}
</style>
