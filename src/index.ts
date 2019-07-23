var VConsole = require('vconsole')

class FourFingersTouchIndex {
  i: number
  constructor() {
    this.i = 0
  }
}
class GestureVConsole {
  vConsole: any
  timer: any
  i: number
  constructor() {
    this.i = 0
    this.timer = null
    this.vConsole = null
    this.init()
  }
  init() {
    document.addEventListener(
      'touchstart',
      this.switchVConsole.bind(this),
      false
    )
  }
  switchVConsole(e) {
    if (e.touches.length === 4) {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
      this.add()
      var index = this.i
      if (index === 4) {
        if (this.vConsole) {
          this.vConsole.destroy()
          this.vConsole = null
        } else {
          this.vConsole = new VConsole()
          this.vConsole.show()
        }

        this.remove()
      } else {
        this.timer = setTimeout(() => {
          this.remove()
        }, 1000)
      }
    }
  }
  add() {
    this.i++
  }
  remove() {
    this.i = 0
  }
}
export default GestureVConsole
