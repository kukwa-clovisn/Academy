<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&display=swap");

$fallback: rgb(19, 37, 62);
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3d566f;
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}
* {
  transition: all 0.3s ease;
}

button,
a,
label {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  padding: 30px;

  a {
    color: #072e54;
    font: 600 23px sans-serif;
    text-transform: capitalize;
    padding: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #14bb70;
    }
  }
}

.blur {
  width: 100%;
  height: 100%;
  background: rgb(31, 28, 45);
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
}

.primary-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: rgb(35, 66, 110);
  border-radius: 3px;
  display: block;

  .homeBtn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: capitalize;
    font: 700 20px "Poppins", sans-serif;
    text-decoration: none;
  }
}

.landing-page {
  width: 100vw;
  height: 100vh;
  background: url(./assets/social.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  position: relative;

  .title {
    width: 100%;
    height: 83vh;
    position: relative;
    margin: auto;
    padding: 20px;
    top: 20px;

    h1 {
      text-transform: capitalize;
      font: 800 50px "Poppins", sans-serif;
      color: white;
      padding: 10px;
      padding-top: 75px;
      @media screen and (max-width: 385px) {
        font-size: 40px;
      }
    }

    p {
      font: 500 13px "Poppins", sans-serif;
      color: white;
    }

    button {
      width: 200px;
      height: 50px;
      margin: 30px auto;
      margin-bottom: 5px;

      .homeBtn {
        animation: blink 1.7s infinite alternate forwards;
      }
      &:hover {
        background: transparent;
        border: 1px solid white;
      }
      @keyframes blink {
        from {
          left: 0;
          opacity: 1;
        }
        to {
          left: 60vw;
          opacity: 0.3;
        }
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
      animation: run 2s linear infinite alternate forwards;
    }
  }

  @keyframes run {
    from {
      left: 0;
      opacity: 1;
    }
    to {
      left: 60vw;
      opacity: 0;
    }
  }

  #blur {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: black;
  }
}
</style>
