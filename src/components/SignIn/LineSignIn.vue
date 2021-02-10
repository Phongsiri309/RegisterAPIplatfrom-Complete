<template>
  <div id="LineSignIn">
      <div v-if="Displayname">
          {{ Displayname }}
      </div>
      <div v-else>
      <VueLineLogin 
    client-id="1655659622"
    callback-uri="https://registerapiplatform-nectec.herokuapp.com/"
    client-secret="92951dff9baf71e6956c4d456848aa9b"
    @result="result" 
    login-text="LINE SignIn"
    ></VueLineLogin>
    </div>
  </div>
</template>

<script>
import VueLineLogin from '@team-decorate/vue-line-login'
export default {
    name:'LineSignIn',
     components: {
        VueLineLogin
    },
    data(){
        return{
            Displayname: ''
        }
    },
    methods: {
        result(res) {
            this.Displayname = res.displayname
        }
    }
}
</script>

<style>

</style>