<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <img :src="item" alt="banner" class="swiper-img" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Autoplay } from "swiper/bundle";
import "../../../public/css/swiper-bundle.css";

export default {
  props: {
    banner: Array,
  },

  data() {
    return {
      // banner: [
      //   "http://p1.music.126.net/AieRqq-rlXEyQuDLO914UA==/109951165310784297.jpg",
      //   "http://p1.music.126.net/4rIJVNO4OmI-gnpFlPsi6A==/109951165310614198.jpg",
      //   "http://p1.music.126.net/PMFuOB9pJnXTd_GkI_IYXg==/109951165310519425.jpg",
      //   "http://p1.music.126.net/Tpd60uAMQf0aoUB8nTW-MQ==/109951165310209766.jpg",
      //   "http://p1.music.126.net/e2eusVShl08iv9KPyFVhsQ==/109951165310568863.jpg",
      //   "http://p1.music.126.net/fGE7YzbKQKq6P7C7mmN9zQ==/109951165310534803.jpg",
      //   "http://p1.music.126.net/r98yM9Dq8KbPW7IZSKfLYQ==/109951165310030547.jpg",
      //   "http://p1.music.126.net/WZdcGlmYFMbFqOHz4RjNMQ==/109951165310596847.jpg",
      //   "http://p1.music.126.net/HaiimPuUDO2UeVC-bq2Hdg==/109951165310089635.jpg",
      // ],
    };
  },
  mounted() {},
  watch: {
    banner() {
      this.$nextTick(()=>{
        this.swiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      });
      })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.swiper-slide {
}
.swiper-img {
  width: 367px;
  height: 160px;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
}
</style>