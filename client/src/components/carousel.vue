<template>
  <div class="carousel-div">
    <img v-bind:src="img" alt="crypto and forex" class="carousel-image" />
    <!-- <img src="../assets/graphic-design.jpg" alt="" /> -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "carousel",

  setup() {
    let img = ref("");
    // starting the images from image zero
    let i = 0;
    // letting the images into an array
    let images = [];

    // pushing the images into the image array
    images[0] = "/img/ch1.01f6ecad.png";
    images[1] = "/img/social.f550115f.jpg";
    images[2] = "/img/web-dev.715672a7.jpg";
    images[3] = "/img/graphic-design.7219ce19.jpg";
    // images[4] = "/img/bitcoin.90f7f7ee.png";

    // giving a function called image_slide that will cause the image transition.

    const image_slide = () => {
      img.value = images[i];

      // creationg a condition for looping throung the images
      if (i < images.length - 1) {
        i++;
      } else {
        i = 0; //we want to make sure that the images actually starts from the first image which is images[0]
      }

      setTimeout(image_slide, 7000);
    };

    image_slide();

    return { img };
  },
};
</script>

<style lang="scss" scoped>
.carousel-div {
  width: 100vw;
  height: 90vh;
  margin: auto;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../assets/logo-w.jpeg);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
  background-position-x: -350px;
  background-position-y: -150px;

  .carousel-image {
    width: 100%;
    height: auto;
    animation: shake 7s linear infinite alternate forwards;
    position: relative;
    left: 0;
  }

  @keyframes shake {
    to {
      left: 300px;
    }
  }
}
</style>
