<template>
  <div id="Navbar-N">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-nav>
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
      </b-navbar-nav>
      <b-navbar-toggle target="sidebar-collapse"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto">
        <b-nav-form> </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content v-if="$store.state.user">
            <img :src="$store.state.user.google_photo" />
            {{ $store.state.user.gmail }}
          </template>
          <template #button-content v-else> SignIn </template>
          <b-dropdown-item href="/">
            <google-sign-in></google-sign-in>
          </b-dropdown-item>
          <!-- <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-sidebar id="sidebar-collapse" is-nav right shadow>
        <div class="mb-3">
          <b-button
            :style="{ backgroundColor: `darkred` }"
            v-b-toggle.my-collapse
            v-if="$store.state.user"
          >
            <img :src="$store.state.user.google_photo" />
            {{ $store.state.user.gmail }}</b-button
          >
        </div>

        <b-collapse id="my-collapse">
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
  name: "Navbar-N",
  components: { GoogleSignIn },
};
</script>

<style>
img {
  width: 30px;
  border-radius: 50%;
}
li {
  display: unset;
}

#nav a.router-link-exact-active {
  background-color: whitesmoke;
  color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

@media only screen and (max-width: 991px) {
  .navbar-nav {
    display: none;
  }
  a.router-link-exact-active {
    color: white;
    background-color: darkred;
  }
}
</style>