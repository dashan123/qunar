<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <span class="hint iconfont">&#xe632;</span>请输入搜索内容
    </div>
    <div class="city" @click="handleClickDefaultCity">
      <!-- 使用router-link 或者 this.$router.push -->
      <!-- <router-link class="link-city" to="/SelecteCity">{{defaultCity}}</router-link> -->
      {{headerDefaultCity}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'homepage-header',
  methods: {
    handleClickDefaultCity () {
      this.$router.push({path: '/SelecteCity'})
    }
  },
  computed: {
    ...mapGetters({
      headerDefaultCity: 'addChecked'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: white
    .back
      width: .4rem
      text-ailgn: center
      color: #fff
      padding: 0 .2rem
      font-weight: bold
    .search
      // padding: .2rem .2rem
      flex: 1
      height: .6rem
      line-height: .6rem
      font-size: .3rem
      margin: .14rem 0
      border-radius: .1rem
      background: #fff
      color: #ccc
      .hint
        position: relative
        top: .01rem
        padding-right: .04rem
        padding-left: .2rem
    .city
      font-size: .3rem
      padding: 0 .6rem 0 .22rem
      position: relative
      max-width: 1.2rem
      &:before
        position: absolute
        content: " "
        top: .4rem
        right: .2rem
        width: 0
        height: 0
        border-top: .14rem solid #fff
        border-left: .12rem solid transparent
        border-right: .12rem solid transparent
      .link-city
        color: #fff
</style>
