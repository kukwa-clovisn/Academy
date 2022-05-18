<template>
  <main id="main">
    <div class="courses-div" v-if="crypto.courses">
      <h2>Learn cryptocurrency today!</h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse1()">
          <div class="video">
            <img class="fullwidth" src="../assets/lap.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3><span>binance</span> How to use Binance smart phone App</h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse2()">
          <div class="video">
            <img src="../assets/trust-wallet.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>trust wallet</span> How to use trust wallet smart phone App
            </h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse3()">
          <div class="video">
            <img
              class="fullwidth"
              src="../assets/Cryptocurrency_logos.jpg"
              alt=""
            />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>cryptocurrency crash course</span> Cryptocurrency for
              beginners <br />what is crypto??
            </h3>
            <p>30 videos</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse4()">
          <div class="video">
            <img class="fullwidth" src="../assets/crypto.jpeg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>investing in crypto</span> How to invest in cryptocurrency
              and why
            </h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse5()">
          <div class="video">
            <img class="fullwidth" src="../assets/phone-a.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3><span>crypto apps</span> Five(5) free crypto apps to use</h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse6()">
          <div class="video">
            <img class="fullwidth" src="../assets/phone-c.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>bitrue</span> How to buy and hold coins for long using
              bitrue
            </h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="crypto.course1">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>How to use Binance smart phone App</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a"><span>1</span> Account settings</a>
        </li>
        <li>
          <a href="#a"><span>2</span> settings and security</a>
        </li>
        <li>
          <a href="#a"><span>3</span> wallet overview</a>
        </li>
        <li>
          <a href="#a"><span>4</span> Deposite, withdrawal and transfer</a>
        </li>
        <li>
          <a href="#a"><span>5</span> buy and sell cryptocurrencies</a>
        </li>
        <li>
          <a href="#a"><span>6</span>convert cryptocurrencies</a>
        </li>
        <li>
          <a href="#a"><span>7</span>trade market(spot trading)</a>
        </li>
        <li>
          <a href="#a"><span>8</span> Binane coin staking(Binance earn)</a>
        </li>
      </ul>
      <h2 id="a1">
        <span>1.</span> How to have binance installed in your mobile phone
      </h2>
      <p>
        Carrying out this tutorial you need to have an android or at least a
        smart phone that can accesss the playstore and also run some internet
        operations without any problem.
      </p>
      <p>
        To install the binance app on your smart phone, get to your phone and
        head straight to the playstore in your smart phone and next your search
        "Binance app" you will find many different options or choices of the
        binance app to download you download the verified version of the Binance
        app and hit install and thats pretty all for the installation process.
        <br />
        After the app has been installed, you hit open and it'll take you
        directly to the binance app.
      </p>
      <p>
        Now if you're already a binance user, then you don't need to go about
        reinstalling it again if you already have it installed.
      </p>
      <h2 id="a2"><span>2.</span> Creating a Binance account</h2>
      <p>
        Now after the installation process have been successfully completed, you
        need to have an account a Binance account so to create one you follow
        the steps outlined below to become a Binance user.
      </p>
      <div class="video">
        <iframe
          width="560"
          height="auto"
          id="a"
          src="https://www.youtube.com/embed/pEPLLQToLxU"
          title="Binance for beginners on mobile(phone)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Binance on smart Phone App tutorial<sup>*</sup></p>
      <h4>
        There's more to the Binance app using the spot market understanding the
        futures market, staking coins and more but knowledge with direction
        without mentorship will easily lead you astray. Join our mentorship
        program so we can follow and direct you on how to go about.
        <a href="/#contact">Join mentorship program</a>
      </h4>
      <Contact />
    </div>
    <div class="single-tutorial course-2" v-if="crypto.course2">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>how to use the Binance app on mobile(Phone)</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#b"><span>1</span> setup and security</a>
        </li>
        <li>
          <a href="#b"><span>2</span>tokens tab</a>
        </li>
        <li>
          <a href="#b"><span>3</span>send and receive tokens</a>
        </li>
        <li>
          <a href="#b"><span>4</span>buy cryptocurrencies</a>
        </li>
        <li>
          <a href="#b"><span>5</span>finance tab and staking</a>
        </li>
        <li>
          <a href="#b"><span>6</span>How to swap and exchange coins</a>
        </li>
      </ul>
      <h2 id="b1">
        <span>1.</span> How to have trust wallet installed in your mobile phone
      </h2>
      <p>
        Carrying out this tutorial you need to have an android or at least a
        smart phone that can accesss the playstore and also run some internet
        operations without any problem.
      </p>
      <p>
        To install the trust wallet app on your smart phone, get to your phone
        and head straight to the playstore in your smart phone and next your
        search "trust wallet" you will find many different options or choices of
        the binance app to download you download the verified version of the
        Binance app and hit install and thats pretty all for the installation
        process.
        <br />
        After the app has been installed, you hit open and it'll take you
        directly to the trust wallet app.
      </p>
      <div class="video">
        <iframe
          width="560"
          id="b"
          height="315"
          src="https://www.youtube.com/embed/BdWCVKINwKc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Trust wallet app on mobile(phone) App</p>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course3">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>Cryptocurrency full course from Beginner to firm investor</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c"><span>1</span> what are cryptocurrencies</a>
        </li>
        <li>
          <a href="#c"><span>2</span>funamentals of cryptocurrencies</a>
        </li>
        <li>
          <a href="#c"><span>3</span>cryptocurrency intermediate</a>
        </li>
        <li>
          <a href="#c"><span>4</span>advanced cryptocurrecy</a>
        </li>
      </ul>
      <h2>cryptocurrency crash course</h2>
      <p>
        This is a full course on cryptocurrecy that will take you from a total
        beginner to someone who has a good mastery about cryptocurrencies, how
        the work, how the function and even why you should have something doing
        with it. <br />
        This is a crash course with many videos do well to follow the videos in
        order and pay attention to fully grasp what has been bundled in the
        tutorial for you.
      </p>
      <p>
        the world of Cryptocurrency is not a come quick and do quick type of
        kind of system. In the crypto system learning is very important,
        understanding how things work is indispensable. <br />
        There are mistakes you will prevent yourself from making if you take the
        time to learn and understand how things work. Don't just rush into
        investing, don't just rush into trading take out time and validate the
        courses.
      </p>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="c"
          src="https://www.youtube.com/embed/videoseries?list=PLU52pNodXIGdM6XDgHVG7DsPytlsrR_6b"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>cryptocurrency crash course</p>
      <h4>
        in case you will want to be part of our mentorship program so we can
        follow you up with your investments, where to invest and how not to
        invest. There are cryptocurrencies today that in five(5) years will be
        worth millions but how will you know them?? <br />
        there are strategies to follow in the market and patterns in trading
        that will make you a profitable crypto trader but how will you know??
        <br />
        join our mentorship program by sending us an email here with with the
        field you will want to be mentored on
        <a href="/#contact">join mentorship program</a>
      </h4>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course4">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>
        How to invest in Cryptocurrencies and why invest in cryptocurrencies
      </h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#d"><span>1</span> cryptocurrencies</a>
        </li>
        <li>
          <a href="#d"><span>2</span>how to invest</a>
        </li>
        <li>
          <a href="#d"><span>2</span>risk in crypto</a>
        </li>
      </ul>
      <h2>investing in crypto</h2>
      <p>
        This is very crucial and most important topic in the crypto system.
        There is no need learning if the learning won't benefit you or if the
        learning won't be adding value to you. <br />
        Investing in crypto is the return you get either from learning or from
        refusing to learn. There are two things that are certain its either you
        invest into profit by investing wisely or you invest into loses by
        investing wrongly. take the full time to learn invest in knowledge
        first. <br />
        after taking the course you can join our paid mentorship program for us
        to guide you into investing wisely, investing into profit
      </p>
      <div class="video">
        <iframe
          width="560"
          id="d"
          height="315"
          src="https://www.youtube.com/embed/iFIqffaaSH8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>investing in crypto</p>
      <h4>
        You can join our paid mentorship program to be mentored and directed on
        fertile areas to invest in and ways to invest that will bring you back
        profit. <br />
        invest in knowledge, invest in learning, invest in mentorship.
        <a href="/#contact">Join our mentorship program</a>
      </h4>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course5">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>cryptocurrency apps to use</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#e1"><span>1</span> phemex</a>
        </li>
        <li>
          <a href="#e2"><span>2</span>Binance</a>
        </li>
        <li>
          <a href="#e3"><span>2</span>kucoin</a>
        </li>
        <li>
          <a href="#e3"><span>2</span>bybit</a>
        </li>
        <li>
          <a href="#e3"><span>2</span>FTX exchange</a>
        </li>
      </ul>
      <h2>cryptocurrency apps to take note of</h2>
      <p>
        know what to use and when to use it is key in learn. Know that there is
        an app and when to actually use it and when not to use it is very
        important or when to invest in it and when not to is very important. You
        can join our paid mentorship program to get more apps and also be
        mentored on the best choices and how to use them
      </p>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QZsZ__9CKlI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>cryptocurrency apps to use</p>
      <h4>
        Having a need to understand which app(s) to invest in or which app(s)
        are secure and trust worthy?? join our paid mentorship program by
        emailing us with the field of mentorship of your choice
        <a href="/#contact">Join mentorship program</a>
      </h4>
      <Contact />
    </div>
    <div class="single-tutorial" v-if="crypto.course6">
      <a @click="backToCourses()" class="return">Back to crypto courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>How to buy and hold coins for long with bitrue</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#f"><span>1</span> bitrue app</a>
        </li>
        <li>
          <a href="#f"><span>2</span>overview</a>
        </li>
        <li>
          <a href="#f"><span>2</span>how to buy coins in bitrue</a>
        </li>
      </ul>
      <h2>holding coins with bitrue</h2>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="f"
          src="https://www.youtube.com/embed/mLyffo89BSs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>holding long term crypto with the bitrue app</p>

      <h4>
        Want to learn how to hold coins both for long term and short term with
        other apps? and also which cryptocurrencies to hold that will profit
        you? join our paid mentorship program by emailing us here
        <a href="/#contact">Join mentorship program</a>
      </h4>
      <Contact />
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import Contact from "../components/contact.vue";
export default {
  name: "Crypto_course",
  components: {
    Contact,
  },
  setup() {
    let crypto = reactive({
      courses: true,
      course1: false,
      course2: false,
      course3: false,
      course4: false,
      course5: false,
      course6: false,
    });

    function backToCourses() {
      crypto.courses = true;
      crypto.course1 = false;
      crypto.course2 = false;
      crypto.course3 = false;
      crypto.course4 = false;
      crypto.course5 = false;
      crypto.course6 = false;
    }

    const getCourse1 = () => {
      crypto.courses = false;
      crypto.course1 = true;
    };

    const getCourse2 = () => {
      crypto.courses = false;
      crypto.course2 = true;
    };

    function getCourse3() {
      crypto.courses = false;
      crypto.course3 = true;
    }

    function getCourse4() {
      crypto.courses = false;
      crypto.course4 = true;
    }

    function getCourse5() {
      crypto.courses = false;
      crypto.course5 = true;
    }

    function getCourse6() {
      crypto.courses = false;
      crypto.course6 = true;
    }

    return {
      crypto,
      backToCourses,
      getCourse1,
      getCourse2,
      getCourse3,
      getCourse4,
      getCourse5,
      getCourse6,
    };
  },
};
</script>

<style lang="scss">
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;

main {
  width: 100%;
}
</style>
