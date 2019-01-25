<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="back iconfont" @click="handleBackToHome">&#xe624;</div>
      </router-link>
      <div class="selectecity">选择城市</div>
    </div>
    <div class="homeOrAbroad">
      <ul class="ul">
        <li class="home">境内</li>
        <li class="abroad">当前城市: {{city}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectecity-header',
  data () {
    return {
      city: localStorage.defaultCity ? localStorage.defaultCity : '黑龙江'
    }
  },
  methods: {
    handleBackToHome () {
      this.$router.go(-1)
    }
  },
  activated () {
    this.city = localStorage.defaultCity ? localStorage.defaultCity : '黑龙江'
  }
  // methods: {
  //   watchCurrCity () {
  //     this.$bus.$on('changecity', this.changeDefaultCity.bind(this))
  //     this.city = this.$bus.staticData.thedefaultcity
  //     console.log('bus订阅到信息了')
  //   },
  //   changeDefaultCity (value) {
  //     this.$bus.staticData.thedefaultcity = value
  //     this.city = value
  //     console.log('重新给bus赋值')
  //     console.log(this.$bus.staticData.thedefaultcity)
  //   }
  // },
  // created () {
  //   this.watchCurrCity()
  //   console.log('cityheader创建了')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .header
    display: flex
    position: relative
    height: .68rem
    line-height: .68rem
    background: $bgColor
    color: white
    font-size: .32rem
    .back
      position: absolute
      top: .08rem
      width: .4rem
      padding: 0 .2rem
      font-weight: bold
      color: #fff
    .selectecity
      positin: absolute
      flex: 1
      padding: .08rem .8rem 0 .8rem
      text-align: center
  .homeOrAbroad
    height: .4rem
    line-height: .4rem
    background: $bgColor
    padding: .2rem 1rem
    color: #fff
    font-size: .3rem
    .ul
      display: flex
      border: 1px solid #fff
      border-radius: .05rem
      overflow: hidden
      text-align: center
      .home
        flex: 1
        background: #fff
        color: $bgColor
      .abroad
        flex: 1
        background: $bgColor
        color: #fff
</style>
