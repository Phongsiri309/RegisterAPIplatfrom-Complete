<template>
  <div id="SuperCard">
    <b-container>
      <b-row align-h="end">
        <h4 class="pr-3">Sort By</h4>
        <b-form-select
          v-on:change="sortFilter"
          class="w-25 mb-3"
          v-model="Filter"
          :options="Foptions"
        >
        </b-form-select>
      </b-row>
    </b-container>
    <p v-if="$store.state.loading">
      <b-spinner
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
      ></b-spinner>
    </p>
    <b-container
      v-else
      class="p-3 mb-1"
      :style="{ width: `60%` }"
      v-for="(service, index) in this.$store.state.superuserlist[0]"
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
              v-on:blur="Supdate(service)"
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
          <b-container>
              <b-row align-h="end">
                <b-form-select
                    v-model="service.od"

                    :style="{
                      width:`95px`,
                       border: `none`,
                      color: `white`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    }"
                    v-on:change="Supdate(service)"
                  >
                    <b-form-select-option value="public">Public</b-form-select-option>
                    <b-form-select-option value="private"
                      >Private</b-form-select-option
                    >
                  </b-form-select>
              </b-row>
            </b-container>
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
            v-on:blur="Supdate(service)"
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
              v-on:click="Sdelete(service)"
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
                <b-overlay
                  :show="busy"
                  rounded
                  opacity="0.6"
                  spinner-small
                  spinner-variant="primary"
                  class="d-inline-block"
                  @hidden="onHidden"
                >
                  <b-button
                    :id="index"
                    v-if="
                      $store.state.urlval.status == 'valid' &&
                        $store.state.urlval.sid == service.ao
                    "
                    variant="outline-success"
                    :disabled="busy"
                    v-on:click="checkurl(service, key)"
                  >
                    Connected
                  </b-button>
                  <b-button
                    :id="index"
                    v-else-if="
                      $store.state.urlval.status == 'invalid' &&
                        $store.state.urlval.sid == service.ao
                    "
                    variant="outline-danger"
                    :disabled="busy"
                    v-on:click="checkurl(service, key)"
                  >
                    Failed
                  </b-button>
                  <b-button
                    :id="index"
                    v-else
                    variant="outline-primary"
                    :disabled="busy"
                    v-on:click="checkurl(service, key)"
                  >
                    Test Connections
                  </b-button>
                </b-overlay>

                <b-row>
                  <b-form-input
                    class="w-50"
                    v-model="service.wo"
                    v-on:blur="Supdate(service)"
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
                    v-on:change="Supdate(service)"
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
                    v-on:change="Supdate(service)"
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
                        v-on:blur="Supdate(service)"
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
                        v-on:change="Supdate(service)"
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
                        v-on:blur="Supdate(service)"
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
    <b-container>
      <b-row align-h="end">
        <b-pagination
          v-model="currentPage"
          pills
          :per-page="perPage"
          :total-rows="$store.state.superuserlist[1].total"
        ></b-pagination>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SuperCard",
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      Filter: -1,
      Foptions: [
        { value: -1, text: "Date(Lastest)" },
        { value: 1, text: "Date(Oldest)" },
      ],
      busy: false,
    show: false,
      timeout: null,
    };
  },
  mounted() {
      this.show = true
    let params = {
      page: this.currentPage,
      user_id: this.$store.state.user.yo,
      status: this.$store.state.user.ar,
      sort: this.Filter,
    };
    if (this.$store.state.user.yo) {
          this.$store.dispatch("Superlist", params);
    } else {
      setTimeout(() => {
        this.$store.dispatch("Superlist", params);
        this.show = false
      }, 1000);
    }
  },
  methods: {
      
      Sdelete(service){
          this.show = true
          let payload = {
              sid: service.ao,
              u: this.$store.state.user.yo,
              status: this.$store.state.user.ar
          }
          let params = {
      page: this.currentPage,
      user_id: this.$store.state.user.yo,
      status: this.$store.state.user.ar,
      sort: this.Filter,
    };
          this.$store.dispatch('SuperDelete',payload).then(
        setTimeout(() => {
          this.$store.dispatch("servicelistUser",params);
          this.show = false
        }, 3000)
      );
      },
      Supdate(service){
          let payload = {
              sname: service.am,
              endpoint: service.wo,
              permiss: service.od,
              sid:service.ao,
              desc: service.sy,
              methods: service.ny,
              parameter: service.oa,
              status: this.$store.state.user.ar,
              u: this.$store.state.user.yo
          }
          this.$store.dispatch('SuperUpdate',payload)
      },
      checkurl(service) {
      this.busy = true;

      let payload = {
        url: service.wo,
        sid: service.ao,
      };

      this.$store.dispatch("Uralvalidate", payload).then(
        this.setTimeout(() => {
          this.busy = false;
        })
      );
    },
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    setTimeout(callback) {
      this.clearTimeout();
      this.timeout = setTimeout(() => {
        this.clearTimeout();
        callback();
      }, 1000);
    },
    onHidden() {
      // Return focus to the button once hidden
      this.$refs.button.focus();
    },
    
  },
   watch: {
    currentPage: function (val){
      let params = {
    page: this.currentPage,
      user_id: this.$store.state.user.yo,
      status: this.$store.state.user.ar,
      sort: this.Filter,
      };
    if(val > 0){
      this.$store.dispatch("Superlist", params);
    }
    }
  }
  
};
</script>

<style></style>
