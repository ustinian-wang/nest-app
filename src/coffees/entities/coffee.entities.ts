import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity() //default sql table === 'coffee'
export class Coffee {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;

    @Column()//field === 'brand'
    brand: string;

    //db没有数组类型，对于引用类型来说，这里要json序列化
    @Column("json", {nullable: true}) flavors: string[];
}