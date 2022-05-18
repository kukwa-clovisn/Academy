<template>
  <main id="main">
    <div class="courses-div" v-if="forex.courses">
      <h2>Leave from a beginner to a profitable forex trader and investor.</h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse1()">
          <div class="video">
            <img class="fullwidth" src="../assets/forex.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3><span>forex</span> full beginners to advanced forex course</h3>
            <p>64 videos</p>

            <button>start tutorial</button>
          </div>
        </div>

        <div class="tutorial" @click="getCourse2()">
          <div class="video">
            <img class="fullwidth" src="../assets/forex-blue.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>candlestick bible</span> candlesticks full course
              <br />candlestick pattern tutorial
            </h3>
            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="forex.course1">
      <a @click="backToCourses()" class="return">Back to forex courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>Forex for beginners | intro to forex</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a"><span>1</span>what is forex?</a>
        </li>
        <li>
          <a href="#a"><span>2</span>fundamentals of forex</a>
        </li>
        <li>
          <a href="#a"><span>3</span>DOs and DON'Ts in forex</a>
        </li>
        <li>
          <a href="#a"><span>4</span>Market structures and patterns</a>
        </li>
        <li>
          <a href="#a"><span>5</span>understanding candlesticks</a>
        </li>
        <li>
          <a href="#a"><span>6</span>forex investments</a>
        </li>
      </ul>
      <h2>forex crash course</h2>
      <p>
        Forex(forex exchange) is decentralized market, an open market where
        anyone can get in an out anywhere anytime but still there's more to the
        forex market. It's just not sufficient to get into the market and get
        out but to come out with profit. <br />Many people make the error of
        rushing into the market without adequate knowldege, without learning the
        basics, without understanding the fundamentals. Forex is not just all
        about trading here and there but being profitable in your trade is very
        important. There are many traders but about 90% of the traders are not
        profitable in their trading.
      </p>
      <p>
        Is it magic to be profitable? is there a way out? is there a way to be
        profitable? the answer is yes invest in knowledge, invest in learning.
        Take out time to learn follow this free course consistenty to the end.
        learn before jumping or rushing to invest without knowledge. <br />One
        good news about the forex market is that it will always be there the
        market isn't running so taking out time first to learn is very important
        than rushing into investing without adequate understanding.
      </p>
      <h4>
        As you take this course, we know you will be having many questions and
        worries, we know you'll need to be mentored and directed rightly so our
        mentorship program is live an our commity is there to help you grow in
        the forex market. You can join our paid mentorship by emailing us and
        you'll be glad you did.
      </h4>
      <p>
        Do well to follow the course in order and consistenty be intentional
        about learning, be intentional about making profits, be intentional
        about learning a new skill or polishing your skill. add flavor to what
        you know
      </p>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="a"
          src="https://www.youtube.com/embed/videoseries?list=PLm5KMmPrh9WW9X0391hR6VEjmeb6T5CTE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Forex mastery course</p>
      <h4>
        join our mentorship program to have one on one access with our mentors
        and experts by emailing us
        <a href="/#contact">Join mentorship program</a>
      </h4>
      <Contact />
    </div>
    <div class="single-tutorial course-2" v-if="forex.course2">
      <a @click="backToCourses()" class="return">Back to forex courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>the candelstick bible</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#b"><span>1</span>a candlestick</a>
        </li>
        <li>
          <a href="#b"><span>2</span>candlestick types</a>
        </li>
        <li>
          <a href="#b"><span>3</span>candlestick patterns</a>
        </li>
      </ul>
      <h2>candlestick theory</h2>
      <p>
        Get full theory of candlesticks from the greatest trader of all times
        well explained
      </p>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="b"
          src="https://www.youtube.com/embed/ZH8RQOGIh88"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>candlestick bible broken down</p>
      <Contact />
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import Contact from "../components/contact.vue";
export default {
  name: "Forex_course",
  components: {
    Contact,
  },
  setup() {
    let forex = reactive({
      courses: true,
      course1: false,
      course2: false,
      course3: false,
      course4: false,
    });

    function backToCourses() {
      forex.courses = true;
      forex.course1 = false;
      forex.course2 = false;
      forex.course3 = false;
      forex.coures4;
    }

    const getCourse1 = () => {
      forex.courses = false;
      forex.course1 = true;
    };

    const getCourse2 = () => {
      forex.courses = false;
      forex.course2 = true;
    };

    return {
      forex,
      backToCourses,
      getCourse1,
      getCourse2,
    };
  },
};
</script>
