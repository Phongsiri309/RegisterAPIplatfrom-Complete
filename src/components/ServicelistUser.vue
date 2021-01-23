<template>
  <div id="ServicelistUser">
      <div class="container">
          <div class="col">
  <b-card-group deck v-for="service in this.$store.state.servicelistUser " :key="service.service_id" >
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