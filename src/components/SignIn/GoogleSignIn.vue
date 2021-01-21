<template>
  <div id="GoogleSignIn">
      <p v-if="$store.state.user"> <GoogleLogin :params="$store.state.params" :logoutButton=true :style="{border:`0` ,background:`red`,color:`white`,width:`110px`,height:`30px`, }">Logout</GoogleLogin></p>
      <p v-else>
 <GoogleLogin :params="$store.state.params" :renderParams="$store.state.renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
 </p>

  
  
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
    name:'GoogleSignIn',
        components: {
            GoogleLogin
        },
        methods: {
           onSuccess(googleUser) {
            var  Profile = googleUser.getBasicProfile()
           var id_token = googleUser.getAuthResponse().id_token;
          
            console.log(Profile)
            let payload = {
                Name: Profile.getName(),
                Email: Profile.getEmail(),
                Image: Profile.getImageUrl(),
                Token: id_token
            }
            this.$store.dispatch('addUser',payload)

        },
        onFailure(res){
            console.log(res)
        }
        }
}
</script>

<style>

</style>