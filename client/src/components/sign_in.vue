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
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
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

    let user = reactive({
      username: route.params.username,
      password: "",
      msg: "",
      errormsg: "",
    });

    /**
     * creating a log in validation and authentication
     */
    const signin = async () => {
      try {
        await fetch("http://localhost:9002/signin", {
          method: "Post",
          headers: {
            // "Access-Control-Request-Headers": "Authorization",
            // Authorization: "Bearer secretToken",
            "Content-type": "application/json",
          },

          body: JSON.stringify({
            username: user.username,
            password: user.password,
          }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            console.log(res);
            user.errormsg = true;
            user.msg = res.msg;

            if (!res.accessToken) {
              user.msg = res.msg;
              user.errormsg = true;
              return;
            }

            localStorage.setItem("accessToken", res.accessToken);

            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.accessToken}`;

            router.push({
              name: "Course_intro",
              params: {
                courseUser: res.username,
                accessToken: res.accessToken,
              },
            });

            // let config = {
            //   headers: {
            //     Authorization: `Bearer ${res.accessToken}`,
            //   },
            // };
          });
      } catch (err) {
        console.log(err);
      }
    };

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
    @media screen and (max-width: 768px) {
      padding-top: 100px;
    }
  }
}
</style>
