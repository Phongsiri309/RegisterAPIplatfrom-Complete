<template>
  <div id="GoogleSignIn">
      <p v-if="$store.state.user"> <GoogleLogin :params="$store.state.params" :logoutButton=true :style="{border:`0` ,background:`red`,color:`white`,width:`110px`,height:`30px`, }">Logout</GoogleLogin></p>
      <p v-else>
 <GoogleLogin
			:params="$store.state.params"
			:renderParams="$store.state.renderParams"
			:onCurrentUser="onCurrentUser"
			:onSuccess="onSuccess"
			:onFailure="onFailure"
			:logoutButton="false"
		>texto</GoogleLogin>
 </p>

  
  
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import Vue from 'vue';

export default {
    name:'GoogleSignIn',
        components: {
            GoogleLogin
        },
        methods: {
           onSuccess(googleUser) {
            var  Profile = googleUser.getBasicProfile()
           var id_token = googleUser.getAuthResponse().id_token;
            let payload = {
                Name: Profile.getName(),
                Email: Profile.getEmail(),
                Image: Profile.getImageUrl(),
                Token: id_token
            }
            this.$store.dispatch('addUser',payload)

        },onCurrentUser(googleUser) {
    
      var current = googleUser.getBasicProfile()
       var id_token = googleUser.getAuthResponse().id_token;
      let payload = {
               Name: current.getName(),
                Email: current.getEmail(),
                Image: current.getImageUrl(),
                Token: id_token
            }
            this.$store.dispatch('addUser',payload)
		},onFailure(err) {
			console.log(err)
		},
       
        },mounted() {
		Vue.GoogleAuth.then(auth2 => {
			auth2.isSignedIn.get()
			auth2.currentUser.get()
		});
	}
}
</script>

<style>

</style>