import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass( items: Payload[] ): number {
        let mass: number = 0;
        let astroMass: number = 0;
        let cargoMass: number = 0;
        for (let i: number = 0; i < this.astronauts.length; i++) {
            astroMass = astroMass + this.astronauts[i].massKg;
        }
        for (let k: number = 0; k < this.cargoItems.length; k++) {
            cargoMass = cargoMass + this.cargoItems[k].massKg;
        }
        mass = cargoMass + astroMass;
        return mass;
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts);
    }
    canAdd(item: Payload): boolean {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg){
            return true;
        }
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}