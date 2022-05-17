<template>
  <main>
    <div class="forex-courses" v-if="forex.courses">
      <h2>Learn forex today!</h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse1()">
          <div class="video">
            <img src="../assets/forex.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>introduction to forex</h3>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse2()">
          <div class="video">
            <img src="../assets/forex-blue.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>forex investing basics</h3>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse3()">
          <div class="video">
            <img src="../assets/ch1.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>candlesticks full course <br />candlestick pattern tutorial</h3>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse4()">
          <div class="video">
            <img src="../assets/forex.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>How to invest in forex and why</h3>

            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="forex.course1">
      <a @click="backToCourses()" class="return">Back to forex courses</a>
      <h1>Forex for beginers | intro to forex</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a1"><span>1</span>what is forex?</a>
        </li>
      </ul>

      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xb4KWuHmHBQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial course-2" v-if="forex.course2">
      <a @click="backToCourses()" class="return">Back to forex courses</a>
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
          <a href="#b4"><span>4</span>buy forexcurrencies</a>
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
          src="https://www.youtube.com/embed/_tEbIzKbZhY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial course-3" v-if="forex.course3">
      <a @click="backToCourses()" class="return">Back to forex courses</a>
      <h1>forexcurrency for Beginners</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c1"><span>1</span>what are candlesticks in forex</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick meaning</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick patterns</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C3KRwfj9F8Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial course-4" v-if="forex.course4">
      <a @click="backToCourses()" class="return">Back to forex courses</a>
      <h1>How to make money in forex trading</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c1"><span>1</span>what are candlesticks in forex</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick meaning</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick patterns</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n8GmdqPOW1A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import Contact from "../components/contact.vue";
export default {
  name: "Forex_course",
  components: {
    Contact,
  },
  setup() {
    let forex = reactive({
      courses: true,
      course1: false,
      course2: false,
      course3: false,
      course4: false,
    });

    function backToCourses() {
      forex.courses = true;
      forex.course1 = false;
      forex.course2 = false;
      forex.course3 = false;
      forex.coures4;
    }

    const getCourse1 = () => {
      forex.courses = false;
      forex.course1 = true;
    };

    const getCourse2 = () => {
      forex.courses = false;
      forex.course2 = true;
    };

    function getCourse3() {
      forex.courses = false;
      forex.course3 = true;
    }

    function getCourse4() {
      forex.courses = false;
      forex.course4 = true;
    }

    return {
      forex,
      backToCourses,
      getCourse1,
      getCourse2,
      getCourse3,
      getCourse4,
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

.forex-courses {
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
