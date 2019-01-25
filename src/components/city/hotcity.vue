<template>
  <div class="hotcity">
    <h1 class="title">热门城市</h1>
    <ul class="ullist">
      <li class="item" v-for="item of hotCityInfoData" :key="item.id">{{item.cityName}}</li>
      <li class="itemforheight"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'selectecity-hotcity',
  props: {
    hotCityInfoData: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
.hotcity
  display: block
  .title
    font-size: .25rem
    padding: .24rem .3rem
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
</style>
