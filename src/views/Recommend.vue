<template>
  <div id="recommend">
    <div class="bgcolor"></div>
    <banner-list></banner-list>
    <recommend-list></recommend-list>
    {{banner}}
  </div>
</template>

<script>
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
    return {
        
    };
  },
  computed: {
    // 取得仓库中的数据
    ...mapState({
      banner: (state) => state.recommend.banner,
    }),
    ...mapGetters({
    //   loading: "recommend/loading",
    }),
  },
  created() {
    this.$store.dispatch("recommend/requestBannerList");
  },
  updated(){
      console.log(banner);
      console.log(banner);
      console.log(banner);
      console.log(banner);
      console.log(banner);
      console.log(banner);
      console.log(banner);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#recommend {
  .bgcolor {
    z-index: -1;
    position: fixed;
    margin-top: -220px;
    height: 300px;
    width: 375px;
    background-color: $theme-color;
  }
}
</style>