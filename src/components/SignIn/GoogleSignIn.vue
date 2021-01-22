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
      console.log('onCurrentUser', googleUser);
      var current = googleUser.getBasicProfile()
       var id_token = googleUser.getAuthResponse().id_token;
      let payload = {
               Name: current.getName(),
                Email: current.getEmail(),
                Image: current.getImageUrl(),
                Token: id_token
            }
            this.$store.dispatch('addUser',payload)
		},
       
        },mounted() {
		Vue.GoogleAuth.then(auth2 => {
			console.log(auth2.isSignedIn.get());
			console.log(auth2.currentUser.get())
		});
	}
}
</script>

<style>

</style>