<template>
  <ul class="buyAndList">
    <li class="buy"></li>
    <li class="list"></li>
  </ul>
</template>

<script>
export default {
  name: 'homepage-buy-and-list'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .buyAndList
    position: relative
    display: -webkit-box
    width: 100%
    background: $bgWhiteColor
    height: 1.4rem
    line-height: 1.4rem
    font-size: .3rem
    color: #212121
    text-align: center
    margin-top: .2rem
    .buy
      width: 50%
      background: url("http://img1.qunarzz.com/piao/fusion/1811/12/999862443f79a902.png")
      background-size: 90%
      background-repeat: no-repeat
      background-position: center
    &:before
      content: " "
      position: absolute
      width: .02rem
      height: 1.4rem
      right: 0
      top: 0
      background-color: #f6f5f4
      left: 50%
    .list
      width: 50%
      background: url("http://img1.qunarzz.com/piao/fusion/1811/80/f76d565689d9a202.png")
      background-size: 90%
      background-repeat: no-repeat
      background-position: center
</style>
