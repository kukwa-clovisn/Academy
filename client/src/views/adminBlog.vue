<template>
  <main>
    <h1>write a blog!</h1>
    <form @submit.prevent="postBlog()">
      <div class="input">
        <label for="author">author:</label
        ><textarea
          name="author"
          id="author"
          cols="30"
          rows="10"
          v-model="post.author"
          placeholder="Author's name"
          required
        ></textarea>
      </div>
      <div class="input">
        <label for="title"> post title:</label>
        <textarea
          name="title"
          id="title"
          cols="30"
          rows="10"
          v-model="post.title"
          required
          placeholder="Post Title..."
        ></textarea>
      </div>
      <div class="input">
        <label for="sub-title">sub-title:</label>
        <textarea
          name="sub-title"
          id="sub-title"
          cols="30"
          rows="10"
          v-model="post.subTitle"
          required
          placeholder="sub title "
        ></textarea>
      </div>
      <div class="input">
        <label for="message">message:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          v-model="post.message"
          required
          placeholder="write message here..."
        ></textarea>
      </div>
      <div class="input">
        <label for="tags">tags</label>
        <textarea
          name="tags"
          id="tags"
          cols="30"
          rows="10"
          v-model="post.tags"
          required
          placeholder="Seperate each tag with a comma(,)...."
        ></textarea>
      </div>
      <div class="btns">
        <button type="submit">submit</button
        ><button type="reset">cancel</button>
      </div>
    </form>
    <div class="done" v-if="success">
      <i class="fa-solid fa-circle-check"></i>
      <span>post successfully uploaded.</span>
    </div>
    <div class="error" v-if="postError">
      <i class="fa-solid fa-circle-exclamation"></i>
      <span>error: post not uploaded.</span>
    </div>
    <footer>
      <i class="fa-solid fa-copyright"></i>coding <span>Herald</span>2022
    </footer>
  </main>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "vue";
export default {
  name: "AdminBlog",
  setup() {
    const post = reactive({
      author: "",
      title: "",
      subTitle: "",
      message: "",
      tags: "",
    });

    let success = ref(false);
    let postError = ref(false);

    function postBlog() {
      axios
        .post("/api/admin/blog", post, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          post.title = "";
          post.subTitle = "";
          post.message = "";
          post.tags = "";
          if (res.statusText === "OK") {
            success.value = true;
            setTimeout(pop, 3000);
          } else {
            error.value = true;
            setTimeout(post_error, 3000);
          }
        });
    }

    function pop() {
      success.value = false;
    }
    function post_error() {
      postError.value = false;
    }

    return { success, postError, post, postBlog };
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
$adminCol: rgb(21, 55, 101);
main {
  width: 100%;
  padding: 0;

  h1 {
    text-transform: capitalize;
    font: 800 25px "Nunito Sans", sans-serif;
    width: 700px;
    margin: auto;
    padding: 20px;
    padding-bottom: 0;
    text-align: left;
    color: $SecondaryColor;
  }

  form {
    width: 700px;
    height: fit-content;
    margin: 10px auto;

    .input {
      width: 100%;
      height: fit-content;
      margin: 20px auto;
      padding: 20px;

      label {
        display: block;
        width: 100%;
        height: 60px;
        padding: 3px 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-transform: capitalize;
        text-align: left;
        padding-bottom: 10px;
        border-radius: 3px;
        background: $col;
        color: white;

        &:hover {
          transform: none;
        }
      }

      textarea {
        width: 100%;
        height: 130px;
        background: white;
        outline: none;
        border: none;
        border-radius: 3px;
        padding: 20px;
        color: $col;
        font-size: 18px;
      }

      #message {
        height: 250px;
      }
    }

    .btns {
      width: 100%;
      padding: 20px;
      padding-top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;

      button {
        width: 50%;
        height: 50px;
        border: none;
        background: $SecondaryColor;
        color: white;
        border-radius: 5px;
        font: 600 15px "Poppins", sans-serif;
        text-transform: capitalize;
      }

      button[type="reset"] {
        background: transparent;
        color: $col;
        text-align: right;
        width: 100px;
        color: $SecondaryColor;
      }
    }

    @media screen and (max-width: 855px) {
      width: 100%;

      .input,
      .btns {
        width: 90%;
      }
    }
  }

  .done,
  .error {
    width: fit-content;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(71, 243, 151);
    border-radius: 4px;
    padding: 20px;
    position: fixed;
    left: 40vw;
    top: 25vh;
    z-index: 1;
    animation: pop 2s linear alternate forwards;

    i {
      font-size: 30px;
      margin-right: 10px;
      color: white;
    }

    span {
      color: black;
    }
  }

  .error {
    background: red;
    span {
      color: white;
    }
  }

  @keyframes pop {
    from {
      top: 10vh;
    }
    to {
      top: 25vh;
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    span {
      color: $SecondaryColor;
    }
  }
}
</style>
