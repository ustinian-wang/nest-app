import { Controller, Get, Param } from "@nestjs/common";

@Controller('coffees')
export class CoffeesController {
  @Get() //标记为get请求
  findAll(){
    return "this actions returns all coffees"
  }

  @Get(":id")
  findOne(@Param("id") id){
    return `this actions returns id: ${id} coffees`;
  }
}
