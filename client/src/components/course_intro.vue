<template>
  <main :class="{ squeeze: crypto.profileMenu }">
    <header>
      <nav class="logo">
        <span title="World of Technology and more"> AdvancedTechAcademy </span>
      </nav>
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#contact">contact us</a>
        </li>
      </nav>
      <button
        class="profile-menu-button"
        v-if="crypto.profileMenu"
        @click="hideProfileMenu()"
      >
        <i class="fa-solid fa-bars-staggered"></i>
      </button>
      <nav
        class="profile"
        :title="'User:' + crypto.courseUser"
        v-if="crypto.hideProfile"
        @click="showProfileMenu()"
      >
        <span>
          <i class="fa-solid fa-bars"></i>
        </span>
        <p>{{ crypto.courseUser }}</p>
      </nav>
    </header>
    <div class="profile-menu" v-if="crypto.profileMenu">
      <nav class="logo">
        <span title="World of Technology and more"> AdvancedTechAcademy </span>
      </nav>
      <div class="profile-header">
        <span>
          <i class="fa-solid fa-user"></i>
        </span>
        <p>
          {{ crypto.courseUser }} <br />
          <i :title="crypto.courseUserEmail">{{ crypto.courseUserEmail }}</i>
        </p>
      </div>
      <div class="profile-items">
        <li @click="showCryptoCourses()">
          <span><i class="fa-solid fa-bitcoin-sign"></i></span>
          <p>cryptocurrency</p>
        </li>
        <li>
          <span><i class="fa-solid fa-chart-line"></i></span>
          <p>Forex</p>
        </li>
        <li>
          <span>
            <i class="fa-brands fa-sketch"></i>
          </span>
          <p>Graphic design</p>
        </li>
        <li>
          <span><i class="fa-solid fa-code"></i></span>
          <p>Web developement</p>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-power-off"></i><span> sign out</span>
          </button>
        </li>
      </div>
    </div>
    <div class="course-intro" v-if="crypto.showCourseIntro">
      <h1>courses</h1>
      <p>
        Welcome <span>{{ crypto.courseUser }}!</span>
      </p>
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
        <div class="blur"></div>
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
        <div
          class="tutorial"
          @click="getCourse(course.courseId)"
          v-for="course in crypto.courseList"
          :key="course.courseId"
        >
          <div class="video">
            <video :src="course.videoUrl" controls></video>
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>{{ course.courseTitle }}</h3>
            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="crypto.course1">
      <!-- <header v-if="crypto.showCourseIntro">
        <nav class="logo">
          <span title="World of Technology and more">
            AdvancedTechAcademy
          </span>
        </nav>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#contact">contact us</a>
          </li>
        </nav>
        <button
          class="profile-menu-button"
          v-if="crypto.profileMenu"
          @click="hideProfileMenu()"
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <nav
          class="profile"
          :title="'User:' + crypto.courseUser"
          v-if="crypto.hideProfile"
          @click="showProfileMenu()"
        >
          <span>
            <i class="fa-solid fa-bars"></i>
          </span>
          <p>{{ crypto.courseUser }}</p>
        </nav>
      </header> -->
      <h1>{{ crypto.title }}</h1>
      <h4>
        master course <br />
        by: codingHerald
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a1"><span>1</span> Install the binance app</a>
        </li>
        <li>
          <a href="#a2"><span>2</span> Create an account</a>
        </li>
        <li>
          <a href="#a3"
            ><span>3</span> Learn to navigate to the crypto of choice</a
          >
        </li>
        <li>
          <a href="#a4"
            ><span>4</span> Learn how to actually but the cryto of choice</a
          >
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
      <h5>
        This is just a summary you can go back to the courses and take the
        tutorial on how to use the Binance app on smart phone
      </h5>
      <div class="video">
        <video :src="crypto.url" controls></video>
      </div>
      <p>{{ crypto.title }} <sup>*</sup></p>
      <div class="question">
        <label for="question">ask question(s) or leave a comment:</label>
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="10"
          placeholder="Ask question(s) or leave a comment...."
          required
        ></textarea>
        <button>submit</button>
      </div>
    </div>
    <div class="single-tutorial course-2" v-if="crypto.course2">
      <!-- <header v-if="crypto.showCourseIntro">
        <nav class="logo">
          <span title="World of Technology and more">
            AdvancedTechAcademy
          </span>
        </nav>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#contact">contact us</a>
          </li>
        </nav>
        <button
          class="profile-menu-button"
          v-if="crypto.profileMenu"
          @click="hideProfileMenu()"
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <nav
          class="profile"
          :title="'User:' + crypto.courseUser"
          v-if="crypto.hideProfile"
          @click="showProfileMenu()"
        >
          <span>
            <i class="fa-solid fa-bars"></i>
          </span>
          <p>{{ crypto.courseUser }}</p>
        </nav>
      </header> -->
      <h1>how to use the Binance app on mobile(Phone)</h1>
      <h4>
        master course <br />
        by: codingHerald
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#b1"
            ><span>1</span> Have Binance app installed in your phone</a
          >
        </li>
        <li>
          <a href="#b2"><span>2</span>Create a Binance account</a>
        </li>
        <li>
          <a href="#b3"><span>3</span>Learn different parts of the app</a>
        </li>
        <li>
          <a href="#b4"><span>4</span>Binance app basics</a>
        </li>
      </ul>
      <h2>Binance</h2>
      <p>
        Binance is the upgrowing largest cryptocurrency exchange platform
        worldwide, created in 2017 by Changpeng Zhao. Binance offers trading,
        exchange services and more in the cryptocurrency or Blockchain space.
      </p>
      <h2 id="b1">
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
      <h2 id="b2"><span>2.</span> Creating a Binance account</h2>
      <p>
        Now after the installation process have been successfully completed, you
        need to have an account a Binance account so to create one you follow
        the steps outlined below to become a Binance user.
      </p>
      <div class="pic">
        <div class="blur"></div>
        <h1>Binance on mobile (phone)</h1>

        <p>World’s largest cryptocurrency exchange platform</p>
        <h3>
          learn now and maximize the services provided by the Binance team.
        </h3>
      </div>
      <div class="question">
        <label for="question">ask question(s) or leave a comment:</label>
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="10"
          placeholder="Ask question(s) or leave a comment...."
          required
        ></textarea>
        <button>submit</button>
      </div>
    </div>
    <Footer v-if="crypto.courses" />
  </main>
