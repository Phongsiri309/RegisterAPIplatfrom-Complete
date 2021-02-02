<template>
  <div id="Mycard">
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
          <h1>{{ service.service_name }}</h1>
          <b-card-title
            ><h6>Author : {{ service.gg }}</h6></b-card-title
          >
        </b-card-header>
        <b-card-body
          class="text-left"
          :style="{
            borderRadius: `0px 0px 10px 10px`,
            backgroundColor: `#E8CFBB`,
          }"
        >
          {{ service.description }}
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
              <div>URL : {{ service.api_url }}</div>
              <div v-if="service.method === 'GET'">
                method :
                <span class="bg-success text-white">{{ service.method }}</span>
              </div>
              <div v-else>
                method :
                <span class="bg-primary text-white">{{ service.method }}</span>
              </div>
              <table class="table">
                <thead>
                  <tr>
                 
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(param, index) in service.param_set" :key="`paramName-${index}`">
                 
                    <td >
                       {{ param.param_name }}
                    </td>
                    <td >
                      {{ param.param_type }}
                    </td>
                    
                    
                     <td>
                      {{ param.desc }}
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
    if (this.$store.state.user.user_id) {
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
        service_id: service.service_id,
        user_id: this.$store.state.user.user_id,
      };
      this.$store.dispatch("serviceDelete", payload).then(
        setTimeout(() => {
          this.$store.dispatch("servicelistUser");
        }, 1000)
      );
    },
    update(service) {
      let payload = {
        service_name: service.service_name,
        api_url: service.api_url,
        permission: service.permission,
        service_id: service.service_id,
        user_id: this.$store.state.user.user_id,
        description: service.description,
      };
      this.$store.dispatch("Updateservice", payload);
    },
  },
};
</script>

<style>
</style>