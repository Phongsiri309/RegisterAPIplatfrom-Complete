<template>
  <div id="ServiceTable">
    <div class="container">
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
    </div>
  </div>
</template>

<script>
export default {
    name:'ServiceTable',
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
</style>