const { Store } = require("vuex");

import axios from "axios";
import router from "../router";

let base = window.location.host.includes("localhost")
  ? "//localhost:8000/"
  : "/";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeadername = "X-CSRFToken";

let api = axios.create({
  baseURL: base + "lists/",
  timeout: 3000,
  withCredentials: true,
  headers: {
    Authorization: `JWT ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
  xhrFields: {
    withCredentials: true,
  },
});

export const ListStore = {
  state: {
    lists: [],
  },
  mutations: {
    setAllLists(state, lists) {
      state.lists = lists;
    },
  },
  actions: {
    async getAllLists({ commit, dispatch }) {
      let res = await api.get("");
      commit("setAllLists", res.data);
    },
  },
};
