import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { LoaderPlugin } from "vue-google-login";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

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
    servicelistUser: [],
    currentPage: 1,
    perPage: 10,
    statusD: {},
    loading: false,
    updatesection: {},
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
    SET_SERVIVCEUSER(state, ServicelistUser) {
      state.servicelistUser = ServicelistUser;
    },
    SET_DELETESTATUS(state, Status) {
      state.statusD = Status;
    },
    SET_UPDATE(state, Section) {
      state.updatesection = Section;
    },
  },
  actions: {
    addUser(context, payload) {
      // context.commit("SET_USERLOGIN", payload);
      axios
        .post("https://apicontroller.herokuapp.com/user/login", payload)
        .then((res) => {
          var getuser = res.data[0];
          var reciveuser = getuser.data;
          context.commit("SET_USERLOGIN", reciveuser);
          context.commit("SET_SID", reciveuser.user_id);
        });
    },
    servicelist({ commit }) {
      let params = {
        page: this.state.currentPage,
      };
      this.state.loading = true;
      axios
        .get("https://apicontroller.herokuapp.com/service/list", { params })
        .then((res) => {
          var data = res.data;

          commit("SET_SERVIVCE", data);
          this.state.loading = false;
        });
    },
    Insertservice(context, payload) {
      axios
        .post("https://apicontroller.herokuapp.com/service/add", payload)
        .then((res) => {
          if (
            res.data[0].data.message ==
            "Service name or EntryPoint is already in use."
          ) {
            alert("บันทึกไม่สำเร็จ");
          } else {
            alert("บันทึกสำเร็จ");
          }

          context.commit("SET_ISTATUS", res);
        });
    },
    servicelistUser({ commit }) {
      let params = {
        page: this.state.currentPage,
        user_id: this.state.user.user_id,
      };
      this.state.loading = true;
      axios
        .get("https://apicontroller.herokuapp.com/user/service", { params })
        .then((res) => {
          commit("SET_SERVIVCEUSER", res.data);
          this.state.loading = false;
        });
    },
    serviceDelete({ commit }, payload) {
      commit("SET_DELETESTATUS", payload);
      axios
        .delete("https://apicontroller.herokuapp.com/service/delete", {
          data: {
            user_id: this.state.statusD.user_id,
            service_id: this.state.statusD.service_id,
          },
        })
        .then((res) => {
          commit("SET_DELETESTATUS", res);
        });
    },
    Updateservice({ commit }, payload) {
      commit("SET_UPDATE", payload);
      axios
        .patch(
          "https://apicontroller.herokuapp.com/service/update",
          this.state.updatesection
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
  modules: {},
});
