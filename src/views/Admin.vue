<template>
  <div id="AdminPage">
     <b-container fluid class="mt-5">
      <b-row class="mt-5">
        <b-col align-self="center" class="mt-5">
      <superuser-card></superuser-card>
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import SuperuserCard from '../components/SuperuserCard.vue'
export default {
  components: { SuperuserCard },
    name:'AdminPage'
}
</script>

<style>

</style>