<template>
  <main>
    <div class="landing-page">
      <div id="blur"></div>
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
      </div>
    </div>
    <div class="courses-div" id="courses">
      <div class="blur"></div>
      <h1>Explore our top courses</h1>
      <p>
        Find out the best and outstanding courses in the area of your choice
        with the best and experienced instructors online. Also get online
        mentorship for your course of choice
      </p>

      <section class="courses">
        <div class="course">
          <div class="course-img">
            <img src="../assets/ch1.png" alt="" />
          </div>

          <h3>one month</h3>
          <h5>Learn about crypto & Forex</h5>
          <p>
            Start from a newbie into becomimg a profitable crypto trader in less
            than no time. <br />
            Register now to start your lessons
          </p>
          <button>
            <router-link to="/register" class="route"
              >Register now!</router-link
            >
          </button>
        </div>
        <div class="course">
          <div class="course-img">
            <img src="../assets/web-dev.jpg" alt="" />
          </div>

          <h3>three months <span>locked</span></h3>
          <h5>Learn web development</h5>
          <p>
            Have you ever thought of learning web development and it seems hard?
            here we have everything made easy for you. <br />
            register now to start your lessons
          </p>
          <button>
            <router-link to="/register" class="route"
              >register now!</router-link
            >
          </button>
        </div>
        <div class="course">
          <div class="course-img">
            <img src="../assets/graphic-design.jpg" alt="" />
          </div>

          <h3>one month <span>locked</span></h3>
          <h5>learn graphic design</h5>
          <p>
            Learn phone and computer design and how to use design apps in less
            than a month. <br />
            register now to start your lessons
          </p>
          <button>
            <router-link to="/register" class="route"
              >register now!</router-link
            >
          </button>
        </div>
      </section>
    </div>
    <div class="course-expo">
      <div class="img">
        <img src="../assets/team.jpg" alt="" />
      </div>
      <div class="expo">
        <div class="expo-level">
          <h3>beginners</h3>
          <div class="content">
            <p>
              Basics and fundamentals of the Blockchain and the essentials
              therein.
            </p>
            <button>
              <a href="/signup"><i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
        </div>
        <div class="expo-level">
          <h3>intermediates</h3>
          <div class="content">
            <p>Trading strategies and market structures</p>
            <button>
              <a href="/signup"><i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
        </div>
        <div class="expo-level">
          <h3>Advanced</h3>
          <div class="content">
            <p>
              Risk management and ways to become a profitable trader and more.
            </p>
            <button>
              <a href="/signup"><i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <header>
        <h1>The World’s Largest And Fast Growing Technology</h1>
        <p>
          The Crypto & Forex market can be a very strategic and pretty dangerous
          place for just anybody to rush in without knowledge. <br />
          In the Crypto & Forex market, it is either you learn from experience
          or you learn with experience and you might be wondering what tha means
          well i will tell you. <br />
          What you are going to be learning are strategies and ways that experts
          have tried, tested and proven true and that will save you from loosing
          you money in the crypto & forex market. This might sound a little bit
          not true but as you dig deep into the cryptocurrency space, you will
          get to understand that before anything, knowledge is most import and
          like the saying goes
          <span>invest in whatever will bring you profit</span>. Pay and learn
          and be filled with the adequate knowledge need. Therr's always a price
          to be paid for anything that is worth doing or worth investing in. All
          you have to do is to pay the price today and rejoice tomorrow. Surely
          you will be glad you did.
        </p>
      </header>
      <div class="content">
        <ul>
          <li>
            <span class="name">Bitcoin</span><span class="symbol">BTC</span
            ><span class="percentage">+1.00%</span>
            <span class="value">$40,290.18</span>
          </li>
          <hr />
          <li>
            <span class="name">ethereum</span><span class="symbol">eth</span
            ><span class="percentage">+2.34%</span>
            <span class="value">$3,074.30</span>
          </li>
          <hr />
          <li>
            <span class="name">dogecoin</span><span class="symbol">doge</span
            ><span class="percentage">+3.46%</span>
            <span class="value">$0.142228</span>
          </li>
          <hr />
          <li>
            <span class="name">polkadot</span><span class="symbol">dot</span
            ><span class="percentage">+3.24%</span>
            <span class="value">$17.96</span>
          </li>
          <hr />
          <li>
            <span class="name">cardano</span><span class="symbol">ada</span
            ><span class="percentage">+3.14%</span>
            <span class="value">$0.964214</span>
          </li>
          <hr />
        </ul>
      </div>
    </div>
    <div class="social-sample">
      <div class="blur"></div>
      <div class="left-content">
        <h2>investing in yourself</h2>
        <h4>Great men are men who are never scared of learning...</h4>
        <p>
          If you've come this far then you really are curious to learn. Why not
          join the moving train now and start learning!!
        </p>
        <div class="btns">
          <button>
            <router-link to="/signup" class="route">signup now!</router-link>
          </button>
          <button>
            <router-link to="/login" class="route">signin</router-link>
          </button>
        </div>
      </div>
      <div class="right-content">
        <!-- <img src="../assets/male.jpeg" alt="" /> -->
        <div class="img"><img src="../assets/group.jpeg" alt="" /></div>
      </div>
    </div>

    <div class="section-2">
      <div class="video-div">
        <h2>Real investment is investing in knowledge(learning)</h2>
        <p>
          Why not try out our courses prepared to see you through your learning!
        </p>
        <button>
          <router-link to="/signup" class="route">start learning</router-link>
        </button>
      </div>
    </div>
    <div class="bitquery">
      <div class="content-1">
        <div class="left-div">
          <img src="../assets/Group-1-1.png" alt="" />
        </div>
        <div class="right-div">
          <h2>lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
            dolorum eius laborum ut, eos et rem qui laudantium hic totam facilis
            sequi, ratione adipisci cum incidunt nam. Voluptatem saepe
            voluptatibus recusandae accusantium nobis impedit, natus
            consequuntur vitae rem corporis enim, reprehenderit veniam mollitia
            sunt porro quisquam eos ipsa architecto!
          </p>
          <button>learn more....</button>
        </div>
      </div>
      <div class="content-2">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae
          et id dolor veritatis numquam hic nemo, nulla voluptas dignissimos
          necessitatibus sint, animi porro expedita. Labore nulla ducimus rerum
          iusto quisquam repellat dicta enim numquam dolor eligendi, nisi sequi
          aperiam adipisci vitae, minima provident inventore perferendis tempore
          dolorum aliquam consequuntur earum obcaecati. Repellendus, nulla?
          Accusantium reprehenderit illo sit quibusdam, consequuntur odio
          reiciendis tenetur? Aliquid debitis ad temporibus possimus commodi
          sequi.
        </p>
        <button>get started</button>
      </div>
    </div>
    <div class="illustration-1">
      <Carousel />
      <div class="blur"></div>
      <div class="illustration-content">
        <h1>Want to learn....</h1>
        <ul>
          <li>how to be a profitable trader??</li>
          <li>web development</li>
          <li>graphic design</li>
        </ul>
        <button>
          <router-link to="/signup" class="route"
            ><i class="fa fa-arrow-right" id="illustration-icon"></i> sign up
            and Register</router-link
          >
        </button>
      </div>
    </div>

    <div class="contact-form" id="contact">
      <div class="bubble"></div>
      <div class="blur"></div>
      <h1>get in touch!</h1>
      <h6>
        We deal and handle many businesses that will interest you. Check out our
        list of services we offer...
      </h6>
      <div class="contact-header">
        <nav>
          <i class="fa-brands fa-whatsapp icon"></i>
          <p>+237682449347</p>
        </nav>
        <nav>
          <i class="fa-solid fa-phone icon"></i>
          <p>+237682449347</p>
        </nav>
        <nav>
          <i class="fa-solid fa-envelope icon"></i>
          <p>kukwaclovisngong3@gmail.com</p>
        </nav>
      </div>
      <form action="post">
        <h2>contact us!</h2>
        <div class="top-form">
          <div class="credentials">
            <div class="input">
              <label for="name">Name:</label>
              <div class="input-field">
                <i class="fa-regular fa-user"></i
                ><input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name..."
                  required
                />
              </div>
            </div>
            <div class="input">
              <label for="email">email:</label>
              <div class="input-field">
                <i class="fa-solid fa-envelope icon"></i
                ><input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email.."
                  required
                />
              </div>
            </div>
            <div class="input">
              <label for="phone">Phone:</label>
              <div class="input-field">
                <i class="fa-solid fa-mobile-screen-button"></i
                ><input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone number..."
                  required
                />
              </div>
            </div>
          </div>
          <div class="message">
            <label for="message">message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message here!"
              required
            ></textarea>
          </div>
        </div>
        <div class="bottom-form">
          <h3>services</h3>
          <div class="form-services">
            <div class="service"><span>web developement</span></div>
            <div class="service"><span>graphic design</span></div>
            <div class="service"><span>crypto & forex</span></div>
          </div>
        </div>
        <div class="btns">
          <button type="reset">
            <i class="fa-solid fa-ban"></i>
            <span>cancel</span>
          </button>
          <button type="submit">
            <i class="fa-regular fa-paper-plane"></i> <span>send message</span>
          </button>
        </div>
      </form>
    </div>

    <span class="to-landing-page"
      ><a href="/"><i class="fa-solid arrow-up"></i></a
    ></span>
    <footer>
      &copy;copyright_codingHerald_2022||<a href="/admin">admin</a>
    </footer>
  </main>
