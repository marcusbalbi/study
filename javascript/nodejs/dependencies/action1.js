"use strict";
exports.__esModule = true;
var Dice = /** @class */ (function () {
    function Dice(size) {
        this.size = size;
    }
    Dice.prototype.roll = function () {
        return Math.ceil(Number(this.size) * Math.random());
    };
    return Dice;
}());
exports.Dice = Dice;
