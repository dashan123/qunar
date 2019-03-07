export default{
  changeDefaultCity (state, city) {
    state.city = city
    localStorage.city = city
  }
}
