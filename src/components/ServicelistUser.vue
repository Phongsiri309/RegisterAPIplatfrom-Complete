<template>
  <div id="ServicelistUser">
    <div class="container">
      <p v-if="$store.state.loading">
        <b-spinner label="Spinning"></b-spinner>
      </p>
      <p v-else>
        <b-card-group
          deck
          v-for="service in this.$store.state.servicelistUser[0]"
          :key="service.service_id"
        >
          <b-card header-tag="header" footer-tag="footer" align="left">
            <template #header>
              <b-card-title>
                <input
                  
                  v-model="service.service_name"
                  v-on:blur="update(service)"
                  :style="{
                    border: `none`,
                    background: `darkred`,
                    color: `white`,
                  }"
                  readonly
                  ondblclick="this.readOnly='';"
                />
                <span v-if="service.permission == `public`">
                
                  <img src="@/assets/icons8_earth_planet.png" align="right" :style="{marginBottom:`15px`}" />
                 
                  
                </span>
                <span v-else>
                  <img src="@/assets/icons8_lock.png" align="right" :style="{marginBottom:`15px`}"/>
                </span>
              
              </b-card-title>
              <h6 class="mb-0">Author : {{ service.gmail }}  <b-form-select
                    v-model="service.permission"
                    :style="{
                      width: `110px`,
                      border: `none`,
                      background: `darkred`,
                      marginLeft: `980px`,
                      color: `white`,
                    }"
                    v-on:change="update(service)"
                  >
                    <b-form-select-option value="public"
                      >Public</b-form-select-option
                    >
                    <b-form-select-option value="private"
                      >Private</b-form-select-option
                    >
                  </b-form-select></h6>
           
            </template>
            <b-card-text>
              Descriptions 
              <b-col >
                <b-form-textarea
                  id="textarea-large"
                  size="lg"
                  v-model="service.description"
                  :style="{ border: `none` }"
                  v-on:blur="update(service)"
                  readonly
                  ondblclick="this.readOnly='';"
                ></b-form-textarea>
              </b-col>
            </b-card-text>
            <template #footer>
              <em>
                <b-input-group
                  prepend="Endpoint"
                  :style="{ border: `none` }"
                  class="mt-3"
                >
                  <b-form-input
                    v-model="service.api_url"
                    v-on:blur="update(service)"
                    :style="{ border: `none` }"
                    readonly
                    ondblclick="this.readOnly='';"
                  ></b-form-input>
                  <b-button
                    variant="outline-danger"
                    align="right"
                    v-on:click="deleteitem(service)"
                  >
                    <img
                      src="@/assets/icons8_trash.png"
                      :style="{ height: `23px` }"
                    />
                  </b-button>
                </b-input-group>
              </em>
            </template>

            <div></div>
          </b-card>
        </b-card-group>
        <b-pagination
          v-model="$store.state.currentPage"
          :total-rows="$store.state.servicelistUser[1].total"
          :per-page="$store.state.perPage"
          class="mt-4"
          align="right"
        >
          <template #first-text
            ><span class="text-success">First</span></template
          >
          <template #prev-text><span class="text-danger">Prev</span></template>
          <template #next-text
            ><span class="text-warning" value="page">Next</span></template
          >
          <template #last-text><span class="text-info">Last</span></template>
          <template #ellipsis-text>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
          </template>
          <template #page="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </template>
        </b-pagination>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicelistUser",

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
        this.$store.dispatch("serviceDelete", payload)
      .then(setTimeout(()=>{
this.$store.dispatch("servicelistUser")
      },1000)
        
      )
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
#BgT {
  background-color: rgba(0, 0, 0, 0);
}

.dropdown {
  border: none;
}
</style>