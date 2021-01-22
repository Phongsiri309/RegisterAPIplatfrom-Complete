<template>
  <div id="Ownapi">
<p v-if="$store.state.user">
      <service-input></service-input>
    </p>
  </div>
</template>

<script>
import ServiceInput from '../components/ServiceInput.vue'
export default {
  components: { ServiceInput },
  name:'Ownapi'
}
</script>

<style>

</style>