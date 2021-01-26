<template>
  <div class="home">
    <b-container fluid class="mt-5">
      <b-row class="mt-5">
        <b-col align-self="center" class="mt-5">
          <user-card></user-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
// @ is an alias to /src

export default {
  components: { UserCard },
  name: "Home",
};
</script>
