<template>
  <div class="carousel-div">
    <img :src="image_src" alt="crypto and forex" class="carousel-image" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "carousel",

  setup() {
    let image_src = ref("");
    // starting the images from image zero
    let i = 0;
    // letting the images into an array
    let images = [];

    // pushing the images into the image array
    images[0] = "img/ch1.8c5dc3f1.png";
    images[1] = "img/ch1.png";
    images[2] = "../assets/lap.jpg";
    images[3] = "../assets/web-dev.jpg";
    images[4] = "../assets/graphic-design.jpg";

    // giving a function called image_slide that will cause the image transition.

    //     const image_slide =

    setTimeout(() => {
      // getImage.slide.src = images[i];
      image_src.value = images[i];

      // creationg a condition for looping throung the images
      if (i < images.length - 1) {
        i++;
      } else {
        i = 0; //we want to make sure that the images actually starts from the first image which is images[0]
      }
      console.log("it works", i);
    }, 1000);
    //     image_slide();

    return { image_src };
  },
};
</script>

<style lang="scss" scoped>
.carousel-div {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;

  .carousel-image {
    width: 100%;
    height: 100%;
  }
}
</style>
