<template>
  <main id="main">
    <div class="courses-div" v-if="graphic.courses">
      <h2>Learn graphic today!</h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse1()">
          <div class="video">
            <img src="../assets/graphic-design.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3><span>Graphic design</span> introduction to graphic</h3>
            <p>46 videos</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse2()">
          <div class="video">
            <img src="../assets/Figma-logo.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3><span>Figma</span> Figma crash course</h3>
            <p>28 videos</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse3()">
          <div class="video">
            <img class="fullwidth" src="../assets/pixel_sample.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3><span>pixellap course</span>M R logo design with pixellab</h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse4()">
          <div class="video">
            <img src="../assets/pixellab.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>pixellab tutorial</span> Graphic design on smart phone with
              pixellab
            </h3>
            <p>1 video</p>
            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="graphic.course1">
      <a @click="backToCourses()" class="return">Back to graphic courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>graphic for beginers | intro to graphic</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a1"><span>1</span>what is graphic?</a>
        </li>
      </ul>

      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial course-2" v-if="graphic.course2">
      <a @click="backToCourses()" class="return">Back to graphic courses</a>
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
          <a href="#b1"><span>1</span> setup and security</a>
        </li>
        <li>
          <a href="#b2"><span>2</span>tokens tab</a>
        </li>
        <li>
          <a href="#b3"><span>3</span>send and receive tokens</a>
        </li>
        <li>
          <a href="#b4"><span>4</span>buy graphiccurrencies</a>
        </li>
        <li>
          <a href="#b5"><span>5</span>finance tab and staking</a>
        </li>
        <li>
          <a href="#b6"><span>6</span>How to swap and exchange coins</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLvnhVb8yYRQ3TDOsSgN0pf0XqG6E56IYM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial course-3" v-if="graphic.course3">
      <a @click="backToCourses()" class="return">Back to graphic courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>graphiccurrency for Beginners</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c1"><span>1</span>what are candlesticks in graphic</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick meaning</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick patterns</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RSIp4bJRwfw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Contact />
    </div>
    <div class="single-tutorial course-4" v-if="graphic.course4">
      <a @click="backToCourses()" class="return">Back to graphic courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>How to make money in graphic trading</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c1"><span>1</span>what are candlesticks in graphic</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick meaning</a>
        </li>
        <li>
          <a href="#c2"><span>2</span>candlestick patterns</a>
        </li>
      </ul>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Jo7jp7RmvaM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import Contact from "../components/contact.vue";
export default {
  name: "graphic_course",
  components: {
    Contact,
  },
  setup() {
    let graphic = reactive({
      courses: true,
      course1: false,
      course2: false,
      course3: false,
      course4: false,
    });

    function backToCourses() {
      graphic.courses = true;
      graphic.course1 = false;
      graphic.course2 = false;
      graphic.course3 = false;
      graphic.course4 = false;
    }

    const getCourse1 = () => {
      graphic.courses = false;
      graphic.course1 = true;
    };

    const getCourse2 = () => {
      graphic.courses = false;
      graphic.course2 = true;
    };

    function getCourse3() {
      graphic.courses = false;
      graphic.course3 = true;
    }

    function getCourse4() {
      graphic.courses = false;
      graphic.course4 = true;
    }

    return {
      graphic,
      backToCourses,
      getCourse1,
      getCourse2,
      getCourse3,
      getCourse4,
    };
  },
};
</script>
