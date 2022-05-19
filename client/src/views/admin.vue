<template>
  <main :class="{ squeeze: shrink }">
    <header>
      <button class="profile-menu-button" @click="shrinkPage()" v-if="shrink">
        <i class="fa-solid fa-align-left"></i>
      </button>
      <button class="profile-menu-button" @click="expandPage()" v-if="!shrink">
        <i class="fa-solid fa-align-right"></i>
      </button>
      <nav class="logo">
        <span title="World of Technology and more"> AdvancedTechAcademy </span>
      </nav>

      <nav class="large-screen-only">
        <a href="/">home</a>
      </nav>
    </header>
    <div class="profile-menu" v-if="shrink">
      <div class="profile-header">
        <span>
          <i class="fa-solid fa-user"></i>
        </span>
        <p :title="adminResponse.name + '\n' + adminResponse.email">
          {{ adminResponse.name }}<br />
          <i>{{ adminResponse.email }}</i>
        </p>
      </div>
      <div class="profile-items">
        <router-link to="/admin/blog" class="route">
          <li>
            <span><i class="fa-solid fa-pen"></i></span>
            <p>blog post</p>
          </li></router-link
        >

        <router-link to="/admin/closed" class="route">
          <li>
            <span><i class="fa-solid fa-bitcoin-sign"></i></span>
            <p>cryptocurrency</p>
          </li></router-link
        >
        <router-link to="/admin/closed" class="route">
          <li>
            <span><i class="fa-solid fa-chart-line"></i></span>
            <p>Forex</p>
          </li>
        </router-link>

        <router-link to="/admin/closed" class="route">
          <li>
            <span>
              <i class="fa-brands fa-sketch"></i>
            </span>
            <p>Graphic design</p>
          </li>
        </router-link>
        <router-link to="/admin/closed" class="route">
          <li>
            <span><i class="fa-solid fa-code"></i></span>
            <p>Web developement</p>
          </li>
        </router-link>
        <router-link to="/blog" class="route">
          <li>
            <span><i class="fa-solid fa-blog"></i></span>
            <p>view posts</p>
          </li>
        </router-link>
        <router-link to="/" class="small-screen-only route">
          <li>
            <span><i class="fa-solid fa-house"></i></span>
            <p>home</p>
          </li>
        </router-link>
      </div>
    </div>
    <div class="authentication" v-if="auth">
      <form @submit.prevent="authAdmin()">
        <div class="auth">
          <label for="admin-name">name:</label>
          <input
            type="text"
            name="username"
            id="admin-name"
            v-model="admin.username"
            placeholder="Admin Name..."
            required
          />
        </div>
        <div class="auth">
          <label for="admin-email">admin email:</label>
          <input
            type="email"
            name="email"
            id="admin-email"
            v-model="admin.email"
            placeholder="Admin Email..."
            required
          />
        </div>
        <div class="auth">
          <label for="password">passcode:</label
          ><input
            type="password"
            name="password"
            id="passcode"
            v-model="admin.password"
            placeholder="Secret key..."
            required
          />
        </div>
        <button type="submit">access page</button>
        <div class="not-admin">
          <a href="/">i'm not an admin</a><a href="/">home</a>
        </div>
      </form>
      <div class="error" v-if="authError">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>error: Access Denied.</span>
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
export default {
  name: "Admin",
  setup() {
    const shrink = ref(true);

    const admin = reactive({
      username: "",
      email: "",
      password: "",
    });

    let adminResponse = reactive({
      name: "",
      email: "",
      status: "",
    });

    const auth = ref(true);
    const authError = ref(false);

    const shrinkPage = () => {
      shrink.value = false;
    };

    const expandPage = () => {
      shrink.value = true;
    };

    async function authAdmin() {
      axios
        .post("/api/admin/auth", admin, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            auth.value = false;
            adminResponse.name = res.data.username;
            adminResponse.email = res.data.email;
          }
        })
        .catch((err) => {
          console.log(err);
          auth.value = true;
          authError.value = true;
          adminResponse.status = err.response.data.msg;
          setTimeout(post_error, 3000);
        });

      admin.username = "";
      admin.email = "";
      admin.password = "";
    }

    function post_error() {
      authError.value = false;
    }

    return {
      admin,
      auth,
      authError,
      shrink,
      adminResponse,
      shrinkPage,
      expandPage,
      authAdmin,
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
$adminCol: rgb(21, 55, 101);

main {
  width: 100vw;
  min-height: 100vh;
  background: rgb(231, 231, 232);
  padding-top: 16vh;
  overflow-x: hidden;

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
    z-index: 1;

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

    @media screen and (max-width: 500px) {
      padding: 0 10px;
      flex-direction: row-reverse;
      .large-screen-only {
        display: none;
      }
      .logo span {
        font-size: 15px;
      }
    }
  }

  .profile-menu {
    width: 19vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    // z-index: ;
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

      .route {
        text-decoration: none;
        width: 100%;
        text-transform: capitalize;
        text-align: left;
        color: white;
      }

      .small-screen-only {
        display: none;
      }

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
          width: 28%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 20px;
            color: white;
          }
        }
        p {
          text-align: left;
          width: 70%;
          color: white;
        }

        &:hover {
          background: rgb(69, 89, 114);
        }

        @media screen and (max-width: 1000px) {
          span i,
          p {
            font-size: 12px;
          }
        }
      }

      @media screen and (max-width: 500px) {
        .small-screen-only {
          display: flex;
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

  .authentication {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $fallback;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 550px;
      height: fit-content;
      background: white;
      border-radius: 5px;
      padding: 20px;

      .auth {
        width: 100%;
        height: 50px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
          text-transform: capitalize;
          text-align: left;
          width: 30%;
          color: $col;
        }
        input {
          width: 70%;
          height: 100%;
          border: none;
          outline: none;
          background: whitesmoke;
          color: $col;
          padding: 3px 10px;
          border-radius: 3px;
        }
      }

      p {
        color: red;
      }
      button {
        width: 100%;
        padding: 0 10px;
        height: 50px;
        margin: 10px auto;
        background: $SecondaryColor;
        color: white;
        text-transform: capitalize;
        border: none;
        border-radius: 3px;
      }

      .not-admin {
        width: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          text-decoration: none;
          text-transform: capitalize;
          color: $col;
          font: 500 13px "Poppins", sans-serif;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      @media screen and (max-width: 570px) {
        width: 98%;
        .auth {
          height: fit-content;
          flex-direction: column;

          label,
          input {
            width: 100%;
            height: 35%;
          }
          input {
            height: 60px;
          }
        }
      }
    }

    .error {
      width: fit-content;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $SecondaryColor;
      border-radius: 4px;
      padding: 20px;
      position: fixed;
      left: 40vw;
      top: 25vh;
      z-index: 1;
      animation: pop 1s linear alternate forwards;

      i {
        font-size: 30px;
        margin-right: 10px;
        color: white;
      }

      span {
        color: white;
      }
    }

    @keyframes pop {
      from {
        top: 10vh;
      }
      to {
        top: 25vh;
      }
    }
  }
}

main.squeeze {
  width: 81vw;
  float: right;
  header {
    width: 81%;
  }

  @media screen and (max-width: 770px) {
    width: 100vw;

    header {
      width: 100%;
    }
  }
}
</style>
