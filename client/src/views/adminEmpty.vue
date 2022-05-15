<template>
  <main>
    <div class="closed">
      <span> course closed!</span>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminEmpty",
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 80vh;

  .closed {
    width: 200px;
    height: 150px;
    margin: 30px auto;
    background: white;
    border-radius: 5px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
