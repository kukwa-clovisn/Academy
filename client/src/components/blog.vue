<template>
  <main>
    <div class="landing-page">
      <div class="blur"></div>
      <Header />
      <div class="title">
        <h1>
          Advanced <br />
          crypto & forex community
        </h1>
        <p>
          this is a crypto trading website where you get to learn all about
          crypto currency and also how to trade with crypto and forex
        </p>
        <button class="primary-btn">
          <router-link to="/signup" class="homeBtn">sign up</router-link>
        </button>
        <h1 class="title-head">our blog stats</h1>
      </div>
    </div>
    <div class="section-1">
      <h1>Advanced crypto & forex trading community blog</h1>
      <p>
        Here we update our latest news titles and all that has to do with our
        academy. stay tunned and follow us even on our social media platforms to
        find out what we have in store for you!
      </p>
      <div class="flex-div">
        <div class="flex-content">
          <div class="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <h2>our news update</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            dolores, odit repellat maxime iusto qui quo veritatis voluptate,
            ipsam corrupti sed accusamus odio porro eaque nam nostrum maiores?
            Deserunt, molestiae!
          </p>
        </div>
        <div class="flex-content">
          <div class="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <h2>our news update</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            dolores, odit repellat maxime iusto qui quo veritatis voluptate,
            ipsam corrupti sed accusamus odio porro eaque nam nostrum maiores?
            Deserunt, molestiae!
          </p>
        </div>
        <div class="flex-content">
          <div class="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <h2>our news update</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            dolores, odit repellat maxime iusto qui quo veritatis voluptate,
            ipsam corrupti sed accusamus odio porro eaque nam nostrum maiores?
            Deserunt, molestiae!
          </p>
        </div>
      </div>
    </div>
    <div class="section-2">
      <section>
        <h2>want to get life changing updates??</h2>
        <p>
          sign up and register to our academy and get the most of what you want.
          We offer learning and mentorship services and do so excellently well.
          <br />
          Don't wait for tomorrow
        </p>
        <button><a href="/signup">start now!</a></button>
      </section>
    </div>
  </main>
</template>

<script>
import Header from "./header.vue";
export default {
  name: "Blog",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
$fallback: rgb(19, 37, 62);
main {
  .landing-page {
    background: url(../assets/learn-b.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .title {
      top: 50px;

      h1 {
        padding: 30px;
        padding-bottom: 10px;
      }
      .title-head {
        text-transform: uppercase;
        color: rgb(222, 221, 221);
        font: 600 30px "Poppins", sans-serif;
      }
    }
  }

  .section-1 {
    width: 100vw;
    min-height: 100vh;
    background: $fallback;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px;

    h1 {
      padding: 10px;
      font: 700 50px "Noto sans", "Poppins", sans-serif;
      color: white;
      text-transform: capitalize;
      padding-top: 50px;
    }
    p {
      width: 90%;
      margin: auto;
      padding: 20px 10px;
      color: rgb(166, 193, 206);
    }

    .flex-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90vw;

      .flex-content {
        width: 350px;
        height: 400px;
        border-radius: 5px;
        padding: 20px;
        background: rgb(22, 46, 76);

        .icon {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          margin: 10px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(182, 189, 196);

          i {
            font-size: 40px;
          }
        }

        h2 {
          text-transform: capitalize;
          font: 500 30px "Noto sans", "Poppins", sans-serif;
          color: white;
        }

        p {
          padding: 10px;
          color: rgb(194, 194, 194);
        }
      }
    }
  }

  .section-2 {
    width: 100vw;
    height: 80vh;
    background: $fallback;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      width: 60vw;
      height: fit-content;

      h2 {
        font: 600 25px "Poppins", sans-serif;
        padding: 10px;
        color: white;
      }

      p {
        padding: 10px;
      }
      button {
        width: 250px;
        height: 50px;
        border: none;
        margin: 10px auto;
        border-radius: 5px;
        background: rgb(123, 159, 221);

        a {
          color: $fallback;
          text-decoration: none;
          text-transform: capitalize;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font: 500 19px "Poppins", sans-serif;
        }
      }
    }
  }
}
</style>
