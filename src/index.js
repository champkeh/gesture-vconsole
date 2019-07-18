;(function consoleInit() {
  function FourFingersTouchIndex() {
    this.i = 0
  }
  FourFingersTouchIndex.prototype.add = function() {
    this.i++
  }
  FourFingersTouchIndex.prototype.remove = function() {
    this.i = 0
  }

  function gestureVConsole() {
    var touchIndex = new FourFingersTouchIndex()
    var timer = null
    var vConsole = null
    document.addEventListener('touchstart', switchVConsole, false)
    function switchVConsole(e) {
      if (e.touches.length === 4) {
        if (timer) {
          clearInterval(timer)
          timer = null
        }
        touchIndex.add()
        var index = touchIndex.i
        if (index === 4) {
          if (vConsole) {
            vConsole.destroy()
            vConsole = null
          } else {
            vConsole = new VConsole()
            vConsole.show()
          }

          touchIndex.remove()
        } else {
          timer = setTimeout(() => {
            touchIndex.remove()
          }, 1000)
        }
      }
    }
  }
  module.exports = gestureVConsole
  module.exports.gestureVConsole = gestureVConsole
})()
