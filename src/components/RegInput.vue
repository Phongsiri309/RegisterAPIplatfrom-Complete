<template>
  <div id="RegInput" >
    <b-container >
    
      <b-input-group class="mt-3">
        <b-form-input
          v-model="Servicename"
          placeholder="Service Name . . ."
        ></b-form-input>
        <b-form-input
          v-model.trim="$v.Endpoint.$model"
          placeholder="Endpoint . . ."
:class="{'is-invalid':$v.Endpoint.$error,'is-valid':!$v.Endpoint.$invalid}"
          ></b-form-input>
<b-form-valid-feedback >Collect</b-form-valid-feedback>
      <b-form-invalid-feedback>
        <span v-if="!$v.Endpoint.required">Url required</span>
        <span v-if="!$v.Endpoint.url">http:// or https://</span>
      </b-form-invalid-feedback>
 
      </b-input-group>
      <b-row class="w-auto mt-3">
        <b-col>
          <b-input-group prepend="Permission">
            <b-form-select
              v-model="Permission"
              :options="Pitems"
            ></b-form-select>
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group prepend="method">
            <b-form-select v-model="methods" :options="Mitems"></b-form-select>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row align-h="start" class="ml-1 mt-3">
        Descriptions
        <b-textarea v-model="Descriptions" class="ml-2 w-75"></b-textarea>
      </b-row>
      <div class="mb-3 mt-3" align="left">
        <b-button
          v-b-toggle.my-collapse
          variant="outline-dark"
          :style="{ borderColor: `blueviolet` }"
          >Parameter SET</b-button
        >
      </div>

      <b-collapse id="my-collapse">
        <b-card v-for="(input, k) in inputs" :key="k">
          <b-input-group  class="mb-2">
            <b-form-input placeholder="Name . . ." v-model="input.paramN" />
            <b-form-select
              placeholder="type "
              v-model="input.paramT"
              :options="Titems"
            />
            <b-form-input
              v-model="input.desc"
              placeholder="Description. . ."
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="outline-danger"
                @click="remove(k)"
                v-show="k || (!k && inputs.length > 1)"
                ><img src="@/assets/icons8_multiply.png" :style="{height:`20px`,width:`20px`}"></b-button
              >
              
            </b-input-group-append>
             
          </b-input-group>
                   
              <b-button  :style="{borderRadius:`30px 30px 30px 30px`}"
                variant="outline-success"
                @click="add(k)"
                v-show="k == inputs.length - 1"
                ><img src="@/assets/icons8_plus_green.png"  ></b-button
              >
           
        </b-card>
      </b-collapse>
      <b-row>
        <b-col></b-col>

        <b-button  class="mt-3" variant="outline-success"
         v-on:click="addService" >Create</b-button
        >
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required,maxLength,url} from 'vuelidate/lib/validators'
export default {
  name: "RegInput",
  validations:{
    
    Endpoint: { required, url, maxLength: maxLength(2083) }},
  data() {
    return {
     
      Servicename: "",
      Endpoint: "",
      Descriptions: "",
      Permission: "Public",
      Pitems: [
        { value: "Public", text: "Public" },
        { value: "Private", text: "Private" },
      ],
      methods: "GET",
      Mitems: [
        { value: "GET", text: "GET" },
        { value: "POST", text: "POST" },
      ],
      inputs: [
        {
          paramN: "",
          paramT: "Int",
          desc: "",
        },
      ],
      Titems: [
        {
          value: "Int",
          text: "Int",
        },
        {
          value: "Str",
          text: "Str",
        },
        {
          value: "Any",
          text: "Any",
        },
      ],
      currentPage: 1,
      Filter: -1
    };
  },
  methods: {

    add() {
      this.inputs.push({
        paramN: "",
        paramT: "",
      });
      // console.log(this.inputs);
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    addService() {
    
      this.$v.Endpoint.$touch()
      if(this.$v.Endpoint.$error) return
      let params = {
        page: this.currentPage,
        sort: this.Filter,
        user_id: this.$store.state.user.yo
      };
       
      let payload = {
        sname: this.Servicename,
        endpoint: this.Endpoint,
        desc: this.Descriptions,
        permiss: this.Permission,
        user: this.$store.state.user.yo,
        methods: this.methods,
        parameter: this.inputs,
      };
      this.$store
        .dispatch("Insertservice", payload)
        .then(
          setTimeout(() => {
            this.$store.dispatch("servicelistUser",params);
          }, 3000)
        )
        // .then(
        //   setTimeout(() => {
        //     (this.Sname = ""), (this.Sentry = ""), (this.Description = "");
        //   }, 3000)
        // );
    },
    
   
  },
};
</script>

<style>
</style>