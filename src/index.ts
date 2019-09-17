
var VConsole = require('vconsole')

class GestureVConsole {
  vConsole: any
  console: boolean
  timer: any
  i: number
  constructor() {
    this.i = 0
    this.timer = null
    this.console = false
    this.vConsole = null
    this.init()
  }
  init() {
    this.vConsole = new VConsole()
    this.vConsole.setOption('onReady', () => {
      this.vConsole.hideSwitch()
      this.console = false
    })
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
        if (this.console) {
          this.vConsole.hideSwitch()
          this.console = false
        } else {
          this.vConsole.showSwitch()
          this.console = true
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
