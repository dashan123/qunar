<template>
  <div class='selectecity'>
    <selectecity-header></selectecity-header>
    <!-- <selectecity-hotcity :hotCityInfoData="hotCityInfo"></selectecity-hotcity> -->
    <!-- <selectecity-index :indexInfoData="indexInfo" @theletter="handleSendToCitylist"></selectecity-index> -->
    <selectecity-city-from-letter :hotCityInfoData="hotCityInfo" :indexInfoData="indexInfo" :theLetterToChild="theClickLetter" :cityFromLetterInfoData="cityFromLetterInfo"></selectecity-city-from-letter>
  </div>
</template>

<script>
import SelectecityHeader from './header'
// import SelectecityHotcity from './hotcity'
// import SelectecityIndex from './index'
import SelectecityCityFromLetter from './cityfromletter'
import axios from 'axios'
export default {
  name: 'selectecity',
  components: {
    SelectecityHeader: SelectecityHeader,
    // SelectecityHotcity: SelectecityHotcity,
    // SelectecityIndex: SelectecityIndex,
    SelectecityCityFromLetter: SelectecityCityFromLetter
  },
  data () {
    return {
      hotCityInfo: [],
      indexInfo: [],
      cityFromLetterInfo: [],
      theClickLetter: ''
    }
  },
  methods: {
    getCityData () {
      axios.get('/api/city.json')
        .then(this.getCityListDataSucc.bind(this))
        .catch(this.getCityListDataError.bind(this))
    },
    getCityListDataSucc (res) {
      const jsonArray = res.data.data
      this.hotCityInfo = jsonArray.hotcitylist
      this.indexInfo = jsonArray.indexlist
      this.cityFromLetterInfo = jsonArray.cityfromletter
    },
    getCityListDataError (res) {
      console.log('error')
    },
    handleSendToCitylist (res) {
      this.theClickLetter = res
      console.log('把从index组件获取到的字母传给citylist组件,当前字母是:' + this.theClickLetter)
    }
  },
  created () {
    this.getCityData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .selectecity
    background: $homepageBgColor
</style>
