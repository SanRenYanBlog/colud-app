import {BANNER_API} from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {
    async requestBannerList(){
      const result = await http.get(BANNER_API,{type:2});
      console.log(result);
    },
  }
}