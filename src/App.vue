<template>
  <div id="app">
    <div id="nav">
      <navigator></navigator>
    </div>
    <div class="bg">
    <router-view/>
    </div>
  </div>
</template>
<script>
import Navigator from './components/Navigator.vue'
export default {
  components: { Navigator },
  name:'app'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}




#nav a.router-link-exact-active {
  color: black;
}
</style>
