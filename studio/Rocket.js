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
        var astroMass = 0;
        var cargoMass = 0;
        for (var i = 0; i < this.astronauts.length; i++) {
            astroMass = astroMass + this.astronauts[i].massKg;
        }
        for (var k = 0; k < this.cargoItems.length; k++) {
            cargoMass = cargoMass + this.cargoItems[k].massKg;
        }
        mass = cargoMass + astroMass;
        return mass;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts);
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
