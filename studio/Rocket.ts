import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
        

    }



    sumMass(items: Payload[]): number {

        let total: number = 0;
        for (let element of items) {
            total += element.massKg;
        }

        return total;
    }



    currentMassKg(): number {

        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)

    }


    canAdd(item: Payload): boolean {

        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {

            return true;

        }

        return false;

    }


    addCargo(cargo: Cargo): boolean {

        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;

    }


    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }



}