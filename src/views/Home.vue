<template>
  <div class="home">
    <p v-if="$store.state.user">
     <service-input></service-input>
    </p>
    <service-table></service-table>

  
  </div>
</template>

<script>
import ServiceInput from '../components/ServiceInput.vue'
import ServiceTable from '../components/ServiceTable.vue'
// @ is an alias to /src


export default {
  components: { ServiceTable, ServiceInput },
  name: 'Home',
  
}
</script>
