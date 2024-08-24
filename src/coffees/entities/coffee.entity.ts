import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Flavor} from "./flavor.entity";

@Entity() //default sql table === 'coffee'
export class Coffee {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;

    @Column()//field === 'brand'
    brand: string;

    @JoinTable()
    @ManyToMany(type=>Flavor, (flavor)=>flavor.coffees)
    flavors: string[];
}