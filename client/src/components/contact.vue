<template>
  <div class="question">
    <label for="question">ask question(s) or leave a comment:</label>
    <input
      type="email"
      name="email"
      id=""
      placeholder="Enter email address so we can reach you..."
    />
    <textarea
      name="question"
      id="question"
      cols="30"
      rows="10"
      placeholder="Ask question(s) or leave a comment...."
      required
    ></textarea>
    <button>submit</button>
  </div>
</template>
<script>
export default {
  name: "Contact",
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
}
</style>
