"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var mass = 0;
        for (var i = 0; i < items.length; i++) {
            mass = mass + items[i].massKg;
        }
        return mass;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
