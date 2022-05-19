<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap");

$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;

#app {
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

button:active {
  transform: scale(0.8);
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
  height: fit-content;
  background: url(./assets/social.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  position: relative;

  .title {
    width: 100%;
    height: fit-content;
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

      &:last-child {
        font-family: "Nunito sans", "Poppins", sans-serif;
      }
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
  }

  @keyframes change {
    from {
      top: 0;
    }
    to {
      top: -160px;
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

.to-landing-page {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background: $fallback;
  position: fixed;
  right: 20px;
  bottom: 50px;
  z-index: 1;
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    color: white;
  }
}

#main {
  width: 100%;

  .courses-div {
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

      @media screen and (max-width: 768px) {
        font-size: 30px;
      }
    }

    h4 {
      text-transform: capitalize;
      padding: 20px;
      font: 500 30px "Poppins", sans-serif;
    }

    .courses {
      width: 90%;
      height: fit-content;
      margin: auto;
      padding: 20px;
      display: flex;
      justify-content: space-between;
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
            width: auto;
            height: 100%;
          }
          .fullwidth {
            width: 100%;
            height: auto;
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

            span {
              color: $tertiaryColor;
              font-size: 20px;
              text-transform: uppercase;
              display: block;
              padding: 3px;
            }
          }
          p {
            color: rgb(188, 188, 188);
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
        width: 100%;
        justify-content: center;

        .tutorial {
          width: 90%;
          margin: 50px auto;

          .video-title {
            // height: 300px;
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

    .logo {
      width: auto;
      height: fit-content;
      margin: auto;

      img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }

    h1 {
      padding: 20px;
      margin: 30px auto;
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
      color: $col;

      a {
        display: block;
        color: $SecondaryColor;
      }
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

    .video {
      width: 100%;
      height: fit-content;
      margin: 60px auto;
      margin-bottom: 20px;

      iframe {
        width: 90%;
        height: 80vh;
        margin: auto;
        border-radius: 2px;

        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }
    }

    @media screen and (max-width: 768px) {
      padding: 20px 5px;

      h1 {
        font-size: 30px;
      }
    }
  }
}
</style>
