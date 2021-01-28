<template>
  <div id="app">
    <div id="nav">
      <nav>
        <navigator></navigator>
      </nav>
    </div>
    <div id="bg">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navigator from "./components/Navigator.vue";
export default {
  components: { Navigator },
  name: "app",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
}

#bg {
  background-color: #fbfbfd;
  /* background-image: linear-gradient(blueviolet,violet); */
}
</style>
