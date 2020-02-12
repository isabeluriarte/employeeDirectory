import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};