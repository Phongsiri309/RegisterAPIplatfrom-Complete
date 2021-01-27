<template>
  <div class="playground">
    <b-container fluid class="mt-5">
      <b-row class="mt-5">
        <b-col align-self="center" class="mt-5">
          <reg-input></reg-input>
          <my-card></my-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MyCard from "../components/MyCard.vue";
import RegInput from "../components/RegInput.vue";
export default {
  name: "playground",
  components: { MyCard, RegInput },
};
</script>

<style scoped>
</style>