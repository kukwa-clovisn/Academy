<template>
  <header>
    <nav class="logo-nav">
      <img src="../assets/logo-b.jpeg" id="logo" alt="logo image" />
    </nav>
    <nav>
      <router-link to="/" class="route">about</router-link>
      <router-link to="/" class="route">why crypto?</router-link>
      <router-link to="/" class="route">blog</router-link>
    </nav>
    <nav>
      <button class="landing-page-btn">
        <router-link to="/register" class="homeBtn">register</router-link>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Register",
};
</script>
