import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus, NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Res
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import {CreateCoffeeDto} from "./dto/create-coffee.dto/create-coffee.dto";
import {UpdateCoffeeDto} from "./dto/update-coffee.dto/update-coffee.dto";

@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeesService: CoffeesService){
    this.coffeesService = coffeesService;
  }

  @Get() //标记为get请求
  findAll(@Query() paginationQuery){
    // let {limit, offset} = paginationQuery
    // return `This returns all coffees; limit=${limit}, offset=${offset}`;
    return this.coffeesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id){
    // return `this actions returns id: ${id} coffees`;
    let coffee = this.coffeesService.findOne(id);
    if(!coffee){
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: CreateCoffeeDto){
    this.coffeesService.create(body)
    // return body;
  }

  @Patch(":id")
  update(@Param('id') id: string, @Body() body: UpdateCoffeeDto){
    console.log("jser body is instance", body instanceof UpdateCoffeeDto);
    return this.coffeesService.update(id, body)
  }

  @Delete(":id")
  remove(@Param('id') id: string){
    return this.coffeesService.remove(id)
  }
}
