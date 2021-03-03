<template>
  <div id="ProfileForm">
    <b-container>
      <b-card-group deck>
    <b-input-group size="lg" prepend="Display Name">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-primary" >Use</b-button>
    </b-input-group-append>
  </b-input-group>
   <b-row class="mt-3 ml-1">
      <h5 class="pt-2"> Link Line Account :</h5> <b-button class="ml-3" variant="success"><line-sign-in ></line-sign-in></b-button>
   </b-row>
  </b-card-group>
        
    </b-container>
  </div>
</template>

<script>
import LineSignIn from '../LineSignIn.vue'
export default {
  components: { LineSignIn },
    name:'ProfileForm'
}
</script>

<style>

</style>