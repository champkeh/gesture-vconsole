'use strict';

var VConsole = require('vconsole');
var GestureVConsole = /** @class */ (function () {
    function GestureVConsole() {
        this.i = 0;
        this.timer = null;
        this["switch"] = false;
        this.vConsole = null;
        this.init();
    }
    GestureVConsole.prototype.init = function () {
        var _this = this;
        this.vConsole = new VConsole();
        this.vConsole.setOption('onReady', function () {
            _this.vConsole.hideSwitch();
            _this["switch"] = false;
        });
        document.addEventListener('touchstart', this.switchVConsole.bind(this), false);
    };
    GestureVConsole.prototype.switchVConsole = function (e) {
        var _this = this;
        if (e.touches.length === 4) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.add();
            if (this.i === 4) {
                if (this["switch"]) {
                    this.vConsole.hideSwitch();
                    this["switch"] = false;
                }
                else {
                    this.vConsole.showSwitch();
                    this["switch"] = true;
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
