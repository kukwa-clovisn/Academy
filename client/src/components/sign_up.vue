<template>
  <main>
    <div class="c1">
      <img src="../assets/bitcoin.png" alt="BTC" />
    </div>

    <header class="large-screen-header">
      <nav class="logo-nav">
        <img src="../assets/logo-b.jpeg" id="logo" alt="logo image" />
      </nav>
      <nav>
        <router-link to="/about" class="route">about</router-link>
        <router-link to="/why-us" class="route">why crypto?</router-link>
        <router-link to="/blog" class="route">blog</router-link>
        <a href="/#contact" class="route">contact</a>
      </nav>
      <nav>
        <button class="landing-page-btn">
          <router-link to="/register" class="homeBtn">register</router-link>
        </button>
      </nav>
    </header>
    <header class="small-screen-header">
      <nav class="logo-nav">
        <img src="../assets/logo-b.jpeg" id="logo" alt="logo image" />
      </nav>
      <nav class="title"><a href="/">AC&FC</a></nav>
      <nav class="menu-bars"><i class="fa-solid fa-bars"></i></nav>
    </header>
    <div class="content">
      <h2>sign up now!</h2>
      <div class="form">
        <div class="login">
          <div class="welcome">
            <h1>welcome again</h1>
            <h3>advanced crypto & forex trading community</h3>
            <p>Crypto and Forex learning made easy and interesting.</p>
            <button>
              <router-link to="/login" class="route">sign in</router-link>
            </button>
            <router-link to="/" class="hroute">home</router-link>
          </div>
        </div>
        <form action="/" method="post">
          <h1>sign up</h1>
          <div class="input">
            <label for="username">Name:</label
            ><input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username...."
              required
            />
          </div>
          <div class="input">
            <label for="email">email:</label
            ><input
              type="email"
              name="Email"
              id="email"
              placeholder="Enter Email address...."
              required
            />
          </div>
          <div class="input">
            <label for="password">password:</label
            ><input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password...."
              required
            />
          </div>
          <div class="notification">
            <input type="checkbox" name="notify" id="notify" />
            <label for="notify">get email notifications</label>
          </div>
          <div class="errormsg">
            <p>error message here!</p>
          </div>
          <button type="submit">sign up</button>
        </form>
      </div>
    </div>
    <footer>&copy;copyright_CodingHerald_2022</footer>
  </main>
</template>

<script>
export default {
  name: "Sign_up",
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$fallback: rgb(19, 37, 62);
main {
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

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

  header {
    width: 100%;
    padding: 5px 20px;
    height: 14vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    background: $fallback;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 40vw;
      padding: 0;
      height: 100%;

      &:last-child {
        width: 26vw;
      }

      .route {
        width: 150px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        color: $primaryColor;
        font-size: 16px;

        @media screen and (max-width: 1154px) {
          font-size: 13px;
        }
        @media screen and (max-width: 1021px) {
          font-size: 11px;
        }
      }
    }

    .logo-nav {
      width: 70px;
      height: 70px;
      border-radius: 100%;
      overflow: hidden;
      background: transparent;
      position: relative;
      left: 50px;
      top: 5px;

      #logo {
        width: 105px;
        height: auto;
      }
    }
  }
  .small-screen-header {
    display: none;
  }

  .large-screen-header {
    @media screen and (max-width: 917px) {
      display: none;
    }
  }
  .small-screen-header {
    @media screen and (max-width: 917px) {
      display: flex;

      padding: 0 10px;

      .logo-nav {
        margin-left: 20px;
      }

      .title {
        a {
          text-decoration: none;
          color: white;
          font: 700 30px "Poppins", sans-serif;
          text-transform: uppercase;
        }
        @media screen and (max-width: 450px) {
          display: none;
        }
      }

      .menu-bars {
        color: white;
        font-size: 40px;
      }
    }
  }

  .content {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    padding-top: 30px;
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
      width: 800px;
      height: 480px;
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
          $fallback 10%,

          rgb(36, 74, 121) 100%
        );

        .welcome {
          width: 90%;
          height: 50%;
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
              rgba(230, 101, 129, 1),
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
            width: 200px;
            height: 50px !important;
            border: none;
            border-radius: 5px;
            margin: 20px;
            background: transparent;
            box-shadow: 0 0 0.5px 1px rgb(184, 183, 183);

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
              rgba(204, 149, 6, 1),
              rgba(255, 255, 255, 1)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 10px;
            font: 600 14px "Poppins", sans-serif;
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
          color: $tertiaryColor;
          color: $SecondaryColor;
        }

        .input {
          width: 90%;
          height: 70px;
          margin: 10px auto;

          label {
            width: 100%;
            display: block;
            text-align: left;
            text-transform: capitalize;
            font: 550 20px "Poppins", sans-serif;
            color: rgba(113, 112, 112, 1);
          }

          input {
            display: block;
            width: 98%;
            height: 43px;
            padding: 3px 10px 3px 20px;
            font: 500 17px "Poppins", sans-serif;
            outline: none;
            border: 1px solid rgba(222, 219, 219, 1);
            background: white;
            border-radius: 5px;
          }
        }

        .notification {
          width: 90%;
          margin: auto;
          height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 5px 0;

          input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            outline: none;
            border-radius: 5px;
            border: none;
            box-shadow: 0 0 1px 0.5px rgb(209, 209, 209);
          }
          label {
            text-transform: capitalize;
            font: 530 13px "Poppins", sans-serif;
          }
        }

        .errormsg {
          width: 90%;
          margin: auto;

          p {
            color: rgba(230, 101, 129, 1);
            padding: 5px;
          }
        }

        button {
          width: 87%;
          height: 50px;
          background: $tertiaryColor;
          background: $SecondaryColor;
          color: white;
          font: 700 23px "Poppins", sans-serif;
          border: none;
          border-radius: 5px;
          margin: 10px auto;
        }
      }
      @media screen and (max-width: 821px) {
        width: 100vw;

        @media screen and (max-width: 768px) {
          height: fit-content;
          .login {
            display: none;
          }
          form {
            height: fit-content;
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
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 100px;
    }
  }

  footer {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(202, 201, 201);
  }
}
</style>
