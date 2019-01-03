<template>
  <div class="gridview">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of pageList" :key="index">
        <div class="grid-items">
          <div class="grid-item" v-for="page of item" :key="page.id">
            <img class="item-img" :src="page.imgUrl" :alt="page.title">
            <p class="item-title">
              {{page.title}}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"  slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'homepage-gridview',
  props: {
    gridviewData: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pageList () {
      const pages = []
      this.gridviewData.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
.gridview
  // overflow: hidden
  // height: 0
  // padding-bottom: 50.7%
  background: $bgWhiteColor
  overflow: hidden
  height: 3.7rem
  padding-top: .1rem
  .grid-items
    display: flex
    flex-wrap: wrap
    text-align: center
    .grid-item
      height: 1.5rem
      width: 25%
      padding-top: .1rem
      .item-img
        height: 1.1rem
        width: 1.1rem
      .item-title
        font-size: .3rem
        //长度过长时的容错处理
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
  .swiper-pagination
    width: 100%
    line-height: 0.5rem
    height: 0.5rem
    font-size: .1rem
    text-align: center
  .swiper-pagination >>> .swiper-pagination-bullet
    width: .12rem
    height: .12rem
    margin: 0 .1rem
</style>
