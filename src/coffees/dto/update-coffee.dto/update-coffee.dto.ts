import {PartialType} from "@nestjs/mapped-types";
import {CreateCoffeeDto} from "../create-coffee.dto/create-coffee.dto";
// update 的大部分字段和create是一样的
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
