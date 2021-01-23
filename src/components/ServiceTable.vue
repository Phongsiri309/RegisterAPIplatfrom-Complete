<template>
  <div id="ServiceTable">
        
      <div class="eieiTable">
        
         <b-card-group deck v-for="service in this.$store.state.servicelist[0] " :key="service.service_id" >
 
    <b-card >
      <template >
        <b-card-header>
        <b-card-title align="left">{{ service.service_name }}
          <span v-if="service.permission==`public`">
         <img src="@/assets/icons8_earth_planet.png" align="right">
         </span>
        </b-card-title>
        <h6 class="mb-0" align="left">Author : {{ service.gmail }}</h6></b-card-header>
      </template>
      <b-card-text align="left">Descriptions : {{ service.description }} </b-card-text>
      <template >
        <b-card-footer>
        <div align="left">
          <em >Entrypoint :  {{ service.api_url }}
            {{service.service_id }}
          </em>
          </div>
        </b-card-footer>
      </template>
    </b-card>

  </b-card-group>
 

  <div class="overflow-auto">


    <!-- Use HTML and sub-components in slots -->
    <b-pagination
      v-model="$store.state.currentPage"
      :total-rows="$store.state.servicelist[1].total"
      :per-page="perPage"
      class="mt-4"
      align="right"
    >
    
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning" value=page >Next</span></template>
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
</template>

<script>
export default {
    name:'ServiceTable',
    data(){
      return{
        perPage: 10
      }
    },
    mounted(){
      
       this.$store.dispatch('servicelist').then(
            setInterval(() =>{
             this.$store.dispatch('servicelist')
             }, 8000)
       ) 
      
    },
   
    
   
  
}
</script>

<style>

.card-deck .card-text{
  padding-top: 20px;
}

.card-deck .card {
   width: 200px;
  border-radius: 20px; 
  margin: 20px; 
  
}
div.col{
 border-radius: 20px;
  
}



div.row{
  margin: 10px;
}


.card-deck .card-header{
  background-color:#760204;
  color: white;

}

.container{
    position: center;
}
#ServiceTable{
    padding-top: 25px;
}
.eieiTable{
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 80px;
    
}
</style>