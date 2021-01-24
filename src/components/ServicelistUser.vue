<template>
  <div id="ServicelistUser">
      <div class="container">
        
  <p v-if="$store.state.loading"><b-spinner label="Spinning"></b-spinner></p>
  <p v-else>
  <b-card-group deck  v-for="service in this.$store.state.servicelistUser[0] " :key="service.service_id" >

    <b-card header-tag="header" footer-tag="footer" align="left" >
      <template #header>
        <b-card-title>{{ service.service_name }}
            <span v-if="service.permission==`public`">
         <img src="@/assets/icons8_earth_planet.png" align="right">
         </span>
         <span v-else>
        <img src="@/assets/icons8_lock.png" align="right">
         </span>
        </b-card-title>
        <h6 class="mb-0">Author : {{ service.gmail }}</h6>
      </template>
      <b-card-text>Descriptions : {{ service.description }} </b-card-text>
      <template #footer>
        <em>
          Entrypoint : {{ service.api_url }}
         
        </em>
        

       </template>
       <span >
          <b-button align="right" v-on:click="deleteitem(service)"> Delete </b-button>
        </span>
      <div>
  
</div>
    </b-card>

  </b-card-group>
   <b-pagination
      v-model="$store.state.currentPage"
      :total-rows="$store.state.servicelistUser[1].total"
      :per-page="$store.state.perPage"
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
   </p>
</div>
      </div>

</template>

<script>
export default {
    name:'ServicelistUser',
     mounted(){
       if(this.$store.state.loading == true){
            setTimeout(()=>
        {
          this.$store.dispatch('servicelistUser')
        },2000)
       }else{
      
        this.$store.dispatch('servicelistUser')
       }
       
      //  .then(
      // //       setInterval(() =>{
      // // //        this.$store.dispatch('servicelistUser')
      // // //        }, 10000)
      //   ) 
      
    },
  
    methods:{
      deleteitem(service){
      
        let payload = {
          service_id: service.service_id,
          user_id: this.$store.state.user.user_id
        }
        this.$store.dispatch('serviceDelete',payload).then(
          setTimeout(()=>{
            this.$store.dispatch('servicelistUser')
          },1000)
        )
      }
    }

}
</script>

<style>

</style>