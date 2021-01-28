<template>
  <div id="Ownapi" :style="{ backgroundColor: `whitesmoke` }">
    <b-container fluid class="mt-5">
      <b-row>
        <b-col align-self="center" class="mt-5">
          <p v-if="$store.state.user">
            <reg-input></reg-input>
          </p>
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
  components: { MyCard, RegInput },
  name: "Ownapi",
};
</script>

<style>
</style>