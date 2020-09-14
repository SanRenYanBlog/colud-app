<template>
  <div id="home">
    <div class="head">
      <span class="iconfont icon-caidan head-menu"></span>
      <span class="head-title">散人音悦台</span>
      <span class="iconfont icon-41 head-search"></span>
    </div>

    <ul class="tab">
      <router-link :class="{active :activeComp==='recommend'}" tag="li" to="/recommend">推荐</router-link>
      <router-link :class="{active :activeComp==='singers'}" tag="li" to="/singers">歌手</router-link>
      <router-link :class="{active :activeComp==='rank'}" tag="li" to="/rank">排行榜</router-link>
    </ul>
    <div ref="sc" class="sc">
      <div>
        <router-view class="view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "Home",
  
  data() {
    return {};
  },
  computed: {
    activeComp() {
      return this.$route.path.slice(1);
    },
    // ...mapState('')
  },
  mounted() {
    setTimeout(() => {
       let bs = new BetterScroll(this.$refs.sc);
    }, 100);
     

  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
.sc {
  position: fixed;
  left: 0;
  right: 0;
  top: 94px;
  bottom: 0;
  overflow: hidden;
}
.view {
  // height: 10000px;
}
#home {
  .head {
    z-index: 10;
    display: flex;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    justify-content: space-between;
    background-color: $theme-color;
    color: $font-color-light;
    font-size: $font-size-ll;
    .head-menu,
    .head-search {
      font-size: $font-size-lll;
    }
  }
  .tab {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    height: 44px;
    //   line-height: 10px;
    font-size: $font-size-m;
    background-color: $theme-color;
    color: $font-color-light;
    li {
      margin-top: 10px;
      line-height: 22px;
      height: 22px;
    }
    .active {
      border-bottom: 3px solid $border-color;
    }
  }
}
</style>