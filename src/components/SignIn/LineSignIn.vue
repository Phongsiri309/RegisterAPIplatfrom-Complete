<template>
  <div id="LineSignIn">
      <VueLineLogin 
    client-id="1655659622"
    callback-uri="https://registerapiplatform-nectec.herokuapp.com/"
    client-secret="92951dff9baf71e6956c4d456848aa9b"
    @result="result" 
    login-text="LINE SignIn"
    ></VueLineLogin>
  </div>
</template>

<script>
import VueLineLogin from '@team-decorate/vue-line-login'
export default {
    name:'LineSignIn',
     components: {
        VueLineLogin
    },
    
    methods: {
        result(res) {
            console.log(res)
        }
    }
}
</script>

<style>

</style>