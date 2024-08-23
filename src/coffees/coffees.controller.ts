import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Res } from "@nestjs/common";

@Controller('coffees')
export class CoffeesController {
  @Get() //标记为get请求
  findAll(@Query() paginationQuery){
    let {limit, offset} = paginationQuery
    return `This returns all coffees; limit=${limit}, offset=${offset}`;
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
