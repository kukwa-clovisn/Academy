<template>
  <main>
    <h1>write a blog!</h1>
    <form>
      <div class="input">
        <label for="title"> post title:</label>
        <textarea
          name="title"
          id="title"
          cols="30"
          rows="10"
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
          required
          placeholder="Enter tags here...."
        ></textarea>
      </div>
      <div class="btns">
        <button type="submit">submit</button
        ><button type="reset">cancel</button>
      </div>
    </form>
    <footer>
      <i class="fa-solid fa-copyright"></i>coding <span>Herald</span>2022
    </footer>
  </main>
</template>

<script>
export default {
  name: "AdminBlog",
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
      margin: 30px auto;
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

      button {
        width: 300px;
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
