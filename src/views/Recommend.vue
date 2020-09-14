<template>
  <div id="recommend" ref="recommend">
    <div>
      <!-- <div class="bgcolor"></div> -->
      <banner-list :banner="banner"></banner-list>
      <recommend-list :recommend="recommend"></recommend-list>
    </div>
  </div>
</template>

<script>
// import BetterScroll from "better-scroll";
import { mapState, mapGetters } from "vuex";
import BannerList from "../components/common/banner-list";
import RecommendList from "../components/common/recommend-list";
export default {
  name: "Recommend",
  components: {
    BannerList,
    RecommendList,
  },
  data() {
    return {};
  },
  computed: {
    // dataUp(){
    //   const dataup = {banner,recommend} = this;
    //   return dataup
    // },
    // 取得仓库中的数据
    ...mapState({
      banner: (state) => state.recommend.banner,
      recommend: (state) => state.recommend.recommend,
    }),
    ...mapGetters({
      loading: "recommend/loading",
    }),
  },
  created() {
    this.$store.dispatch("recommend/requestBannerList");
    this.$store.dispatch("recommend/requestRecommendList");
  },
  // watch:{
  //   dataUp(){
  //     let 
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#recommend {
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  .bgcolor {
    z-index: 1;
    position: fixed;
    margin-top: -220px;
    height: 300px;
    width: 100%;
    background-color: $theme-color;
  }
}
</style>