</template>

<script>
import Carousel from "./carousel.vue";
import Header from "./header.vue";
export default {
  name: "Home",
  components: { Header, Carousel },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$fallback: rgb(19, 37, 62);
main {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.landing-page {
  position: relative;
  #blur {
    width: 100%;
    height: 100%;
    background: $fallback;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.85;
  }
}

.course-expo {
  width: 100vw;
  height: 99vh;
  background: $fallback;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 45%;
    border-radius: 10px 0 10px 0;
    transform: rotateZ(10deg);
    box-shadow: 3px 3px 2px 1px rgb(171, 171, 171);

    img {
      width: 90%;
      height: auto;
      border-radius: 20px 0 20px 0;
    }
  }

  .expo {
    width: 50%;
    padding: 10px;

    .expo-level {
      margin-bottom: 20px;
      margin-left: 10px;
      padding-left: 10px;
      position: relative;

      &::before {
        content: "";
        width: 50px;
        height: 3px;
        border-radius: 0 30px 30px 0;
        background: $SecondaryColor;
        position: absolute;
        top: -5px;
        left: 10px;
      }
      h3 {
        text-align: left;
        font: 600 15px "Nunito sans", sans-serif;
        text-transform: uppercase;
        padding: 5px;
        color: $SecondaryColor;
      }

      .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          text-align: left;
          font: 700 23px "Poppins", sans-serif;
          width: 80%;
          color: rgb(212, 211, 211);
          border: 1px soid white;
        }
        button {
          width: 70px;
          height: 50px;
          transform: rotateZ(30deg);
          background: $SecondaryColor;
          border: none;
          border-radius: 0 2px 2px 0;

          a {
            color: white;
            font-size: 20px;
          }
        }
      }
    }
  }
}

