<template>
  <div class='homepage'>
    <homepage-header></homepage-header>
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
import {mapState, mapMutations} from 'vuex'
export default {
  // name可以在使用DEVTOOLS调试的时候更直观,
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
  computed: {
    ...mapState({
      mapCity: 'city'
    })
  },
  methods: {
    getHomepageData () {
      // 如果第一次defaultCity没有内容,就取一个默认值. 正规逻辑应该是没有数据时, 给后台发送一个空字符串,后台使用用户IP定位好城市再返给前端,如果这么操作的话,请求成功时会有城市的数据.
      // const defaultCity = localStorage.defaultCity ? localStorage.defaultCity : '北京'
      console.log('000000000000000000000000')
      axios.get('/api/first.json?defaultCity=' + this.mapCity)
        .then(this.getSwiperdataSucc.bind(this))
        .catch(this.getSwiperdataError.bind(this))
    },
    ...mapMutations({
      mapChangeCity: 'changeDefaultCity'
    }),
    getSwiperdataSucc (res) {
      const jsonArray = res.data.data
      this.swiperInfo = jsonArray.swiperlist
      this.gridviewInfo = jsonArray.iconlist
      this.hotchartsInfo = jsonArray.hotcharts
      this.hotchartsIconInfo = jsonArray.hotchartsicon
      this.guessYouLikeInfo = jsonArray.guessyoulike
      this.defaultCity = jsonArray.defaultCity
      // 请求成功的时候, 改state 里的数据
      // 做这个判断是为了在退出程序再进入时，还是上次选择的城市， 而不是接口中默认的数据
      if (!this.mapCity) {
        this.mapChangeCity(jsonArray.defaultCity)
        console.log('请求完数据了, CITY是' + this.mapCity)
      }
    },
    getSwiperdataError (res) {
      console.log('error')
    }
  },
  created () {
    this.getHomepageData()
    console.log('created')
  },
  watch: {
    mapCity () {
      console.log('CITY改变了, 重新请求数据')
      this.getHomepageData()
    }
  },
  beforeCreate () {
    console.log('beforecreated')
  },
  beforeMount () {
    console.log('beforemounted')
  },
  mounted () {
    console.log('mounted')
  },
  activated () {
    console.log('activited')
  },
  beforeDestroy () {
    console.log('beforedestroed')
  },
  destroyed () {
    console.log('destroed')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .homepage
    background: $homepageBgColor
</style>
