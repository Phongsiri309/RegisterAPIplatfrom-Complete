<template>
  <div id="Ownapi">
<p v-if="$store.state.user">
      <service-input></service-input>
    </p>
    <servicelist-user></servicelist-user>
  </div>
</template>

<script>
import ServiceInput from '../components/ServiceInput.vue'
import ServicelistUser from '../components/ServicelistUser.vue'
export default {
  components: { ServiceInput, ServicelistUser },
  name:'Ownapi'
}
</script>

<style>

</style>