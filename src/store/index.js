import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { LoaderPlugin } from "vue-google-login";

const CLIENT_ID =
  "1042372769466-ctqeoo0isdkbt1pethp8no473sejgl7h.apps.googleusercontent.com";

Vue.use(LoaderPlugin, {
  client_id: CLIENT_ID,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    params: {
      client_id: CLIENT_ID,
      scope: "https://www.googleapis.com/auth/gmail.readonly",
    },
    // only needed if you want to render the button with the google ui
    renderParams: {
      width: 250,
      height: 50,
      longtitle: true,
    },
    servicelist: [],
    serviceadd: {},
    serviceid: "",
    Insertstatus: [],
    cuser: "",
  },
  mutations: {
    SET_USERLOGIN(state, Profile) {
      state.user = Profile;
    },
    SET_SERVIVCE(state, Servicelist) {
      state.servicelist = Servicelist;
    },
    SET_SID(state, suid) {
      state.serviceid = suid;
    },
    SET_ISTATUS(state, Ista) {
      state.Insertstatus = Ista;
    },
    SET_CUSER(state, Current) {
      state.cuser = Current;
    },
  },
  actions: {
    gUser(context, payload) {
      context.commit("SET_CUSER", payload);
    },
    addUser(context, payload) {
      // context.commit("SET_USERLOGIN", payload);
      axios
        .post("https://apicontroller.herokuapp.com/User", payload)
        .then((res) => {
          var getuser = res.data[0];
          var reciveuser = getuser.data;
          context.commit("SET_USERLOGIN", reciveuser);
          context.commit("SET_SID", reciveuser.user_id);
          console.log(reciveuser);
        });
    },
    servicelist({ commit }) {
      axios.get("https://apicontroller.herokuapp.com/ApiList").then((res) => {
        var data = res.data;
        // console.log(data);
        commit("SET_SERVIVCE", data);
      });
    },
    Insertservice(context, payload) {
      axios
        .post("https://apicontroller.herokuapp.com/ApiSignUp", payload)
        .then((res) => {
          context.commit("SET_ISTATUS", res);
          console.log(res);
        });
    },
  },
  modules: {},
});
