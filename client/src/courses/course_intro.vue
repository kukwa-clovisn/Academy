<template>
  <main :class="{ squeeze: crypto.profileMenu }">
    <header>
      <nav class="logo">
        <span title="World of Technology and more"> AdvancedTechAcademy </span>
      </nav>
      <nav class="routes">
        <li>
          <a href="/course">courses</a>
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
        <li @click="showForexCourses()">
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
          <span><i class="fa-solid fa-phone"></i></span>
          <p>contact us</p>
        </li>
        <li>
          <span><i class="fa-solid fa-house"></i></span>
          <p>home</p>
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
        ><button @click="showForexCourses()">forex</button
        ><button>web developement</button><button>graphic design</button>
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Course_intro",

  setup() {
    const router = useRouter();
    const route = useRoute();

    let crypto = reactive({
      courses: false,
      showCourseIntro: true,
      courseUser: "",
      courseUserEmail: "",
      profileMenu: false,
      hideProfile: true,
    });

    const refreshpage = () => {
      if (
        !localStorage.getItem("accessToken") ||
        localStorage.getItem("accessToken") == null
      ) {
        return router.push("/login");
      }
      axios("api/token")
        .then((res) => {
          crypto.courseUser = res.data.user.username;
          crypto.courseUserEmail = res.data.user.email;
        })
        .catch((err) => {
          router.push("/login");
        });
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

    const showCourseIntroPage = () => {
      crypto.courses = false;
      crypto.showCourseIntro = true;
    };

    function showCryptoCourses() {
      router.push("/course/crypto");
      crypto.showCourseIntro = false;
    }

    function showForexCourses() {
      router.push("/course/forex");
      crypto.showCourseIntro = false;
    }

    return {
      crypto,
      showProfileMenu,
      hideProfileMenu,
      showCourseIntroPage,
      showCryptoCourses,
      showForexCourses,
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
      width: fit-content;
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

    @media screen and (max-width: 1055px) {
      width: 100%;

      nav li {
        width: fit-content;
      }
    }

    @media screen and (max-width: 900px) {
      width: 95%;
      margin: auto;
      padding: 0;
      .routes {
        display: none;
      }

      .profile {
        width: 30%;
      }
    }

    @media screen and (max-width: 570px) {
      width: 100%;
      justify-content: space-between;

      .logo {
        margin: 0;

        span {
          font-size: 15px;
        }
      }

      .profile {
        font-size: 13px;
      }
    }
  }

  .profile-menu {
    width: 25vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    background: white;
    box-shadow: 0 3px 2px 1px rgb(220, 219, 219);
    animation: slide-in 0.3s 1 linear forwards;

    .logo {
      width: fit-content;
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
        height: 45px;
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

    @media screen and (max-width: 770px) {
      position: relative;
      left: 0;
      width: 100%;
      height: fit-content;
      padding: 15px;
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
}

main.squeeze {
  width: 75vw;
  header {
    justify-content: center;
  }

  @media screen and (max-width: 770px) {
    width: 100vw;

    header {
      justify-content: flex-start;

      @keyframes slice-in {
        to {
          top: 30px;
          right: 30px;
        }
      }
    }

    .profile-menu .logo {
      display: none;
    }
  }
}
</style>
