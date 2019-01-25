<template>
  <div class='homepage'>
    <homepage-header :defaultCity="defaultCity"></homepage-header>
    <homepage-swiper :swiperData="swiperInfo"></homepage-swiper>
    <homepage-gridview :gridviewData="gridviewInfo"></homepage-gridview>
    <homepage-position-and-list></homepage-position-and-list>
    <homepage-buy-and-list></homepage-buy-and-list>
    <homepage-hot-charts :hotchartsData="hotchartsInfo" :hotchartsIcon="hotchartsIconInfo"></homepage-hot-charts>
    <homepage-guess-youlike :guessYouLikeData="guessYouLikeInfo"></homepage-guess-youlike>
  </div>
</template>

<script>
import HomepageHeader from './header'
import HomepageSwiper from './swiper'
import HomepageGridview from './gridview'
import HomepagePositionAndList from './positionAndList'
import HomepageBuyAndList from './buyAndList'
import HomepageHotCharts from './hotCharts'
import HomepageGuessYoulike from './guessYouLike'
import axios from 'axios'
export default {
  name: 'homepage',
  components: {
    HomepageHeader: HomepageHeader,
    HomepageSwiper: HomepageSwiper,
    HomepageGridview: HomepageGridview,
    HomepagePositionAndList: HomepagePositionAndList,
    HomepageBuyAndList: HomepageBuyAndList,
    HomepageHotCharts: HomepageHotCharts,
    HomepageGuessYoulike: HomepageGuessYoulike
  },
  data () {
    return {
      swiperInfo: [],
      gridviewInfo: [],
      hotchartsInfo: [],
      hotchartsIconInfo: [],
      guessYouLikeInfo: [],
      defaultCity: ''
    }
  },
  methods: {
    getHomepageData () {
      // 如果第一次defaultCity没有内容,就取一个默认值. 正规逻辑应该是没有数据时, 给后台发送一个空字符串,后台使用用户IP定位好城市再返给前端,如果这么操作的话,请求成功时会有城市的数据.
      const defaultCity = localStorage.defaultCity ? localStorage.defaultCity : '北京'
      axios.get('/api/first.json?defaultCity=' + defaultCity)
        .then(this.getSwiperdataSucc.bind(this))
        .catch(this.getSwiperdataError.bind(this))
    },
    getSwiperdataSucc (res) {
      const jsonArray = res.data.data
      this.swiperInfo = jsonArray.swiperlist
      this.gridviewInfo = jsonArray.iconlist
      this.hotchartsInfo = jsonArray.hotcharts
      this.hotchartsIconInfo = jsonArray.hotchartsicon
      this.guessYouLikeInfo = jsonArray.guessyoulike
      this.defaultCity = jsonArray.defaultCity
      // 把默认城市存进localStorage
      localStorage.defaultCity = jsonArray.defaultCity
      console.log('主页qing qiu wan le, localStorage.defaultCity是:')
      console.log(localStorage.defaultCity)
    },
    getSwiperdataError (res) {
      console.log('error')
    },
    watchCurrCity () {
      this.$bus.$on('changecity', this.changeDefaultCity.bind(this))
    },
    changeDefaultCity (value) {
      // 在城市页面选择一个城市, 回到主页重新赋值
      this.defaultCity = value
      // 更改了城市,返回主页后, 需要从新请求数据
      this.getHomepageData()
    }
  },
  created () {
    this.getHomepageData()
    this.watchCurrCity()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .homepage
    background: $homepageBgColor
</style>
