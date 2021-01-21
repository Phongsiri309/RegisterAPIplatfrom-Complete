import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    params: {
      client_id:
        "1042372769466-ctqeoo0isdkbt1pethp8no473sejgl7h.apps.googleusercontent.com",
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
  },
  actions: {
    addUser(context, payload) {
      context.commit("SET_USERLOGIN", payload);
      axios
        .post("https://apicontroller.herokuapp.com/User", this.state.user)
        .then((res) => {
          var getuser = res.data[0];
          var reciveuser = getuser.data;
          context.commit("SET_SID", reciveuser.user_id);
          console.log(reciveuser);
        });
    },
    servicelist({ commit }) {
      let params = {
        limit: 10,
      };
      axios
        .get("https://apicontroller.herokuapp.com/ApiList", { params })
        .then((res) => {
          var data = res.data;
          console.log(data);
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
