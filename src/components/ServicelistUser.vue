<template>
  <div id="ServicelistUser">
      <div class="container">
         
  <b-card-group deck v-for="service in this.$store.state.servicelistUser " :key="service.service_id" >

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
        <em>Entrypoint : {{ service.api_url }}</em>
      </template>
    </b-card>

  </b-card-group>
</div>
      </div>

</template>

<script>
export default {
    name:'ServicelistUser',
     mounted(){
       this.$store.dispatch('servicelistUser').then(
            setInterval(() =>{
             this.$store.dispatch('servicelistUser')
             }, 10000)
       ) 
      
    }

}
</script>

<style>

</style>