.section-1 {
  width: 100vw;
  height: fit-content;
  background: whitesmoke;
  padding: 20px;

  header {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      width: 90%;
      margin: auto;
      padding: 20px;
      padding-bottom: 0;
      font: 800 60px "Poppins", sans-serif;

      @media screen and (max-width: 830px) {
        width: 98%;
        font-size: 40px;
      }
    }

    p {
      width: 90%;
      margin: 30px auto;
      padding: 10px;
      padding-top: 0;
    }

    .section-3-def {
      width: 95vw;
      margin: auto;
      height: fit-content;
      padding: 20px 5px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .def {
        width: 48%;
        height: fit-content;
        h1 {
          padding: 10px;
          font: 700 25px "Poppins", sans-serif;

          span {
            color: rgb(58, 141, 235);
          }
        }

        p {
          padding: 0;
          font-family: serif;
          line-height: 30px;
          font-size: 18px;
          text-align: left;
        }

        @media screen and (max-width: 1000px) {
          width: 100%;
          margin: 15px auto;

          p {
            text-align: center;
          }
        }
      }
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
    }
  }

  .content {
    width: 100%;
    margin: 30px auto;

    ul {
      width: 80vw;
      height: fit-content;
      margin: 20px auto;

      li {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        .name,
        .symbol,
        .percentage,
        .value {
          text-align: left;
          width: 20%;
          font-weight: 600;
        }

        .name {
          text-transform: capitalize;
          font-weight: 600;
          color: rgba(129, 115, 46, 1);
        }
        .symbol {
          text-transform: uppercase;
        }

        .percentage {
          color: rgb(3, 177, 174);
        }
        @media screen and (max-width: 400px) {
          .symbol {
            display: none;
          }
          .name,
          .percentage,
          .value {
            font-size: 13px;
          }
        }
        @media screen and (max-width: 300px) {
          .name,
          .percentage,
          .value {
            font-size: 10px;
          }
        }
      }
    }
  }
}

