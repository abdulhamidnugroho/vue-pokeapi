import axios from "axios";

const $api = {
  install(Vue) {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";
    const instance = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    Vue.prototype.$api = {
      url() {
        return API_URL;
      },
      pokemons(limit, offset) {
        return instance.get(`?limit=${limit}&offset=${offset}`);
      },
      pokemon(id) {
        return instance.get(id);
      },
    };
    Vue.prototype.$axios = instance;
  },
};

export default $api;
