<template>
  <main>
    <div class="header">
      <Header />
    </div>

    <div class="form">
      <form @submit.prevent="updatePassword()">
        <h1>Atech acadmey</h1>
        <div class="input">
          <label for="email"> email:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="user.email"
            placeholder="Enter your email..."
            required
          />
        </div>
        <div class="input" v-if="user.isChange">
          <label for="password">new Password:</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            v-model="user.new_password"
            placeholder="Enter new Password..."
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <footer><i class="fa-solid fa-copyright"></i>Atechacadmey2022</footer>
    </div>
    <div class="response-div">
      <div class="done" v-if="user.success">
        <i class="fa-solid fa-circle-check"></i>
        <span>{{ user.msg }}</span>
      </div>
      <div class="error" v-if="user.failed">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ user.msg }}</span>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import { reactive } from "vue";
import Header from "./header.vue";
export default {
  name: "Forget_password",
  components: {
    Header,
  },
  setup() {
    let user = reactive({
      email: "",
      new_password: "",
      msg: "",
      isChange: false,
      success: false,
      failed: false,
    });

    function updatePassword() {
      axios
        .post("api/forget_password", user.email, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return { user, updatePassword };
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

main {
  background: rgb(249, 225, 198);
  width: 100%;
  padding: 0;

  .header {
    background: $fallback;
    width: 100%;
  }

  .form {
    width: 100%;
    height: 83vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    form {
      width: 500px;
      height: fit-content;
      padding: 20px;
      border-radius: 7px;
      background: white;
      margin: auto;

      .input {
        width: 100%;
        margin: 20px auto;

        label {
          text-align: left;
          display: block;
          padding-bottom: 3px;
          text-transform: capitalize;
          font: 500 20px "Poppins", sans-serif;
          color: $col;
        }
        input {
          width: 100%;
          height: 50px;
          padding: 5px 20px;
          outline: none;
          border: none;
          border-radius: 3px;
          box-shadow: 0 0 2px 1px rgb(224, 223, 223);
        }
      }

      button {
        width: 100%;
        height: 50px;
        border: none;
        margin: 20px auto;
        border-radius: 3px;
        background: $SecondaryColor;
        color: white;
      }
    }

    footer {
      position: absolute;
      bottom: 10px;
      left: 40%;
    }
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
}
</style>
