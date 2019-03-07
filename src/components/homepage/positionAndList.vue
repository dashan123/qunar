<template>
  <ul class="mustPlayList">
    <transition name="transition-color">
      <li v-show="show2" class="position iconfont" @click="show2 = !show2">
        <span class="gpsicon">&#xe608;</span>定位失败
      </li>
    </transition>
    <li :class="show ? classB : classA" @click="xxx">
      <span >&#xe689;必游榜单</span>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'homepage-position-and-list',
  data () {
    return {
      show: false,
      show2: true,
      classA: 'list iconfont',
      classB: 'list iconfont animated shake'
    }
  },
  methods: {
    xxx () {
      if (this.show === false) {
        this.show = !this.show
      }
      // this.$nextTick(() => {
      //   this.show = false
      // })
      console.log(this.show)
    }
  },
  activated () {
    this.show = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
  .transition-color-enter-active {
    transition: all 2s ease;
  }
  .transition-color-leave-active {
    color: green
    transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .transition-color-enter, .transition-color-leave-to {
    transform: translateX(20px);
    color: red
    opacity: 0;
  }
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
    &:befores
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
