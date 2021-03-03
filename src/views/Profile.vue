<template>
  <div id="Profile">
      <b-container fluid class="mt-5">
      <b-row class="mt-5">
        <b-col align-self="center" class="mt-5">
            <profile-form></profile-form>
        </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script>
import ProfileForm from '../components/SignIn/menuUser/ProfileForm.vue'
export default {
  components: { ProfileForm },
    name: 'Profilepage'
}
</script>

<style>

</style>