<template>
  <main id="main">
    <div class="courses-div" v-if="web.courses">
      <h2>
        Learn web development today! <br />Take the challenge and head towards
        becoming a fullstack web developer
      </h2>
      <div class="courses">
        <div class="tutorial" @click="getCourse1()">
          <div class="video">
            <img src="../assets/html-logo.jpg" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>HTML & CSS</span> introduction to web <br />
              learn HTML language <br />
              Learn CSS <br />crash course
            </h3>
            <p>11 videos</p>

            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse2()">
          <div class="video">
            <img src="../assets/javascript-logo.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span>javascript crash course</span> learn fundamentals of
              javascript programming language <br />
              javascript crash course
            </h3>
            <p>6 videos</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse3()">
          <div class="video">
            <img src="../assets/REACT-JS.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span> Reactjs crash course </span> <br />learn and become a react
              developer today
            </h3>
            <p>32 videos</p>
            <button>start tutorial</button>
          </div>
        </div>
        <div class="tutorial" @click="getCourse4()">
          <div class="video">
            <img src="../assets/Node_logo_NodeJS.png" alt="" />
          </div>
          <div class="video-title">
            <span class="free-course"><i>free</i></span>
            <h3>
              <span> Nodejs crash course </span> <br />build your backend with
              Nodejs from start <br />from total beginner to master backend
              developer
            </h3>
            <p>12 videos</p>
            <button>start tutorial</button>
          </div>
        </div>
      </div>
    </div>
    <div class="single-tutorial course-1" v-if="web.course1">
      <a @click="backToCourses()" class="return">Back to web courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>
        Web development crash course <br />HTML <br />CSS <br />javascript
      </h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#a"><span>1</span>intro to web developement</a>
        </li>
        <li>
          <a href="#a"><span>2</span>HTML</a>
        </li>
        <li>
          <a href="#a"><span>3</span>CSS</a>
        </li>
        <li>
          <a href="#a"><span>4</span>intro to javascript</a>
        </li>
        <li>
          <a href="#a"><span>5</span>styling a modern website</a>
        </li>
        <li>
          <a href="#a"><span>6</span>shoping cart tutorial</a>
        </li>
      </ul>
      <h2>web development crash course</h2>
      <p>
        It takes just a step. Take our web development crash course and learn
        coding from an absolute beginner into being an experienced web
        developer.
      </p>
      <h4>
        Adding a skill to your skills or polishing the skill you have is one of
        the best investments you can make now. Invest in knowledge, invest in
        learning, invest in yourself
      </h4>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="a"
          src="https://www.youtube.com/embed/videoseries?list=PLZlA0Gpn_vH-cEDOofOujFIknfZZpIk3a"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>web development crash course</p>
      <h4>
        In need ot mentorship, email us to mentor and help you grow in your
        field of web development and coding with exercises and more tutorials
        and also follow you up to make sure you become the developer you want to
        be. join our paid mentorship program now
        <a href="/#contact">Join mentorship program</a>
      </h4>
      <Contact />
    </div>
    <div class="single-tutorial course-2" v-if="web.course2">
      <a @click="backToCourses()" class="return">Back to web courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>javascript crash course</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#b"><span>1</span> intro to javascript</a>
        </li>
        <li>
          <a href="#b"><span>2</span>language syntax</a>
        </li>
        <li>
          <a href="#b"><span>3</span>control flow</a>
        </li>
        <li>
          <a href="#b"><span>4</span>functions</a>
        </li>
        <li>
          <a href="#b"><span>5</span>objects</a>
        </li>
        <li>
          <a href="#b"><span>6</span>Document Object Model (DOM)</a>
        </li>
      </ul>
      <h2>javascript crash course</h2>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="b"
          src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Javascript crash course</p>
      <Contact />
    </div>
    <div class="single-tutorial course-3" v-if="web.course3">
      <a @click="backToCourses()" class="return">Back to web courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>React crash course</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c"><span>1</span>intro to react</a>
        </li>
        <li>
          <a href="#c"><span>2</span>react setup</a>
        </li>
        <li>
          <a href="#c"><span>3</span>framework fundamentals</a>
        </li>
        <li>
          <a href="#c"><span>4</span>components</a>
        </li>
        <li>
          <a href="#c"><span>5</span>Events</a>
        </li>
        <li>
          <a href="#c"><span>6</span>lists</a>
        </li>
        <li>
          <a href="#c"><span>7</span>props</a>
        </li>
        <li>
          <a href="#c"><span>8</span>Reusable components</a>
        </li>
        <li>
          <a href="#c"><span>9</span>handling request and json server</a>
        </li>
      </ul>
      <h2>react crash course</h2>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="c"
          src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>react crash course</p>
      <Contact />
    </div>
    <div class="single-tutorial course-4" v-if="web.course4">
      <a @click="backToCourses()" class="return">Back to web courses</a>
      <div class="logo">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1>Nodejs crash course</h1>
      <h4>
        master course <br />
        by: AdvancedTechAcademy
      </h4>
      <ul>
        <h3>tutorial objectives:</h3>
        <li>
          <a href="#c"><span>1</span>intro to Nodejs</a>
        </li>
        <li>
          <a href="#c"><span>2</span>Nodejs fundamentals</a>
        </li>
        <li>
          <a href="#c"><span>3</span>clients and servers</a>
        </li>
        <li>
          <a href="#c"><span>4</span>requests and responses</a>
        </li>
        <li>
          <a href="#c"><span>5</span>NPM</a>
        </li>
        <li>
          <a href="#c"><span>6</span>view engines</a>
        </li>
        <li>
          <a href="#c"><span>7</span>middlewares</a>
        </li>
        <li>
          <a href="#c"><span>8</span>MongoDB</a>
        </li>
        <li>
          <a href="#c"><span>9</span>request methods</a>
        </li>
        <li>
          <a href="#c"><span>10</span>express router</a>
        </li>
      </ul>
      <h2>Nodejs crash course</h2>
      <div class="video">
        <iframe
          width="560"
          height="315"
          id="c"
          src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>Nodejs crash course</p>
      <Contact />
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import Contact from "../components/contact.vue";
export default {
  name: "web_course",
  components: {
    Contact,
  },
  setup() {
    let web = reactive({
      courses: true,
      course1: false,
      course2: false,
      course3: false,
      course4: false,
    });

    function backToCourses() {
      web.courses = true;
      web.course1 = false;
      web.course2 = false;
      web.course3 = false;
      web.course4 = false;
    }

    const getCourse1 = () => {
      web.courses = false;
      web.course1 = true;
    };

    const getCourse2 = () => {
      web.courses = false;
      web.course2 = true;
    };

    function getCourse3() {
      web.courses = false;
      web.course3 = true;
    }

    function getCourse4() {
      web.courses = false;
      web.course4 = true;
    }

    return {
      web,
      backToCourses,
      getCourse1,
      getCourse2,
      getCourse3,
      getCourse4,
    };
  },
};
</script>

<style lang="scss" scoped>
$baseColor: #072e54;
$col: #3d566f;

.courses-div {
  background: $baseColor !important;

  h2 {
    color: white !important;
  }

  .tutorial {
    .video {
      background: white !important;
    }
    .video-title {
      background: $col !important;
    }
  }
}
</style>