.social-sample {
  width: 85vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px auto;
  padding: 20px 5px;
  .blur {
    display: none;
  }
  .left-content {
    position: relative;
    width: 45%;

    h2 {
      padding: 10px;
      padding-bottom: 3px;
      font: 800 40px "poppins", sans-serif;
      text-transform: capitalize;
      color: rgba(230, 101, 129, 1);
    }
    h4 {
      font: 600 25px "Poppins", sans-serif;
      padding-bottom: 10px;
    }
    p {
      padding: 10px;
    }

    .btns {
      width: 100%;
      height: fit-content;
      padding: 10px;
      // border: 1px solid red;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      button {
        width: 200px;
        height: 45px;
        border-radius: 3px;
        display: block;
        border: none;
        margin-top: 10px;
        background: rgba(230, 101, 129, 1);

        &:last-child {
          background: rgba(218, 121, 121, 1);
        }
        .route {
          text-decoration: none;
          text-transform: capitalize;
          color: white;
          font: 500 15px "Poppins", sans-serif;
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;

      h4,
      p {
        color: white;
      }
    }
    @media screen and (max-width: 460px) {
      h2 {
        font-size: 30px;
      }

      h4 {
        font-size: 19px;
      }
      button {
        margin-top: 20px;
      }
    }
  }

  .right-content {
    width: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 400px;
      height: 400px;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        display: block;
      }
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    background: url(../assets/group.jpeg);
    background-size: cover;
    background-attachment: scroll;
    background-repeat: no-repeat;
    .blur {
      display: block;
    }
  }
}

