<template>
  <div id="ServiceTable">
    <div class="container">
      <div class="eieiTable">
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Service Name</th>
      <th scope="col">Entrypoint</th>
      <th scope="col">Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="service in this.$store.state.servicelist " :key="service.id">
    
    <td>{{ service.service_name }}</td>
             <td>{{ service.api_url }}</td>
              <td>{{ service.permission }}</td>
    </tr>
    
  </tbody>
</table>
  <div class="overflow-auto">


    <!-- Use HTML and sub-components in slots -->
    <b-pagination
      v-model="$store.state.currentPage"
      :total-rows="$store.state.rows"
      :per-page="$store.state.perPage"
      class="mt-4"
    >
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ServiceTable',
    data(){
      return{
        rows: this.$store.state.servicelist.data,
      perPage: 10,
      currentPage: 1,
      }
    },
    mounted(){
       this.$store.dispatch('servicelist').then(
            setInterval(() =>{
             this.$store.dispatch('servicelist')
             }, 10000)
       ) 
      
    }
   
  
}
</script>

<style>
.container{
    margin: auto;
}
#ServiceTable{
    padding-top: 25px;
}
.eieiTable{
    padding-top: 80px;
}
</style>