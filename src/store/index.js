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
    servicelistUser: [],
    statusD: {},
    loading: false,
    updatesection: {},
    options: [
      { value: "Public", text: "Public" },
      { value: "Private", text: "Private" },
    ],
    sessionD: {},
    urlval: {},
    superuserlist: [],
    superDelete: {},
    superUpdate: {}
  
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
    SET_SESSIOND(state, session) {
      state.sessionD = session;
    },
    SET_URLVAL(state, validator) {
      state.urlval = validator;
    },
    SET_SUPERLIST(state, superlist) {
      state.superuserlist = superlist
    },
    SET_SUPERDELETE(state, deletesession) {
      state.superDelete = deletesession
    },
    SET_SUPERUPDATE(state, updates) {
      state.superUpdate = updates
    }
  },
  actions: {
    addUser(context, payload) {
      // context.commit("SET_USERLOGIN", payload);
      axios
        .post("https://restfulapipython.herokuapp.com/v1/APIs/login", payload)
        .then((res) => {
          var getuser = res.data[0];
          var reciveuser = getuser.data;
          context.commit("SET_USERLOGIN", reciveuser);
          context.commit("SET_SID", reciveuser.user_id);
        });
    },
    servicelist({ commit },params) {
     
      this.state.loading = true;
      axios
        .get("https://restfulapipython.herokuapp.com/v1/APIs/", {
          params,
        })
        .then((res) => {
          var data = res.data;

          commit("SET_SERVIVCE", data);
          this.state.loading = false;
        });
    },
    Insertservice(context, payload) {
      axios
        .post(
          "https://restfulapipython.herokuapp.com/v1/APIs/service/add",
          payload
        )
        .then((res) => {
          // console.log(res.data);
          context.commit("SET_ISTATUS", res.data[0]);
        });
    },
    servicelistUser({ commit }, params) {

      this.state.loading = true;
      axios
        .get("https://restfulapipython.herokuapp.com/v1/APIs/user", {
          params,
        })
        .then((res) => {
          // console.log(res.data);
          commit("SET_SERVIVCEUSER", res.data);
          this.state.loading = false;
        });
    },
    serviceDelete({ commit }, payload) {
      commit("SET_SESSIOND", payload);
      this.state.loading = true;
      axios
        .delete(
          "https://restfulapipython.herokuapp.com/v1/APIs/service/delete",
          {
            data: {
              sid: this.state.sessionD.sid,
              u: this.state.sessionD.u,
            },
          }
        )
        .then((res) => {
          commit("SET_DELETESTATUS", res);
          this.state.loading = false;
        });
    },
    Updateservice({ commit }, payload) {
      commit("SET_UPDATE", payload);
      axios.patch(
        "https://restfulapipython.herokuapp.com/v1/APIs/service/update",
        this.state.updatesection
      );
    },
    Uralvalidate({ commit }, payload) {
      axios
        .post("https://restfulapipython.herokuapp.com/v1/APIs/urlval", payload)
        .then((res) => {
          commit("SET_URLVAL", res.data);

        });
    },
    Superlist({ commit }, params) {
      this.state.loading = true
      axios
        .get("https://restfulapipython.herokuapp.com/v1/APIs/admins", {params})
        .then((res) => {
          commit("SET_SUPERLIST", res.data[0]);
          this.state.loading = false
        })
    },
    SuperDelete({ commit }, payload) {
      commit("SET_SUPERDELETE",payload);
      axios.delete(
        "https://restfulapipython.herokuapp.com/v1/APIs/admins/service/delete",
        {
          data: {
            sid: this.state.superDelete.sid,
              status: this.state.superDelete.status,
            u: this.state.superDelete.u,
          }
        }
      );
    },
    SuperUpdate({ commit }, payload) {
      commit("SET_SUPERUPDATE", payload);
      axios.patch(
        "https://restfulapipython.herokuapp.com/v1/APIs/admins/service/update",
        this.state.superUpdate
      );
    }
  },
  modules: {},
});