.section-2 {
  width: 100vw;
  height: fit-content;
  padding: 50px 10px;
  position: relative;
  margin-bottom: 50px;
  h2 {
    padding: 10px;
    font: 700 30px "Poppins", sans-serif;
  }
  p {
    width: 85vw;
    margin: auto;
    line-height: 30px;
    font: 500 17px "Poppins", sans-serif;
    padding: 10px;
    word-spacing: 2px;
  }

  .video-div {
    width: 90vw;
    height: fit-content;
    margin: 30px auto;
    position: relative;

    h2 {
      color: $SecondaryColor;
      text-transform: capitalize;
    }

    p {
      color: rgb(3, 55, 123);
      width: 100%;
    }
    button {
      width: 250px;
      height: 45px;
      border-radius: 3px;
      border: none;
      margin: 20px auto;
      background: transparent;
      box-shadow: 0 0 1px 2px $SecondaryColor;

      .route {
        text-decoration: none;
        color: $SecondaryColor;
        text-transform: uppercase;
      }
    }

    @media screen and (max-width: 1160px) {
      width: 100vw;
    }
    @media screen and (max-width: 1050px) {
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 680px) {
    padding: 0;
  }
}

.illustration-1 {
  width: 100vw;
  height: 90vh;
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .illustration-content {
    width: 70vw;
    height: fit-content;
    position: relative;
    padding: 20px;
    // background: white;
    border-radius: 3px;
    opacity: 0.85;

    h1 {
      margin: auto;
      font: 800 50px "Poppins", sans-serif;
      padding: 10px;
      position: relative;
      color: rgb(213, 231, 251);

      @media screen and (max-width: 535px) {
        font-size: 30px;
      }
    }
    ul {
      width: 100%;
      height: fit-content;
      padding-left: 30px;

      li {
        list-style-type: square;
        text-align: left;
        padding: 10px 30px;
        font: 500 22px "Poppins", sans-serif;
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.4s ease;
        width: 500px;
        height: 50px;
        color: white;
        font-weight: 550;
        text-transform: capitalize;

        &:hover {
          text-align: center;
          border-radius: 3px;
          background: linear-gradient(
            to right,
            rgb(58, 141, 235),
            rgb(2, 54, 113)
          );
          color: white;
          transform: translateX(150px);
        }

        @media screen and (max-width: 800px) {
          width: 97%;
          font-size: 14px;
          &:hover {
            transform: translateX(5px);
          }
        }
      }
    }
    button {
      display: block;
      width: 300px;
      height: 60px;
      padding: 10px 20px;
      margin: 25px auto;
      position: relative;
      border-radius: 3px;
      background: rgb(185, 62, 130);
      border: none;

      .route {
        text-decoration: none;
        text-transform: capitalize;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 22px;
      }
    }
    @media screen and (max-width: 800px) {
      width: 100vw;
    }
  }

  img {
    display: block;
    width: 80%;
    height: auto;
    margin: 10px auto;
  }
}

.courses-div {
  width: 100vw;
  height: fit-content;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;

  .blur {
    opacity: 0.3 !important;
  }

  h1 {
    padding: 10px;
    text-transform: capitalize;
    font: 800 35px "Poppins", sans-serif;
    position: relative;
    color: rgb(17, 59, 116);
  }

  p {
    width: 80vw;
    padding: 10px;
    padding-bottom: 40px;
    position: relative;
    margin: auto;
    color: rgb(17, 59, 116);
  }

  .courses {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 90vw;
    padding: 10px;
    margin: auto;
    position: relative;

    .course {
      width: 335px;
      height: 450px;
      padding-bottom: 10px;
      background: white;
      margin: 20px 20px;
      border-radius: 3px;

      .course-img {
        width: 100%;
        height: 180px;
        overflow: hidden;
        margin-bottom: 5px;
        img {
          width: 100%;
          cursor: pointer;
        }
      }

      h3 {
        width: 95%;
        margin: auto;
        padding: 10px;
        color: rgba(230, 101, 129, 1);
        text-transform: capitalize;
        text-align: left;
        position: relative;

        span {
          color: $tertiaryColor;
          position: absolute;
          right: 0;
          top: 0;
          padding: 2px;
          background: $SecondaryColor;
          font-size: 14px;
        }
      }

      h5 {
        width: 95%;
        font: 700 19px "Poppins", sans-serif;
        margin: auto;
        text-transform: capitalize;
        text-align: center;
      }
      p {
        padding: 5px;
        line-height: 25px;
        width: 90%;
        line-height: 26px;
        margin: auto;
        text-align: center;
        color: #3d566f;
        font: 500 14px "Poppins", sans-serif;
      }

      button {
        width: 85%;
        height: 50px;
        border-radius: 2px;
        margin: 20px auto;
        margin-bottom: 10px;
        border: none;

        background: rgba(230, 101, 129, 1);
        .route {
          color: white;
          text-decoration: none;
          text-transform: capitalize;
          font: 600 18px "Poppins", sans-serif;
        }
      }
      @media screen and (max-width: 338px) {
        width: 100%;
        height: 420px;
      }
    }
    @media screen and (max-width: 450px) {
      width: 100vw;
      padding: 0;
    }
  }
}

.contact-form {
  width: 100vw;
  height: fit-content;
  padding: 30px 5px 20px 5px;
  position: relative;
  margin-bottom: 0;
  background: linear-gradient(
    to bottom right,
    rgb(57, 7, 100),
    rgb(185, 62, 130),
    rgba(230, 101, 129, 1)
  );

  .bubble {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: white;
    position: absolute;
    top: 10%;
    opacity: 0.2;
    left: 5%;
  }

  .blur {
    position: absolute;
    height: 50%;
    top: 50%;
    bottom: 0 !important;
    left: 0;
    overflow: hidden;
    opacity: 1;
    // box-shadow: 3px 0 1px 2px white;
    border-radius: 70% 0 0 0;
    background: linear-gradient(to right, rgb(45, 84, 138), $fallback);
  }

  h1 {
    padding: 20px;
    padding-bottom: 10px;
    text-transform: capitalize;
    color: white;
  }

  h6 {
    color: rgb(194, 194, 194);
    padding: 10px;
    font: 400 13px "Poppins", sans-serif;
  }

  .contact-header {
    width: 850px;
    margin: 10px auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    nav {
      width: 270px;
      height: 70px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      padding: 0;
      transition: all 0.3s ease;

      .icon {
        color: white;
      }
      p {
        padding: 0;
        color: rgb(219, 217, 217);
        @media screen and (max-width: 393px) {
          font-size: 8px;
        }
      }

      &:hover {
        border-radius: 5px;
        background: white;

        i,
        p {
          color: rgba(22, 54, 123, 1);
        }
      }
    }
    @media screen and (max-width: 860px) {
      width: 95vw;
      margin: auto;

      nav {
        width: 28%;

        p {
          font-size: 10px;
        }
        &:last-child {
          width: 40%;
        }
        @media screen and (max-width: 323px) {
          width: 35%;
          &:first-child {
            display: none;
          }
          &:last-child {
            width: 60%;
          }
        }
      }
    }
  }

  form {
    width: 900px;
    height: fit-content;
    background: white;
    position: relative;
    margin: 10px auto;
    padding: 20px;
    border-radius: 5px;

    h2 {
      padding: 10px;
      text-transform: capitalize;
      width: 100%;
      text-align: center;
      color: rgba(22, 54, 123, 1);
    }

    .top-form {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .credentials {
        width: 48%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .input {
          width: 100%;
          height: 85px;

          label {
            text-align: left;
            text-transform: capitalize;
            display: block;
            color: rgba(22, 54, 123, 1);
            font: 700 18px "Poppins", sans-serif;
            width: 100%;
            padding: 2px 0 4px 0;
          }

          .input-field {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            background: rgba(255, 251, 251, 1);
            box-shadow: 0 0 0.3px 1px rgb(250, 240, 240);

            i {
              width: 15%;
              height: 100%;
              color: rgba(25, 24, 81, 0.7);
            }
            input {
              width: 100%;
              height: 50px;
              display: block;
              border: none;
              background: inherit;
              color: rgba(22, 53, 123, 0.54);
              outline: none;
            }

            &:hover {
              background: white;
              border: 2px solid rgba(218, 121, 121, 1);

              i {
                color: rgba(218, 121, 121, 1);
              }
            }
          }
        }
      }
      .message {
        width: 48%;
        height: 300px;

        label {
          text-align: left;
          text-transform: capitalize;
          display: block;
          color: rgba(22, 54, 123, 1);
          font: 800 18px "Poppins", sans-serif;
          width: 100%;
          padding: 2px 0 4px 0;
        }
        textarea {
          display: block;
          width: 100%;
          height: 90%;
          padding: 10px 20px;
          border: none;
          background: rgba(255, 251, 251, 1);
          box-shadow: 0 0 0.5px 3px rgba(255, 251, 251, 1);
          border-radius: 3px;
          box-shadow: 0 0 0.3px 1px rgb(250, 240, 240);
          outline: none;

          &:hover {
            box-shadow: 0 0 0.5px 1px rgba(230, 101, 129, 1);
            background: white;
          }
        }
      }
      @media screen and (max-width: 600px) {
        flex-direction: column;

        .credentials,
        .message {
          width: 95%;
          margin: auto;
        }
      }
    }

    .bottom-form {
      width: 95%;
      margin: auto;

      h3 {
        text-align: left;
        text-transform: capitalize;
        color: rgba(22, 54, 123, 1);
        font: 800 19px "Poppins", sans-serif;
        padding: 10px;
        padding-left: 0;
      }

      .form-services {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .service {
          width: 31%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          background: rgba(241, 245, 245, 1);
          cursor: pointer;

          span {
            text-transform: capitalize;
            color: rgba(22, 54, 123, 1);
            font: 500 16px "Poppins", sans-serif;
          }

          &:hover {
            box-shadow: 0 0 0.6px 2px rgba(230, 101, 129, 1);
            background: white;
            span {
              color: rgba(230, 101, 129, 1);
            }
          }
          @media screen and (max-width: 468px) {
            width: 32%;
            span {
              font-size: 10px;
              font-weight: 600;
            }
          }
        }
      }
    }
    .btns {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      button {
        width: 47%;
        height: 60px;
        background: rgba(218, 121, 121, 1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        i {
          color: white;
          margin-right: 10px;
          font-size: 20px;
        }
        span {
          color: white;
          font: 500 18px "Poppins", sans-serif;
          text-transform: capitalize;
        }
      }
      @media screen and (max-width: 448px) {
        flex-direction: column;

        button {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
    @media screen and (max-width: 950px) {
      width: 100vw;
      margin: 0 !important;
    }
  }
  @media screen and (max-width: 920px) {
    padding-left: 0;
    padding-right: 0;
  }
}

.bitquery {
  width: 100vw;
  height: fit-content;

  .content-1 {
    width: 96vw;
    height: 65vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    .left-div {
      width: 40%;
      height: 100%;
      overflow: hidden;
      img {
        display: block;
        width: 90%;
        margin: auto;
        height: auto;
      }
    }

    .right-div {
      width: 58%;
      height: 100%;
      padding: 20px;

      h2 {
        padding: 10px;
        font: 600 24px "Nunito sans", sans-serif;
        text-transform: capitalize;
      }
      p {
        font: 500 17px "Poppins", sans-serif;
        padding: 10px;
      }

      button {
        width: 200px;
        height: 50px;
        background: radial-gradient($SecondaryColor, $fallback);
        border: 2px double $SecondaryColor;
        color: $primaryColor;
        border-radius: 3px;
        text-transform: capitalize;
        margin: 15px auto;
        font: 600 19px "Nunito sans", sans-serif;
      }
    }
  }
  .content-2 {
    width: 90vw;
    height: fit-content;
    margin: auto;
    padding: 20px;

    h1 {
      padding: 10px;
      font: 700 30px "Poppins", sans-serif;
      text-transform: capitalize;
    }
    p {
      padding: 10px;
      font-family: "Poppins", sans-serif;
    }

    button {
      width: 200px;
      height: 50px;
      background: $SecondaryColor;
      border: 2px double $SecondaryColor;
      color: $primaryColor;
      border-radius: 3px;
      text-transform: capitalize;
      margin: 15px auto;
      font: 600 19px "Nunito sans", sans-serif;
    }
  }
}

footer {
  background: linear-gradient(to right, rgb(45, 84, 138), $fallback);
  width: 100vw;
  height: 10vh;
  margin: 0;
  color: rgb(185, 182, 182);

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: $SecondaryColor;
  }
}
</style>