</template>

<script>
import axios from "axios";
import Footer from "./footer.vue";
import { ref, reactive, onMounted } from "vue";
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
      course1: false,
      course2: false,
      courseUser: "",
      courseUserEmail: "",
      profileMenu: false,
      hideProfile: true,
      title: "",
      url: "",
      courseList: [
        {
          courseId: "1flklad8daoi",
          courseTitle: "how to learn about crypto coures 1",
          videoUrl:
            "client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true,
        },
        {
          courseId: "8ajjdf8af9a",
          courseTitle: "how to learn about crypto 2",
          videoUrl:
            "client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true,
        },
        {
          courseId: "fja9ajf3jfa8",
          courseTitle: "how to learn about crypto 3",
          videoUrl:
            "client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true,
        },
        {
          courseId: "3kdlfk8fka",
          courseTitle: "how to learn about crypto 4",
          videoUrl:
            "client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true,
        },
      ],
    });

    // let config = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // };

    const refreshpage = async () => {
      try {
        if (
          !localStorage.getItem("accessToken") ||
          localStorage.getItem("accessToken") == null
        ) {
          router.push({
            name: "Sign_in",
          });
        } else {
          let response = await axios("/token");

          if (response === null) {
            router.push("/login");
          } else {
            crypto.courseUser = response.data.user.username;
            crypto.courseUserEmail = response.data.user.email;
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    onMounted(() => {
      refreshpage();
    });

    const showProfileMenu = () => {
      crypto.profileMenu = true;
      crypto.hideProfile = false;
    };

    const hideProfileMenu = () => {
      crypto.profileMenu = false;
      crypto.hideProfile = true;
    };

    const showCryptoCourses = () => {
      crypto.courses = true;
      crypto.showCourseIntro = false;
      crypto.course1 = false;
      crypto.course2 = false;
    };

    const showCourseIntroPage = () => {
      crypto.courses = false;
      crypto.showCourseIntro = true;
    };

    const getCourse = (courseId) => {
      console.log(courseId);
      axios("/course/" + `${courseId}`).then((res) => {
        crypto.title = res.data.title;
        crypto.url = "client/src/assets/videos/" + res.data.videoUrl;
        crypto.courses = false;
        crypto.course1 = true;
      });
    };

    return {
      crypto,
      showProfileMenu,
      hideProfileMenu,
      showCryptoCourses,
      showCourseIntroPage,
      getCourse,
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

html {
  scroll-behavior: smooth;
}
main {
  width: 100vw;
  margin: 0;
  background: linear-gradient(to bottom, rgb(169, 70, 91), $baseColor);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  header {
    width: 98%;
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
        height: 50px;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          text-decoration: none;
          text-transform: capitalize;
          font: 500 15px "Poppins", sans-serif;
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
      width: 300px;
      height: 90px;
      border-radius: 0 0 10px 10px;
      cursor: pointer;

      span {
        display: flex;
        box-shadow: 0 2px 1px 1px rgb(200, 200, 200);
        border-radius: 10px 0 10px 0;
        padding: 10px;
        font: 700 20px "Nunito Sans", sans-serif;
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

    .profile-menu-button {
      width: 50px;
      height: 50px;
      border-radius: 1px 0 0 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin: 0;
      background: white;
      position: fixed;
      right: 290px;
      top: 40px;
      z-index: 1;
      animation: slice-in 0.3s linear forwards;

      i {
        font-size: 27px;
        color: $col;
      }
    }

    @keyframes slice-in {
      from {
        right: -400px;
      }
      to {
        right: 303px;
      }
    }

    .profile {
      width: 200px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      position: relative;
      right: 5%;
      cursor: pointer;

      span {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        i {
          font-size: 21px;
          color: white;
        }
      }
      p {
        width: 60%;
        padding-left: 10px;
        font: 600 15px "Nunito Sans", "Poppins", sans-serif;
        color: white;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .profile-menu {
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    background: white;
    box-shadow: 0 3px 2px 1px rgb(220, 219, 219);
    animation: slide-in 0.3s 1 linear forwards;

    .logo {
      width: 300px;
      height: 90px;
      border-radius: 0 0 10px 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        display: flex;
        box-shadow: 0 2px 1px 1px rgb(200, 200, 200);
        border-radius: 10px 0 10px 0;
        padding: 10px;
        font: 700 20px "Nunito Sans", sans-serif;
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

    .profile-header {
      width: 100%;
      height: 17vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: whitesmoke;

      span {
        width: 40px;
        height: 40px;
        display: flex;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        background: #3d566f;
        cursor: pointer;

        i {
          font-size: 21px;
          color: white;
        }
      }
      p {
        width: 60%;
        padding-left: 10px;
        font: 600 15px "Poppins", sans-serif;
        color: $fallback;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 30px;
        color: $col;

        i {
          font-size: 12px;
        }
      }
    }

    .profile-items {
      width: 100%;
      height: fit-content;

      li {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 5px auto;
        height: 60px;
        cursor: pointer;

        span {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 20px;
          }
        }

        p {
          width: 70%;
          text-transform: capitalize;
          text-align: left;
        }

        button {
          background: transparent;
          width: 100%;
          height: 50px;
          margin: auto;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;

          i {
            font-size: 25px;
            color: #3d566f;
          }

          span {
            width: 70%;
            justify-content: flex-start;
            border-radius: 0;
            font: 500 17px "Poppins", sans-serif;
            text-align: left;
            color: #3d566f;
            text-transform: capitalize;
          }
        }

        &:hover {
          transform: scale(0.9) translateX(10px);
        }
      }
    }
  }

  @keyframes slide-in {
    from {
      right: -400px;
    }
    to {
      right: 0;
    }
  }

  .course-intro {
    width: 90%;
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

      span {
        color: $tertiaryColor;
        font: 800 23px "Nunito Sans", sans-serif;
        background: linear-gradient(
          to bottom,
          $primaryColor 20%,
          $tertiaryColor
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
      width: 90%;
      margin: 20px auto;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      button {
        width: 230px;
        height: 100px;
        margin-bottom: 23px;
        margin-right: 13px;
        color: $col;
        border: none;
        border-radius: 10px 0 10px 0;
        font: 700 20px "Nunito Sans", sans-serif;
        text-transform: capitalize;
        background: rgb(230, 251, 240);

        &:hover {
          background: whitesmoke;
        }
      }
    }
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

    .back {
      width: 70px;
      height: 40px;
      background: $baseColor;
      border: none;
      border-radius: 3px;
      color: white;
      text-transform: capitalize;
      position: absolute;
      top: 120px;
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
    width: 100%;
    margin: 5px auto;
    height: fit-content;
    padding: 20px 0;
    background: whitesmoke;

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

      video {
        width: 90%;
        height: auto;
        margin: auto;
      }
    }

    .question {
      width: 90%;
      margin: auto;
      height: fit-content;
      padding: 10px;

      label {
        padding: 10px;
        text-align: left;
        display: block;
        width: 100%;
        text-transform: capitalize;
        font: 600 23px "Poppins", sans-serif;
      }

      textarea {
        width: 100%;
        height: 300px;
        border: none;
        outline: none;
        font-weight: 500;
        color: $baseColor;
        box-shadow: 0 0 2px 1px rgb(238, 238, 238);
        padding: 20px;
        background: white;
      }

      button {
        display: block;
        width: 60%;
        height: 60px;
        border: none;
        background: $baseColor;
        color: $primaryColor;
        border-radius: 30px;
        margin: 15px auto;
        text-transform: capitalize;
        font: 600 20px "Nunito sans", sans-serif;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 20px 10px;

      h1 {
        font-size: 30px;
      }
    }
  }
}

main.squeeze {
  width: 75vw;
}
</style>
