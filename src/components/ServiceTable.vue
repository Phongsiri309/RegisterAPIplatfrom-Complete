<template>
  <div id="ServiceTable">
    <div class="container">
      <div class="eieiTable">
        
<div class="col">
  <b-card-group deck v-for="service in this.$store.state.servicelist " :key="service.service_id" >
    <div class="row">
    <b-card header-tag="header" footer-tag="footer" align="left" >
      <template #header>
        <b-card-title>{{ service.service_name }}</b-card-title>
        <h6 class="mb-0">Author : Phonsiris</h6>
      </template>
      <b-card-text>Descriptions : {{ service.permission }} </b-card-text>
      <template #footer>
        <em>Entrypoint : {{ service.api_url }}</em>
      </template>
    </b-card>
  </div>
  </b-card-group>
</div>
  <div class="overflow-auto">


    <!-- Use HTML and sub-components in slots -->
    <b-pagination
      v-model="$store.state.currentPage"
      :total-rows="$store.state.rows"
      :per-page="$store.state.perPage"
      class="mt-4"
      align="right"
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

.card-deck .card {
   width: 600px;
   
}
div.col{
  margin-left: 235px;
}

div.row{
  margin: 10px;
}

.card-deck .card-header{
  background-color:#760204;
  color: white;
}

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