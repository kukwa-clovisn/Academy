<template>
  <main :class="{ squeeze: admin.shrink }">
    <header>
      <button
        class="profile-menu-button"
        @click="shrinkPage()"
        v-if="admin.shrink"
      >
        <i class="fa-solid fa-bars-staggered"></i>
      </button>
      <button
        class="profile-menu-button"
        @click="expandPage()"
        v-if="!admin.shrink"
      >
        <i class="fa-solid fa-bars-staggered"></i>
      </button>
      <nav class="logo">
        <span title="World of Technology and more"> AdvancedTechAcademy </span>
      </nav>

      <nav>
        <a href="/">home</a>
      </nav>
    </header>
    <div class="profile-menu" v-if="admin.shrink">
      <div class="profile-header">
        <span>
          <i class="fa-solid fa-user"></i>
        </span>
        <p>
          admin name <br />
          <i>admin email</i>
        </p>
      </div>
      <div class="profile-items">
        <li>
          <span><i class="fa-solid fa-pen"></i></span>
          <router-link to="/admin/blog" class="route">blog post</router-link>
        </li>
        <li>
          <span><i class="fa-solid fa-bitcoin-sign"></i></span>
          <router-link to="/admin/crypto" class="route"
            >cryptocurrency</router-link
          >
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
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Admin",
  setup() {
    const admin = reactive({
      shrink: true,
    });
    const shrinkPage = () => {
      admin.shrink = false;
    };

    const expandPage = () => {
      admin.shrink = true;
    };

    return { admin, shrinkPage, expandPage };
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
$adminCol: rgb(21, 55, 101);

main {
  width: 100vw;
  min-height: 100vh;
  background: rgb(231, 231, 232);
  padding-top: 16vh;

  header {
    width: 100%;
    height: 15vh;
    padding: 0 50px;
    background: $adminCol;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile-menu-button {
      width: 50px;
      height: 50px;
      border-radius: 1px 0 0 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin: 0;
      background: transparent;
      z-index: 1;
      animation: slice-in 0.3s linear forwards;

      i {
        font-size: 27px;
        color: white;
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

    nav a {
      color: white;
      font: 500 16px "Poppins", sans-serif;
      text-transform: capitalize;
    }
  }

  .profile-menu {
    width: 230px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: $adminCol;
    box-shadow: 0 3px 2px 1px rgb(220, 219, 219);
    animation: slide-in 0.2s 1 linear alternate forwards;

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
      height: 15vh;
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
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 5px auto;
        height: 65px;
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
            color: white;
          }
        }

        .route {
          text-decoration: none;
          width: 70%;
          text-transform: capitalize;
          text-align: left;
          color: white;
        }

        &:hover {
          background: rgb(69, 89, 114);
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
      left: -400px;
    }
    to {
      left: 0;
    }
  }
}

main.squeeze {
  width: 81vw;
  float: right;
  header {
    width: 81vw;
  }
}
</style>
