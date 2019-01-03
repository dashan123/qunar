<template>
  <div class='homepage'>
    <homepage-header></homepage-header>
    <homepage-swiper :swiperData="swiperInfo"></homepage-swiper>
    <homepage-gridview :gridviewData="gridviewInfo"></homepage-gridview>
    <homepage-position-and-list></homepage-position-and-list>
    <homepage-buy-and-list></homepage-buy-and-list>
    <homepage-hot-charts :hotchartsData="hotchartsInfo" :hotchartsIcon="hotchartsIconInfo"></homepage-hot-charts>
    <homepage-guess-youlike :guessYouLikeData="guessYouLikeInfo"></homepage-guess-youlike>
    haha
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
      guessYouLikeInfo: []
    }
  },
  methods: {
    getHomepageData () {
      axios.get('/api/first.json')
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
      console.log('qing qiu wan le')
      console.log(this.guessYouLikeInfo)
    },
    getSwiperdataError (res) {
      console.log('error')
    }
  },
  created () {
    this.getHomepageData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .homepage
    background: $homepageBgColor
</style>
