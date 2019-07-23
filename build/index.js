'use strict';

var VConsole = require('vconsole');
var GestureVConsole = /** @class */ (function () {
    function GestureVConsole() {
        this.i = 0;
        this.timer = null;
        this.vConsole = null;
        this.init();
    }
    GestureVConsole.prototype.init = function () {
        document.addEventListener('touchstart', this.switchVConsole.bind(this), false);
    };
    GestureVConsole.prototype.switchVConsole = function (e) {
        var _this = this;
        if (e.touches.length === 4) {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            this.add();
            var index = this.i;
            if (index === 4) {
                if (this.vConsole) {
                    this.vConsole.destroy();
                    this.vConsole = null;
                }
                else {
                    this.vConsole = new VConsole();
                    this.vConsole.show();
                }
                this.remove();
            }
            else {
                this.timer = setTimeout(function () {
                    _this.remove();
                }, 1000);
            }
        }
    };
    GestureVConsole.prototype.add = function () {
        this.i++;
    };
    GestureVConsole.prototype.remove = function () {
        this.i = 0;
    };
    return GestureVConsole;
}());

module.exports = GestureVConsole;
