<template>
  <div>
    <homepage-header></homepage-header>
    <homepage-swiper></homepage-swiper>
  </div>
</template>

<script>
import HomepageHeader from './header'
import HomepageSwiper from './swiper'
export default {
  name: 'homepage',
  components: {
    HomepageHeader: HomepageHeader,
    HomepageSwiper: HomepageSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
