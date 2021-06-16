import axios from 'axios';

var BackEnd_IP = "http://localhost:3001";

export default {
  get(route) {
    return axios.get(BackEnd_IP + route)
      .then(response => {
        return response;
      })
  }
}
