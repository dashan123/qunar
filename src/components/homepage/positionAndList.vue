<template>
  <ul class="mustPlayList">
    <li class="position iconfont">
      <span class="gpsicon">&#xe608;</span>定位失败
    </li>
    <li class="list iconfont">
      <span class="listicon">&#xe689;</span>必游榜单
    </li>
  </ul>
</template>

<script>
export default {
  name: 'homepage-position-and-list'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .mustPlayList
    position: relative
    display: -webkit-box
    width: 100%
    background: $bgWhiteColor
    height: 1rem
    line-height: 1rem
    font-size: .3rem
    color: #212121
    text-align: center
    .position
      width: 50%
      .gpsicon
        padding-right: .05rem
    &:before
      content: " "
      position: absolute
      width: .02rem
      height: 1rem
      right: 0
      top: 0
      background-color: #f6f5f4
      left: 50%
    .list
      width: 50%
      .listicon
        padding-right: .05rem
</style>
