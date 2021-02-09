<template>
  <div id="Navigator">
    <b-navbar toggleable="lg" fixed="top" >
      <b-navbar-brand :style="{ color: `white` }"
        >ABDUL Registration API
      </b-navbar-brand>
      <b-navbar-nav  >
        <b-nav-item to="/">WE API</b-nav-item>
        <div v-if="$store.state.user">
          <b-nav-item to="/myapi">MY API</b-nav-item>
        </div>
        <div v-if="$store.state.user.ar == `superuser`">
      <b-nav-item to="/Admin">Super User</b-nav-item>
        </div>
        <div v-if="$store.state.user.ff == 'phongsiri.pueng@gmail.com'">
          <b-nav-item to="/playground">PLAYGROUND</b-nav-item>
        </div>
      </b-navbar-nav>
      <b-navbar-toggle   target="sidebar-colla" right></b-navbar-toggle>
      <b-navbar-nav class="ml-auto">
        <b-nav-form> </b-nav-form>
        <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template #button-content v-if="$store.state.user" >
            <img :src="$store.state.user.fo" />
            {{ $store.state.user.ff }}
          </template>
          <template #button-content v-else> SignIn </template>
          <b-dropdown-item href="/">
            <google-sign-in></google-sign-in>
          </b-dropdown-item>
          <!-- <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-sidebar id="sidebar-colla" is-nav right shadow>
        <div class="mb-3">
          <b-button
          v-b-toggle="'accordion-productdetails' + index"
            :style="{ backgroundColor: `darkred` }"
         
            v-if="$store.state.user"
          >
            <img :src="$store.state.user.fo" />
            {{ $store.state.user.ff }}</b-button
          >
          <b-button
            v-b-toggle="'accordion-productdetails' + index" 
            v-else
            :style="{
              borderColor: `darkred`,
              backgroundColor: `rgba(0,0,0,0)`,
              color: `Black`,
              width: `200px`,
            }"
          >
            SignIn
          </b-button>
        </div>

        <b-collapse  :id="'accordion-productdetails' + index">
          <b-card
            ><b-button variant="outline-danger" href="/"
              ><google-sign-in></google-sign-in
            ></b-button>
          </b-card>
        </b-collapse>

        <b-nav-item to="/">WE API</b-nav-item>
        <div v-if="$store.state.user">
          <b-nav-item to="/myapi">MY API</b-nav-item>
        </div>
        <div v-if="$store.state.user.status == 'superuser'">
          <b-nav-item to="/Admin">Super User</b-nav-item>
        </div>
        <div v-if="$store.state.user.gmail == 'phongsiri.pueng@gmail.com'">
          <b-nav-item to="/playground">PLAYGROUND</b-nav-item>
        </div>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form> </b-nav-form>
        </b-navbar-nav>
      </b-sidebar>
    </b-navbar>
  </div>
</template>

<script>
import GoogleSignIn from "./SignIn/GoogleSignIn.vue";
export default {
  name: "Navigator",
  components: { GoogleSignIn },
  mounted() {
    setInterval(() => {
      this.$store.state.user;
    }, 100);
  },
};
</script>

<style>
.navbar {
  background-color: maroon;
  height: 60px;
}

img {
  width: 30px;
  border-radius: 50%;
}
li {
  display: unset;
}

a.dropdown-item {
  padding: 0;
}
#nav a.router-link-exact-active {
  background-color: white;
  color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

@media only screen and (max-width: 991px) {
  .navbar-nav {
    display: none;
  }
  .navbar-nav .nav-link {
    display: none;
  }
  button.navbar-toggler.collapsed {
    align-self: auto;
  }

  a.router-link-exact-active {
    color: white;
    background-color: darkred;
  }
}
</style>