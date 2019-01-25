<template>
  <div class="index">
    <h1 class="title">字母排序</h1>
    <ul class="indexList">
      <li class="letter" v-for="item of indexInfoData" :key="item.id" @click="handleLetterClick">
      {{item.letter}}</li>
      <li class="itemforheight"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'selectecity-index',
  props: {
    indexInfoData: Array
  },
  data () {
    return {
      // newLetter: String
    }
  },
  methods: {
    handleLetterClick (e) {
      console.log('传过去了 myletter=' + e.target.innerText)
      this.$emit('theletter', e.target.innerText)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../../../static/stylus/bg_color.styl"
.index
  display: block
  .title
    font-size: .25rem
    padding: .24rem .3rem
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
</style>
