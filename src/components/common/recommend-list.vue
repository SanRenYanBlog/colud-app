<template>
  <div id="recommend" ref="recommend">
    <h2 class="title">推荐歌单</h2>
    <ul class="item-wrap">
      <li class="item" v-for="item in recommendChange" :key="item.id">
        <div class="pic-img">
          <img :src="item.picUrl" alt />
          <p class="play-count">
            <span class="iconfont icon-headset"></span>
            <span class="play-count-num">{{item.playCount}}</span>
          </p>
        </div>
        <p class="copy-writer">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "recommend",
  props: {
    recommend: Array,
  },
  computed: {
    recommendChange() {
      return this.recommend.map((item) => {
        item.playCount =
          item.playCount / 10000 > 1
            ? Math.round(item.playCount / 10000) + "万"
            : item.playCount;
        return item;
      });
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
#recommend {
  background-color: #fff;
  .title {
    padding-left: 6px;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
  }
  .item-wrap{
    overflow: hidden;
    .item {
    float: left;
    width: 121px;
    height: 172px;
    margin-left: 2px;
    margin-right: 2px;
    .pic-img {
      position: relative;
      img {
        width: 120px;
        height: 120px;
        border-radius: 6px;
      }
      .play-count {
        position: absolute;
        top: 0;
        right: 4px;
        color: #d2d0d2;
        .play-count-num {
        }
      }
    }
    .copy-writer {
      font-size: 12px;
      margin-top: 2px;
      padding: 0 2px;
      height: 50px;
      line-height: 1.4;
    }
  }
  }
}
</style>