<template>
  <div id="Navigator">
     <b-navbar toggleable="lg" type="dark" variant="info" fixed="top" :style="{height:`60px`}">
    <b-navbar-brand>API platform</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
     
      <b-navbar-nav>
        <b-nav-item to="/">HOME</b-nav-item>
        <b-nav-item to="/about" >About</b-nav-item>
      </b-navbar-nav>
   
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
         
         
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content v-if="$store.state.user">
         
         <img :src=$store.state.user.google_photo> 
           {{ $store.state.user.gmail }} 
         
          </template>
          <template #button-content v-else >
            SignIn
          </template>
          <b-dropdown-item href="/" >
            <google-sign-in></google-sign-in>
            </b-dropdown-item>
          <!-- <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   
  </div>
</template>

<script>
import GoogleSignIn from './SignIn/GoogleSignIn.vue'
export default {
  components: { GoogleSignIn },
    name:'Navigator',
    mounted(){
      
        setInterval(() =>{
             this.$store.state.user
        }, 100)
       
    }
}
</script>

<style scoped>

img {
  
  width: 30px;
  border-radius: 50%;
}
div.eiei{
  
  margin-right: 10px;
}
em{
  display: flex;
}

</style>