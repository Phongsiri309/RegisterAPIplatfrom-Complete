<template>
  <div id="UserCard" >
    <b-container 
      v-for="(service, index) in this.$store.state.servicelist[0]"
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
          <h1>{{ service.am }}</h1>
          <b-card-title
            ><h6>Author : {{ service.fh }}</h6></b-card-title
          >
        </b-card-header>
        <b-card-body
          class="text-left"
          :style="{
            borderRadius: `0px 0px 10px 10px`,
            backgroundColor: `#E8CFBB`,
          }"
        >
          {{ service.sy }}
        </b-card-body>

        <b-row>
          <b-col class="text-left mt-3">
            <b-button 
              v-b-toggle="'accordion-productdetails' + index"
              class="b-skeleton-animate-throb "
              :style="{ background: `rgba(0 ,0 ,0 ,0)`, borderColor: `white` }"
              >Detail
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
              <div>URL : {{ service.wo }} <b-spinner type="grow" variant="danger" class="ml-3"></b-spinner></div>

              <div v-if="service.ny === 'GET'">
                method :
                <span class="bg-success text-white">{{ service.ny }}</span>
              </div>
              <div v-else>
                method :
                <span class="bg-primary text-white">{{ service.ny }}</span>
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
                  <tr v-for="(param, index) in service.oa" :key="`paramName-${index}`">
                    <td>
                      {{ param.om}}
                    </td>
                     <td>
                      {{ param.oy }}
                    </td>
                     <td>
                      {{ param.sv }}
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
  name: "UserCard",
  data() {
    return {
      perPage: 10,
    };
  },
  mounted() {
    this.$store.dispatch("servicelist");
    //  .then(
    //       setInterval(() =>{
    //        this.$store.dispatch('servicelist')
    //        }, 8000)
    //  )
  },
};
</script>

<style>

.container {
  width: 60%;
}
@media only screen and (max-width: 420px) {
  .container {
    width: unset;
  }
}
</style>