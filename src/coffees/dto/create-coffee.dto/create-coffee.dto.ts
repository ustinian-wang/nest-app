import {IsString} from "class-validator";

export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({each: true})//array<String>
    readonly flavors: string[];
}
