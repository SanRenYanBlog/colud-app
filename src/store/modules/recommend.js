import {BANNER_API, RECOMMEND_LIST_API} from '../../api/url'
import http from '../../api/http'
export default {
  namespaced: true,
  state: {
    banner: [],
    recommend: [],
    bannerLoading: false,
    recommendLoading: false,
  },
  getters: {
    loading(state){
      return state.bannerLoading || state.recommendLoading;
    }
  },
  mutations: {
    // 设置轮播图状态
    setBannerLoading(state, payload){
      state.bannerLoading = payload;
    },
    setBanner(state, payload){
      state.banner = payload;
    },
    // 推荐歌单状态
    setRecommendLoading(state, payload){
      state.recommendLoading = payload;
    },
    setRecommend(state, payload){
      state.recommend = payload;
    }
  },
  actions: {
    // 请求轮播图的数据
    async requestBannerList(context){
      context.commit('setBannerLoading', true);
      const {data: {banners}} = await http.get(BANNER_API);
      const newData = banners.map(item=>item.imageUrl);
      context.commit('setBanner', newData);
      context.commit('setBannerLoading', false);
    },
    // 请求推荐歌单
    async requestRecommendList(context){
      context.commit('setRecommendLoading', true);
      const {data: {result}} = await http.get(RECOMMEND_LIST_API);
      const newData = result.map(({id, name, picUrl, playCount})=>({id, name, picUrl, playCount}));
      context.commit('setRecommend', newData);
      context.commit('setRecommendLoading', false);
    }
  }
}