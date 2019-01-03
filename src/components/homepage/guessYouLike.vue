<template>
  <div class="betterScroll">
    <div class="guessYoulike">
      <img class="likeImg" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      <span>猜你喜欢</span>
    </div>
    <div class="likeList">
      <ul>
        <li class="listItem" v-for="item of guessYouLikeData" :key="item.id">
          <router-link class="link" to="/guessYoulikeDetail">
            <div class="itemImg">
              <div class="imgTitle" :style="'background: url(' + item.bgurl + ')'">
                {{item.title}}
              </div>
              <div class="img">
                <img class="imgPic" :src="item.bigImg">
              </div>
            </div>
            <div class="itemInfo">
              <div class="itemInfoName">
                {{item.infoName}}
              </div>
              <div class="itemInfoComment">
                <span class="spanOuter">
                  <span class="commentStarLight iconfont">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</span>
                  <span class="commentStar iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</span>
                </span>
                <span class="commentCount">{{item.count}}条评论</span>
              </div>
              <div class="priceAndLocation">
                <span class="priceSpan">
                  $<em class="priceEm">{{item.price}}</em>
                </span>
                起
                <span class="locationSpan">{{item.location}}</span>
              </div>
              <div class="point">
                {{item.point}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll' 引入better-scroll后,只有设置了固定高度, 才有回弹效果
export default {
  name: 'homepage-swiper',
  props: {
    guessYouLikeData: Array
  }
  // mounted () {
  //   const scroll = new BScroll('.likeList')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.betterScroll
  background: #fff
  margin-top: .2rem
  font-size: .3rem
  .guessYoulike
    padding: .25rem 0
    font-size: .3rem
    .likeImg
      overflow: hidden
      width: .3rem
      height: .3rem
      margin-left: .2rem
  .likeList
    overflow: hidden
    overflow-y: auto
    white-space: nowrap
    margin: 0 .25rem
    .listItem
      overflow: hidden
      padding: .2rem 0
      position: relative
      .link
        display: block
        .imgTitle
          position: absolute
          overflow: hidden
          height: .38rem
          line-height: .38rem
          width: 1.02rem
          top: .2rem
          left: 0
          font-size: .2rem
          color: #fff
          text-indent: .05rem
          background-size: 100%
        .img
          float: left
          width: 2rem
          height: 2rem
          .imgPic
            width: 100%
        .itemInfo
          overflow: hidden
          padding-left: .22rem
          .itemInfoName
            height: .44rem
            line-height: .44rem
            color: #212121
            margin-top: .25rem
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          .itemInfoComment
            height: .34rem
            line-height: .34rem
            margin-top: .14rem
            .commentCount
              font-size: .25rem
              color: #616161
            .spanOuter
              display: inline-block
              position: relative
              width: 1.5rem
              height: .28rem
              margin-left: -.13rem
              line-height: .28rem
              font-size: .28rem
              letter-spacing: -.05rem
              transform: scale(.8)
              transform-origin: 0,0
              .commentStarLight
                overflow: hidden
                position: absolute
                width: 70%
                left: 0
                top: 0
                z-index: 2
                color: #ffb436
              .commentStar
                position: absolute
                left: 0
                top: 0
                z-index: 1
                color: #e0e0e0
          .priceAndLocation
            position: relative
            font-size: .25rem
            color: #616161
            margin-top: .22rem
            line-heigth: .4rem
            .priceSpan
              color: #ff8300
              .priceEm
                font-size: .4rem
            .locationSpan
              position: absolute
              right: 0
              bottom: 0
              width: 1.4rem
              text-align: right
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
          .point
            font-size: .25rem
            color: #f00
            margin-top: .48rem
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
</style>
