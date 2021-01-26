<template>
  <div id="Ownapi">
<p v-if="$store.state.user">
      <service-input></service-input>
    </p>
   <my-card></my-card>
  </div>
</template>

<script>
import MyCard from '../components/MyCard.vue'
import ServiceInput from '../components/ServiceInput.vue'

export default {
  components: { ServiceInput, MyCard },
  name:'Ownapi'
}
</script>

<style>

</style>