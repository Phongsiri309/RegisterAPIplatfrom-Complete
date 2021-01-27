<template>
  <div id="UserCard">
    <b-container
      class="p-3 mb-1"
      :style="{ width: `60%` }"
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
          <h1>{{ service.service_name }}</h1>
          <b-card-title
            ><h6>Author : {{ service.gmail }}</h6></b-card-title
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

        <b-row>
          <b-col class="text-left mt-3">
            <b-button
              v-b-toggle="'accordion-productdetails' + index"
              class="b-skeleton-animate-throb"
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
              <div>URL : {{ service.api_url }}</div>
              method :
              <span
                v-if="(service.method = 'GET')"
                :style="{
                  backgroundColor: `green`,
                  color: `white`,
                  borderRadius: `10px 10px 10px 10px`,
                }"
              >
                {{ service.method }}
              </span>
              <span
                v-else
                :style="{
                  backgroundColor: `blue`,
                  color: `white`,
                  borderRadius: `10px 10px 10px 10px`,
                }"
                >{{ service.method }}</span
              >
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
</style>