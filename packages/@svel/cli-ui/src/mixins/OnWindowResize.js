export default function () {
  // @svel/component
  return {
    mounted () {
      window.addEventListener('resize', this.onWindowResize)
      this.onWindowResize()
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.onWindowResize)
    }
  }
}
