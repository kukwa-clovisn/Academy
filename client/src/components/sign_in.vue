<template>
  <main>
    <div class="c1">
      <img src="../assets/bitcoin.png" alt="BTC" />
    </div>
    <Header />
    <div class="content">
      <h2>sign in</h2>
      <div class="form">
        <form @submit.prevent="signin">
          <h1>sign in</h1>
          <div class="input">
            <label for="username">Name:</label
            ><input
              type="text"
              name="username"
              id="username"
              v-model="user.username"
              placeholder="Enter username...."
              required
            />
          </div>
          <div class="input">
            <label for="password">password:</label
            ><input
              type="password"
              name="password"
              id="password"
              v-model="user.password"
              placeholder="Enter Password...."
              required
            />
          </div>
          <div class="errormsg" v-if="user.errormsg">
            <p>{{ user.msg }}</p>
          </div>
          <button type="submit">sign in</button>
          <div class="forget-password">
            <span
              ><router-link to="/" class="route">forget password?</router-link>
            </span>
            <span><router-link to="/" class="route">home</router-link></span>
          </div>
        </form>
        <div class="login">
          <div class="welcome">
            <h1>welcome again</h1>
            <h3>advanced crypto & forex trading community</h3>
            <p>Crypto and Forex learning made easy and interesting.</p>
            <button>
              <router-link to="/signup" class="route">sign up</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="response-div">
        <div class="done" v-if="user.success">
          <i class="fa-solid fa-circle-check"></i>
          <span>{{ user.msg }}</span>
        </div>
        <div class="error" v-if="user.failed">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span>{{ user.msg }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "./header.vue";
export default {
  name: "Sign_in",
  components: {
    Header,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    let username = ref("");
    let token = ref("");

    let user = reactive({
      username: route.params.username,
      password: "",
      msg: "",
      success: false,
      failed: false,
    });

    /**
     * creating a log in validation and authentication
     */
    const signin = () => {
      axios
        .post(
          "api/signin",
          {
            username: user.username,
            password: user.password,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.accessToken}`;

          username.value = res.data.username;
          token.value = res.data.accessToken;
          user.success = true;
          user.msg = res.data.msg;

          setTimeout(pop, 3000);
        })
        .catch((err) => {
          user.msg = err.response.data.msg;
          user.failed = true;
          setTimeout(post_error, 3000);
        });
    };

    function pop() {
      user.success = false;

      router.push({
        name: "Course_intro",
        params: {
          courseUser: username.value,
          accessToken: token.value,
        },
      });
    }
    function post_error() {
      user.failed = false;
    }

    return { user, signin };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(30, 2, 40);
$fallback: rgb(19, 37, 62);
main {
  width: 100vw;
  height: fit-content;
  background: rgb(231, 231, 231);
  background: $fallback;

  .landing-page-btn {
    width: 150px;
    height: 40px;
    border: none;
    background: white;
    border-radius: 3px;
    display: block;

    .homeBtn {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $SecondaryColor;
      text-transform: capitalize;
      font: 700 20px "Poppins", sans-serif;
      text-decoration: none;
    }
  }

  .c1 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: transparent;
    position: fixed;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateZ(-90deg);
    opacity: 0.6;
    top: 15vh;
    left: 0vw;
    animation: turn 10s linear infinite alternate-reverse forwards;

    img {
      display: block;
      width: 100%;
    }
  }

  @keyframes turn {
    to {
      transform: rotateZ(360deg) translateY(150px);
    }
  }

  .content {
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;

    h2 {
      color: rgb(164, 165, 165);
      font: 500 27px "Poppins", sans-serif;
      padding: 10px;
      text-align: left;
      width: 730px;
      position: relative;

      @media screen and (max-width: 730px) {
        position: absolute;
        left: 20px;
        top: 30px;
        padding-left: 50px;
      }
    }

    .form {
      width: 730px;
      height: 420px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      overflow: hidden;
      position: relative;

      .login {
        width: 47%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          to bottom right,
          rgb(38, 79, 129) 0%,
          $fallback 80%
        );

        .welcome {
          width: 90%;
          height: 40%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          padding: 5px;

          h1 {
            text-transform: capitalize;
            font: 700 34px "Poppins", sans-serif;
            color: white;
          }

          h3 {
            font: 600 12px "Poppins", sans-serif;
            text-transform: capitalize;
            padding: 5px;
            background: linear-gradient(
              to bottom,
              $SecondaryColor,
              rgba(255, 255, 255, 1)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p {
            color: rgb(213, 211, 211);
            font: 400 9px "Poppins", sans-serif;
          }

          button {
            width: 170px;
            height: 50px;
            background: $SecondaryColor;
            border: none;
            box-shadow: 0 0 1px 0.5px white;
            border-radius: 5px;
            margin-top: 20px;
            background: transparent;

            .route {
              text-decoration: none;
              color: white;
              font: 600 20px "Poppins", sans-serif;
            }

            &:hover {
              box-shadow: none;
              background: $SecondaryColor;
              transform: scale(0.9);
            }
          }
          .hroute {
            text-decoration: underline;
            background: linear-gradient(
              to bottom,
              $SecondaryColor,
              rgba(255, 255, 255, 1)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 10px;
            font: 600 11px "Poppins", sans-serif;
            opacity: 0.8;
            text-transform: uppercase;
            transition: all 0.3s ease;

            &:hover {
              text-decoration: underline;
              color: white;
              transform: scale(1.2);
            }
          }
        }
      }

      form {
        width: 53%;
        height: 100%;
        padding: 10px;
        background: white;

        h1 {
          padding: 10px;
          padding-bottom: 0;
          font: 700 40px "Poppins", sans-serif;
          color: $SecondaryColor;
        }

        .input {
          width: 90%;
          height: 80px;
          margin: 10px auto;

          label {
            width: 100%;
            display: block;
            text-align: left;
            text-transform: capitalize;
            font: 550 22px "Poppins", sans-serif;
            color: rgba(113, 112, 112, 1);
          }

          input {
            display: block;
            width: 98%;
            height: 50px;
            padding: 3px 10px 3px 20px;
            font: 500 17px "Poppins", sans-serif;
            outline: none;
            border: 1px solid rgba(222, 219, 219, 1);
            background: white;
            border-radius: 5px;
          }
        }

        .errormsg {
          width: 90%;
          margin: auto;

          p {
            color: red;
            padding: 5px;
          }
        }

        button {
          width: 89%;
          height: 50px;
          background: $SecondaryColor;
          color: white;
          font: 700 23px "Poppins", sans-serif;
          border: none;
          border-radius: 5px;
          margin: 10px auto;
        }

        .forget-password {
          width: 90%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5px;

          span {
            cursor: pointer;
            .route {
              text-decoration: none;
              text-transform: capitalize;
              font: 500 16px "Poppins", sans-serif;

              color: rgba(113, 112, 112, 1);
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
      @media screen and (max-width: 810px) {
        width: 100vw;
      }
      @media screen and (max-width: 769px) {
        flex-direction: column;
        height: fit-content;
        .login {
          display: none;
        }
        form {
          width: 90%;
          padding: 40px;
          border-radius: 5px;

          .input {
            label {
              font-size: 30px;
              padding-bottom: 10px;
            }
            input {
              height: 80px;
            }
            height: fit-content;
            margin: 40px auto;
          }

          button {
            height: 80px;
            font-size: 25px;
          }

          .forget-password {
            span {
              .route {
                font-size: 23px;
                @media screen and (max-width: 420px) {
                  font-size: 17px;
                }
              }
            }
          }
        }
      }

      @media screen and (max-width: 650px) {
        form {
          width: 100vw;
          padding-left: 10px;
          padding-right: 10px;

          .input {
            width: 99%;
          }

          button {
            width: 99%;
          }
        }
      }
    }

    .response-div {
      width: 90%;
      height: fit-content;
      position: fixed;
      left: 5%;
      top: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .done,
    .error {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(71, 243, 151);
      border-radius: 4px;
      padding: 20px;
      z-index: 1;
      position: relative;
      animation: pop 1s linear alternate forwards;

      i {
        font-size: 30px;
        margin-right: 10px;
        color: white;
      }

      span {
        color: white;
        white-space: pre-wrap;
      }
    }

    .error {
      background: $SecondaryColor;
      span {
        color: white;
      }
    }

    @keyframes pop {
      from {
        top: 0;
      }
      to {
        top: 15vh;
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 100px;
    }
  }
}
</style>
