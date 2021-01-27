<template>
  <div id="RegInput">
    <b-container>
      <b-input-group class="mt-3">
        <b-form-input
          v-model="Servicename"
          placeholder="Service Name . . ."
        ></b-form-input>
        <b-form-input
          v-model="Endpoint"
          placeholder="Endpoint . . ."
        ></b-form-input>
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
        Dsecriptions
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
        <b-card>
          <b-row align-h="start" class="ml-1 mt-3">
            Dsecriptions for Parameter usecase
            <b-textarea
              v-model="DescriptionsPU"
              class="ml-2 w-75 mb-3"
            ></b-textarea>
          </b-row>
          <b-input-group v-for="(input, k) in inputs" :key="k" class="mb-3">
            <b-form-input placeholder="parameter" v-model="input.parameterN" />

            <b-form-select
              placeholder="type "
              v-model="input.parameterT"
              :options="Titems"
            />
            <b-input-group-append>
              <b-button
                variant="outline-danger"
                @click="remove(k)"
                v-show="k || (!k && inputs.length > 1)"
                >Remove</b-button
              >
              <b-button
                variant="outline-primary"
                @click="add(k)"
                v-show="k == inputs.length - 1"
                >Add fields</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-collapse>
      <b-row>
        <b-col></b-col>
        <b-button class="mt-3" variant="outline-success" v-on:click="addService"
          >Create</b-button
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "RegInput",
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
          parameterN: "",
          parameterT: "Int",
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
      DescriptionsPU: "",
    };
  },
  methods: {
    add() {
      this.inputs.push({
        parameterN: "",
        parameterT: "",
      });
      console.log(this.inputs);
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    addService() {
      let payload = {
        service_name: this.Servicename,
        api_url: this.Endpoint,
        description: this.Descriptions,
        permission: this.Permission,
        user_id: this.$store.state.serviceid,
        method: this.methods,
        desc: this.DescriptionsPU,
      };
      this.$store
        .dispatch("Insertservice", payload)
        .then(
          setTimeout(() => {
            this.$store.dispatch("servicelistUser");
          }, 3000)
        )
        .then(
          setTimeout(() => {
            (this.Sname = ""), (this.Sentry = ""), (this.Description = "");
          }, 3000)
        );
    },
  },
};
</script>

<style>
</style>