import {Injectable} from "@nestjs/common";
import {Coffee} from "./entities/coffee.entities";

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [{
        id: 1, name: "Shipwreck Roast", brand: "Buddy Brew", flavors: ["chocolate", "vanilla"]
    }, {
        "id": 2, "name": "test", "brand": "Buddy Brew", "flavors": ["chocolate", "vanilla"]
    }];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(c => c.id === +id);
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffees = this.findOne(id);
        console.log("jser existingCoffees", existingCoffees);
        if (existingCoffees) {
            // update the existing
            Object.assign(existingCoffees, updateCoffeeDto);
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(c => c.id === +id);
        console.log("jser coffeeIndex", coffeeIndex);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1)
        }
    }
}
