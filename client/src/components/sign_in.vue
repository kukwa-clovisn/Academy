<template>
  <main>
    <!-- <div class="background"></div> -->
    <div class="c1">
      <img src="../assets/bitcoin.png" alt="BTC" />
    </div>

    <header>
      <nav>logo here!</nav>
      <nav>
        <router-link to="/" class="route">about</router-link>
        <router-link to="/" class="route">why crypto?</router-link>
        <router-link to="/" class="route">blog</router-link>
      </nav>
      <nav>
        <button class="landing-page-btn">
          <router-link to="/register" class="homeBtn">register</router-link>
        </button>
      </nav>
    </header>
    <div class="content">
      <h2>sign in</h2>
      <div class="form">
        <form action="/" method="post">
          <h1>sign in</h1>
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
            <label for="password">password:</label
            ><input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password...."
              required
            />
          </div>
          <div class="errormsg">
            <p>error message here!</p>
          </div>
          <button type="submit">sign up</button>
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
            <h3>advanced crypto & forex trading academy</h3>
            <p>Crypto and Forex learning made easy and interesting.</p>
            <button>
              <router-link to="/signup" class="route">sign up</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer>&copy;copyright_CodingHerald_2022</footer>
  </main>
</template>

<script>
export default {
  name: "Sign_in",
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  min-height: 100vh;
  background: rgb(227, 226, 226);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(
    to bottom right,
    rgb(9, 69, 149),
    rgb(38, 38, 38)
  );

  .background {
    width: 100vw;
    height: 60vh;
    background: linear-gradient(
      to bottom right,
      rgb(9, 69, 149),
      rgb(38, 38, 38)
    );
    position: absolute;
    top: 0vh;
    right: 0;
  }

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
      color: rgb(9, 69, 149);
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
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    //     background: white;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 40vw;
      height: 100%;

      &:first-child {
        width: 20vw;
        border: 1px solid white;
        border-radius: 5px;
        color: white;
      }

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
        color: white;
      }
    }
  }

  .content {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      color: rgb(164, 165, 165);
      font: 500 27px "Russo One", sans-serif;
      padding: 10px;
      //  padding-bottom: 2px;
      text-align: left;
      width: 730px;
      position: relative;
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
        background: linear-gradient(90deg, rgb(2, 61, 139), rgb(66, 152, 249));

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
            font: 700 39px "Poppins", sans-serif;
            color: white;
          }

          h3 {
            font: 600 12px "Poppins", sans-serif;
            text-transform: capitalize;
            padding: 5px;
            background: linear-gradient(
              to bottom,
              rgba(204, 149, 6, 1),
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
            background: rgba(65, 140, 228, 1);
            border: none;
            box-shadow: 0 0 1px 0.5px white;
            border-radius: 5px;
            margin-top: 20px;

            .route {
              text-decoration: none;
              color: white;
              font: 600 20px "Poppins", sans-serif;
            }

            &:hover {
              background: transparent;
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
          color: rgba(65, 140, 228, 1);
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
          width: 88%;
          height: 50px;
          background: rgba(65, 140, 228, 1);
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

              color: rgb(6, 99, 207);
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }

  footer {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(216, 216, 216);
  }
}
</style>
