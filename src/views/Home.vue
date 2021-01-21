<template>
  <div class="home">

     <service-input></service-input>

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
