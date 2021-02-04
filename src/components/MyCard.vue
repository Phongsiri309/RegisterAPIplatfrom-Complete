<template>
  <div id="Mycard" >
    <b-container
      class="p-3 mb-1"
      :style="{ width: `60%` }"
      v-for="(service, index) in this.$store.state.servicelistUser[0]"
      :key="service.id"
    >
      <b-card
        class="mb-3"
        :style="{ borderRadius: `20px`, backgroundColor: `#632E12` }"
      >
        <b-card-header
          class="text-left"
          :style="{
            borderRadius: `20px 20px 0px 0px`,
            backgroundColor: `#8C0002`,
            color: `#FFF9D7`,
          }"
        >
          <span v-if="service.od == `public`">
            <img
              src="@/assets/icons8_earth_planet.png"
              align="right"
              :style="{ marginBottom: `15px` }"
            />
          </span>
          <span v-else>
            <img
              src="@/assets/icons8_lock.png"
              align="right"
              :style="{ marginBottom: `15px` }"
            />
          </span>
          <h1>
            <input
              v-model="service.am"
              v-on:blur="update(service)"
              class="w-75"
              :style="{
                border: `none`,
                background: `darkred`,
                color: `white`,
              }"
              readonly
              ondblclick="this.readOnly='';"
            />
          </h1>
          <b-card-title>
            <h6>Author : {{ service.fh }}</h6>
          </b-card-title>
        </b-card-header>

        <b-card-body
          class="text-left"
          :style="{
            borderRadius: `0px 0px 10px 10px`,
            backgroundColor: `#E8CFBB`,
          }"
        >
          <b-form-textarea
            id="textarea-large"
            size="lg"
            v-model="service.sy"
            :style="{ border: `none`, backgroundColor: `rgba(0 ,0, 0, 0)` }"
            v-on:blur="update(service)"
            readonly
            ondblclick="this.readOnly='';"
          ></b-form-textarea>
        </b-card-body>

        <b-row class="mt-3">
          <b-col class="text-left">
            <b-button
              v-b-toggle="'accordion-productdetails' + index"
              class="b-skeleton-animate-throb"
              :style="{ background: `rgba(0 ,0 ,0 ,0)`, borderColor: `white` }"
              >Detail
            </b-button>
          </b-col>
          <b-col class="text-right">
            <b-button
              :style="{
                background: `rgba(0 ,0 ,0 ,0)`,
                borderColor: `red`,
                color: `red`,
              }"
              v-on:click="deleteitem(service)"
            >
              <img
                src="@/assets/icons8_trash.png"
                :style="{ height: `23px` }"
              />
            </b-button>
          </b-col>
        </b-row>

        <b-collapse
          class="mt-3"
          :id="'accordion-productdetails' + index"
          visible:accordion="'productdetails-accordion'+index"
        >
          <b-card
            align="left"
            :style="{ backgroundColor: `#FFF9D7`, color: `#E80600` }"
          >
            <b-card-title> Endpoint </b-card-title>
            <b-card-body>
              <div>
                URL 
                <b-row>
                  <b-spinner type="grow" variant="danger"></b-spinner>
                <b-form-input
                  class="w-50"
                  v-model="service.wo"
                  v-on:blur="update(service)"
                  :style="{
                    border: `none`,
                    backgroundColor: `rgba(0 ,0 ,0 ,0)`,
                  }"
                  readonly
                  ondblclick="this.readOnly='';"
                ></b-form-input>
                
                </b-row>
              </div>
              <div v-if="service.ny === 'GET'">
                method :
                <span class="bg-success text-white"
                  ><b-form-select
                    v-model="service.ny"
                    :style="{
                      width: `80px`,
                      border: `none`,
                      color: `white`,
                      background: `green`,
                    }"
                    v-on:change="update(service)"
                  >
                    <b-form-select-option value="GET">GET</b-form-select-option>
                    <b-form-select-option value="POST"
                      >POST</b-form-select-option
                    >
                  </b-form-select></span
                >
              </div>
              <div v-else>
                method :
                <span class="bg-primary text-white"
                  ><b-form-select
                    v-model="service.ny"
                    :style="{
                      width: `80px`,
                      border: `none`,
                      color: `white`,
                      background: `blue`,
                    }"
                    v-on:change="update(service)"
                  >
                    <b-form-select-option value="GET">GET</b-form-select-option>
                    <b-form-select-option value="POST"
                      >POST</b-form-select-option
                    >
                  </b-form-select></span
                >
              </div>
              <table class="table mt-3">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(param, index) in service.oa"
                    :key="`paramName-${index}`"
                  >
                    <td>
                      <input
                        v-model="param.om"
                        v-on:blur="update(service)"
                        :style="{
                          border: `none`,
                          backgroundColor: `rgba(0,0,0,0)`,
                          color: `black`,
                        }"
                        readonly
                        ondblclick="this.readOnly='';"
                      />
                    </td>
                    <td>
                      <b-form-select
                        v-model="param.oy"
                        :style="{
                          width: `80px`,
                          border: `none`,
                          color: `black`,
                          backgroundColor: `rgba(0,0,0,0)`,
                        }"
                        v-on:change="update(service)"
                      >
                        <b-form-select-option value="str"
                          >Str</b-form-select-option
                        >
                        <b-form-select-option value="int"
                          >Int</b-form-select-option
                        >
                        <b-form-select-option value="any"
                          >any</b-form-select-option
                        >
                      </b-form-select>
                    </td>

                    <td>
                      <input
                        v-model="param.sv"
                        v-on:blur="update(service)"
                        :style="{
                          border: `none`,
                          backgroundColor: `rgba(0,0,0,0)`,
                          color: `black`,
                        }"
                        readonly
                        ondblclick="this.readOnly='';"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-card-body>
          </b-card>
        </b-collapse>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Mycard",

  mounted() {
    if (this.$store.state.user.yo) {
      this.$store.dispatch("servicelistUser");
    } else {
      setTimeout(() => {
        this.$store.dispatch("servicelistUser");
      }, 3000);
    }
  },

  methods: {
    deleteitem(service) {
      let payload = {
        sid: service.ao,
        u: this.$store.state.user.yo,
      };
      this.$store.dispatch("serviceDelete", payload).then(
        setTimeout(() => {
          this.$store.dispatch("servicelistUser");
        }, 1000)
      );
    },
    update(service) {
      let payload = {
        sname: service.am,
        endpoint: service.wo,
        permiss: service.od,
        sid: service.ao,
        u: this.$store.state.user.yo,
        desc: service.sy,
        methods: service.ny,
        parameter: service.oa

      };
      this.$store.dispatch("Updateservice", payload);
    },
  },
};
</script>

<style>

</style>
