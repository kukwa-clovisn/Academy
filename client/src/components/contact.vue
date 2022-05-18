<template>
  <form class="question" @submit.prevent="userRequest()">
    <label for="question">ask question(s) or leave a comment:</label>
    <input
      type="email"
      name="email"
      id=""
      v-model="user.email"
      placeholder="Enter email address so we can reach you..."
    />
    <textarea
      name="question"
      id="question"
      cols="30"
      rows="10"
      v-model="user.message"
      placeholder="Ask question(s) or leave a comment...."
      required
    ></textarea>
    <button type="submit">submit</button>
    <div class="response-div">
      <div class="done" v-if="response.success">
        <i class="fa-solid fa-circle-check"></i>
        <span>{{ response.msg }}</span>
      </div>
      <div class="error" v-if="response.failed">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ response.msg }}</span>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "Contact",
  setup() {
    let user = reactive({
      email: "",
      message: "",
    });

    let response = reactive({
      failed: false,
      success: false,
      msg: "",
    });

    function userRequest() {
      axios
        .post("api/course/contact", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            response.msg = res.data.msg;
            response.success = true;
            setTimeout(pop, 3000);
          }
        })
        .catch((err) => {
          response.msg = err.response.data.msg;
          response.failed = true;
          setTimeout(post_error, 3000);
        });
    }

    function pop() {
      response.success = false;
    }
    function post_error() {
      response.failed = false;
    }

    return { user, response, userRequest };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;

.question {
  width: 90%;
  margin: auto;
  height: fit-content;
  padding: 10px;

  label {
    padding: 10px;
    text-align: left;
    display: block;
    width: 100%;
    text-transform: capitalize;
    font: 600 23px "Poppins", sans-serif;
  }

  input {
    width: 50%;
    height: 50px;
    outline: none;
    border: none;
    background: rgb(231, 229, 229);
    border-radius: 5px;
    padding: 3px 20px;
    display: block;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    height: 300px;
    border: none;
    outline: none;
    font-weight: 500;
    color: $baseColor;
    box-shadow: 0 0 2px 1px rgb(238, 238, 238);
    padding: 20px;
    background: rgb(234, 234, 234);
  }

  button {
    display: block;
    width: 50%;
    height: 60px;
    border: none;
    background: $SecondaryColor;
    color: $primaryColor;
    border-radius: 5px;
    margin-top: 15px;
    text-transform: capitalize;
    font: 600 20px "Nunito sans", sans-serif;
  }

  .response-div {
    width: 90%;
    height: fit-content;
    position: fixed;
    left: 5%;
    top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .done,
  .error {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(71, 243, 151);
    border-radius: 4px;
    padding: 20px;
    z-index: 1;
    position: relative;
    animation: pop 1s linear alternate forwards;

    i {
      font-size: 30px;
      margin-right: 10px;
      color: white;
    }

    span {
      color: white;
      white-space: pre-wrap;
    }
  }

  .error {
    background: $SecondaryColor;
    span {
      color: white;
    }
  }

  @keyframes pop {
    from {
      top: 0;
    }
    to {
      top: 15vh;
    }
  }

  @media screen and (max-width: 768px) {
    input,
    button {
      width: 100%;
    }
  }
}
</style>
