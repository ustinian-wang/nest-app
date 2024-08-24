import {Injectable, NotFoundException} from "@nestjs/common";
import {Coffee} from "./entities/coffee.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateCoffeeDto} from "./dto/create-coffee.dto/create-coffee.dto";
import {UpdateCoffeeDto} from "./dto/update-coffee.dto/update-coffee.dto";
import {PaginationQueryDto} from "../common/dto/pagination-query.dto/pagination-query.dto";

@Injectable()
export class CoffeesService {
    //注入orm，这里的语法看起来会实现this.coffeeRepository = xxx
    constructor(@InjectRepository(Coffee) private readonly coffeeRepository: Repository<Coffee>) {}


    findAll(paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.coffeeRepository.find({
            relations: ["flavors"],
            skip: offset,
            take: limit
        });
    }

    async findOne(id: string) {
        const coffee = await this.coffeeRepository.findOne(id);
        if(!coffee){
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        const coffee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(coffee);//save to database
    }

    async update(id: string, updateCoffeeDto: any) {
        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...updateCoffeeDto//todo 这个暂时不能换成dto的类型，会有类型报错，但是为什么，不知道~
        });
        if(!coffee){
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        //save to database
        return this.coffeeRepository.save(coffee);
    }

    async remove(id: string) {
        const coffee = await this.findOne(id);
        return this.coffeeRepository.remove(coffee);
    }
}
