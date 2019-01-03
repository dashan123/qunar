<template>
  <div class="hotcharts">
    <div class="title" v-for="(item, index) of hotchartsIcon" :key="index">
      <img class="hoticon" :src="item.icon" :alt="item.title">
      <span>{{item.title}}</span>
      <router-link class="allCharts" to="/mustPlayCharts">
        全部榜单
        <span class="iconfont">&#xe612;</span>
      </router-link>
    </div>
    <ul class="ullist topnav_box">
      <li class="lilist" v-for="item of hotchartsData" :key="item.id">
        <router-link class="topItem" to="/hotDetail">
          <div class="topNumber">
            <img class="topNumberImg" :src="item.topNumImg">
          </div>
          <div class="topImg">
            <img class="topImgPic" :src="item.topImg" :alt="item.name">
          </div>
          <div class="topName">{{item.name}}</div>
          <div class="topPrice">
            <span class="money">
              $
              <em class="moneyEm">{{item.price}}</em>
            </span>
            起
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homepage-hot-charts',
  props: {
    hotchartsData: Array,
    hotchartsIcon: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .hotcharts
    margin-top: .2rem
    background: #fff
    font-size: .3rem
    .title
      padding: .25rem 0
      .hoticon
        // display: inline-block
        overflow: hidden
        width: .3rem
        height: .3rem
        margin-left: .2rem
      .allCharts
        font-size: .25rem
        position: absolute
        right: .35rem
        color: #616161
    .ullist
      overflow-x: scroll
      padding: 0 .25rem
      white-space: nowrap
      .lilist
        position: relative
        display: inline-block
        width: 2rem
        padding: .06rem 0 .2rem
        margin-right: .12rem
        .topNumber
          position: absolute
          overflow: hidden
          left: 0
          top: 0
          height: .4rem
          width: .84rem
          z-index: 1
          .topNumberImg
            width: 100%
        .topImg
          width: 2rem
          overflow: hidden
          height: 0
          padding-bottom: 100%
          .topImgPic
            width: 100%
        .topName
          line-height: .32rem
          height: .32rem
          width: 100%
          overflow: hidden
          text-align: center
          white-space: nowrap
          text-overflow: ellipsis
          font-size: .3rem
          color: #212121
          margin-top: .12rem
        .topPrice
          height: .38rem
          line-height: .38rem
          font-size: .3rem
          text-align: center
          color: #616161
          .money
            font-size: .3rem
            color: #ff8300
            text-align: center
            .moneyEm
              font-style: normal
</style>
