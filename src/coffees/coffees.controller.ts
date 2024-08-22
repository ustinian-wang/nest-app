import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from "@nestjs/common";

@Controller('coffees')
export class CoffeesController {
  @Get() //标记为get请求
  findAll(@Res() response){
    response.status(200).send("this actions returns all coffees")
    return
  }

  @Get(":id")
  findOne(@Param("id") id){
    return `this actions returns id: ${id} coffees`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body){
    return body;
  }

}
