<template>
  <div class="outerdiv" ref="citywraper">
    <div>
      <div class="hotcity">
        <h1 class="title">热门城市</h1>
        <ul class="ullist">
          <li class="item" v-for="item of hotCityInfoData" :key="item.id" @click="clickCity">{{item.cityName}}</li>
          <li class="itemforheight"></li>
        </ul>
      </div>
      <div class="index">
        <h1 class="title">字母排序</h1>
        <ul class="indexList">
          <li class="letter" v-for="item of indexInfoData" :key="item.id" @click="handleLetterClick">
          {{item.letter}}</li>
          <li class="itemforheight"></li>
        </ul>
      </div>
      <div class="cityfromletter" v-for="(item, index) of cityFromLetterInfoData" :key="item.id" :ref="item.title">
        <h1 class="title">{{item.title}}</h1>
        <ul class="citylist">
          <div v-for="(item2, index2) of getNewArray" v-if="index2==index" :key="index2">
            <li class="item" v-for="item3 of item2" :key="item3.itemId">{{item3.name}}</li>
            <li class="itemforheight"></li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapActions} from 'vuex'
export default {
  name: 'selectecity-city-from-letter',
  props: {
    cityFromLetterInfoData: Array,
    // theLetterToChild: String,
    hotCityInfoData: Array,
    indexInfoData: Array
  },
  data () {
    return {
      cityNameArray: Array,
      theCurrLetter: ''
    }
  },
  methods: {
    handleLetterClick (e) {
      this.theCurrLetter = e.target.innerText
      console.log('========================进来了 this.theCurrLetter=' + this.theCurrLetter)
      const elment = this.$refs[this.theCurrLetter][0]
      console.log('========================进来了 elment=' + elment)
      this.scroll.scrollToElement(elment)
    },
    ...mapActions(['wait5SecondsToChangeCity']),
    clickCity (e) {
      // 同步时:
      // this.$store.commit('changeDefaultCity', e.target.innerText)
      // 模拟异步
      // this.$store.dispatch('wait5SecondsToChangeCity', e.target.innerText)
      this.wait5SecondsToChangeCity(e.target.innerText)
      this.$router.go(-1)
    }
  },
  computed: {
    getNewArray () {
      const newArrays = []
      this.cityFromLetterInfoData.forEach((value, index) => {
        newArrays.push(this.cityFromLetterInfoData[index].citynamelist)
      })
      console.log(newArrays)
      return newArrays
    }
  },
  // watch: {
  //   theLetterToChild (newValue, oldValue) {
  //     // console.log(Object.keys(this.$refs).length)
  //     console.log('aaaaaaaaaaaaaaaaaaaa')
  //     console.log(this.$refs)
  //     console.log(this.theLetterToChild)
  //     console.log(this.$refs[this.theLetterToChild][0])
  //     const elment = this.$refs[this.theLetterToChild][0]
  //     console.log('监听到变化了, elment是' + elment)
  //     this.scroll.scrollToElement(elment)
  //   }
  // },
  mounted () {
    console.log('---------------------')
    console.log(this.$refs.citywraper)
    //  this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.citywraper, {
        click: true,
        hasVerticalScroll: true
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
.outerdiv
  position: absolute
  top: 1.48rem
  bottom: 0
  left: 0
  right: 0
  width: 100%
  overflow:hidden
  .hotcity
    display: block
    .title
      font-size: .25rem
      padding: .24rem .3rem
      background: $homepageBgColor
    .ullist
      overflow: hidden
      position: relative
      color: #212121
      background: #fff
      &:before
        content: " "
        position: absolute
        left: 33.33%
        height: 100%
        width: .02rem
        top: 0
        background: #ddd
        z-index: 1
      .item
        position: relative
        display: block
        width: 33.33%
        height: .9rem
        line-height: .9rem
        font-size: .3rem
        text-align: center
        float: left
        border-bottom: .01rem solid #ddd
        margin-bottom: -1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      &:after
        content: " "
        position: absolute
        right: 33.33%
        height: 100%
        width: .02rem
        top: 0
        background: #ddd
        z-index: 1
        //li设置了float以后, 相当于没有高度, 所以UL没有高度. 需要在后面加一个如下的li, 方可.清除浮动
      .itemforheight
        clear: both
  .index
    display: block
    .title
      font-size: .25rem
      padding: .24rem .3rem
      background: $homepageBgColor
    .indexList
      overflow: hidden
      position: relative
      color: #212121
      background: #fff
      padding: .3rem 0
      .letter
        position: relative
        display: block
        width: 16.67%
        height: .9rem
        line-height: .9rem
        font-size: .3rem
        text-align: center
        float: left
      .itemforheight
        clear: both
  .cityfromletter
    display: block
    .title
      font-size: .25rem
      padding: .24rem .3rem
      background: $homepageBgColor
    .citylist
      overflow: hidden
      position: relative
      color: #212121
      background: #fff
      &:before
        content: " "
        position: absolute
        left: 25%
        height: 100%
        width: 25%
        top: 0
        border-left: .02rem solid #ddd
        border-right: .02rem solid #ddd
        z-index: 1
      .item
        position: relative
        display: block
        width: 25%
        height: .9rem
        line-height: .9rem
        font-size: .3rem
        text-align: center
        float: left
        border-bottom: .01rem solid #ddd
        margin-bottom: -1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      &:after
        content: " "
        position: absolute
        right: 25%
        height: 100%
        width: .02rem
        top: 0
        background: #ddd
        z-index: 1
        //li设置了float以后, 相当于没有高度, 所以UL没有高度. 需要在后面加一个如下的li, 方可.清除浮动
      .itemforheight
        clear: both
</style>
