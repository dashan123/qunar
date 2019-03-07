<template>
  <div class="myswiper">
    <swiper :options="swiperOption" v-if="getSwiperListLength">
      <!-- slides -->
      <swiper-slide v-for="item of swiperData" :key="item.id">
        <img class="swiper-img" :src="item.imgurl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homepage-swiper',
  props: {
    swiperData: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  computed: {
    getSwiperListLength () {
      return !!this.swiperData.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.swiper-pagination >>> .swiper-pagination-bullet
  height: .12rem
  width: .12rem
.swiper-pagination >>> .swiper-pagination-bullet-active
  background: white !important
.myswiper
  overflow: hidden
  height: 0
  padding-bottom: 26.67%
  .swiper-img
    width: 100%
</style>
