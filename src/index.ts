
var VConsole = require('vconsole')

class GestureVConsole {
  vConsole: any
  switch: boolean
  timer: any
  i: number
  constructor() {
    this.i = 0
    this.timer = null
    this.switch = false
    this.vConsole = null
    this.init()
  }
  init() {
    this.vConsole = new VConsole()
    this.vConsole.setOption('onReady', () => {
      this.vConsole.hideSwitch()
      this.switch = false
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
        if (this.switch) {
          this.vConsole.hideSwitch()
          this.switch = false
        } else {
          this.vConsole.showSwitch()
          this.switch = true
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
