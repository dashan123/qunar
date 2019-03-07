export default{
  wait5SecondsToChangeCity (context, city) {
    // 实际异步时应该是AJAX请求之类的
    setTimeout(() => {
      context.commit('changeDefaultCity', city)
    }, 1500)
  }
}
