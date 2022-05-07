<template>
  <h1>this is the course intro page</h1>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Course_intro",
  setup() {
    const router = useRouter();
    const route = useRoute();

    console.log(route.params);

    let getFromLocalStorage = ref(localStorage.getItem("token"));

    onMounted(() => {
      if (!route.params.id) {
        router.push("/login");
      }
      console.log(getFromLocalStorage.value);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
