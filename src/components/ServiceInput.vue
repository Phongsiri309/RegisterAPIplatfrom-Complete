<template>
  <div id="ServiceInput">
      <div class="container">
<b-input-group class="mt-3">
    <b-form-input v-model="Sname" placeholder="Servicename. . ."></b-form-input>
     <b-form-input v-model="Sentry" placeholder="Entrypoint. . ."></b-form-input>
    <b-input-group-append>
        <b-form-select v-model="Permission" :options="options"></b-form-select>
      <b-button variant="outline-success" :style="{width:`50px`}" v-on:click='addService'><img src="@/assets/icons8_plus_math.png" :style="{width:`20px`,height:`20px`}"></b-button>
    </b-input-group-append>
  </b-input-group>
  </div>
  </div>
</template>

<script>

export default {
    name:'ServiceInput',
    data(){
        return{
            Sname: '',
            Sentry:'',
            Permission: "Public",
    options: [
      { value: "Public", text: "Public" },
      { value: "Private", text: "Private" },
    ],
        }
    },
    methods:{
         addService() {
            let payload = {
                service_name: this.Sname,
                api_url: this.Sentry,
                permission: this.Permission ,
                user_id: this.$store.state.serviceid,
            }
            this.$store.dispatch('Insertservice',payload)

        },
    }
    
}
</script>

<style>

</style>