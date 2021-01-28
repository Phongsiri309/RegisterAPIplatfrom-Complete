<template>
  <div class="playground">
    <b-container fluid class="mt-5">
      <b-row class="mt-5">
        <b-col align-self="center" class="mt-5"> </b-col>
      </b-row>
    </b-container>
    <navbar-n></navbar-n>
  </div>
</template>

<script>
import NavbarN from "../components/NavbarN.vue";
export default {
  name: "playground",
  components: { NavbarN },
};
</script>

<style scoped>
</style>