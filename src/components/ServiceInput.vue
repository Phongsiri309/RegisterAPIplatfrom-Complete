<template>
  <div id="ServiceInput">
      <div class="container">
        <div class="ei2">
          <div v-if="this.$store.state.Insertstatus == `Create Success` ">
             <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>บันทึกสำเร็จ {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    </div>
    <div v-else>
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>บันทึกไม่สำเร็จ {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    </div>
<b-input-group class="mt-3">
    <b-form-input v-model="Sname" placeholder="Servicename. . ." ></b-form-input>
     <b-form-input v-model="Sentry" placeholder="Entrypoint. . ."></b-form-input>
    <b-input-group-append>
        <b-form-select v-model="Permission" :options="options"></b-form-select>
      <b-button variant="outline-success" :style="{width:`50px`}" v-on:click='addService' @click="showAlert"><img src="@/assets/icons8_plus_math.png" :style="{width:`20px`,height:`20px`}"></b-button>
    </b-input-group-append>
  </b-input-group>
  <b-container fluid>
 
  <b-row class="mt-2">
    <b-col sm="1">
     
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-large"
        size="lg"
        placeholder="Description. . ."
        v-model="Description"
      ></b-form-textarea>
    </b-col>
  </b-row>
</b-container>
  </div></div>
  </div>
</template>

<script>

export default {
    name:'ServiceInput',
    data(){
        return{
            Sname: null,
            Sentry: null,
            Permission: "Public",
    options: [
      { value: "Public", text: "Public" },
      { value: "Private", text: "Private" },
    ],
            Description: '',
             dismissSecs: 3,
    dismissCountDown: 0,
    showDismissibleAlert: false,
        }
        
    },
    methods:{
         addService() {
            let payload = {
                service_name: this.Sname,
                api_url: this.Sentry,
                description: this.Description,
                permission: this.Permission ,
                user_id: this.$store.state.serviceid,
            }
            this.$store.dispatch('Insertservice',payload).then(
              setTimeout(() =>{
            this.$store.dispatch('servicelistUser')
                }, 3000)
  
             
            ).then(
               setTimeout(() =>{
            this.Sname = '',
              this.Sentry = '',
              this.Description =''
                }, 3000)
              
            )

        },
         countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
    
}
</script>

<style>
.ei2{
  padding-top: 80px;
}
</style>