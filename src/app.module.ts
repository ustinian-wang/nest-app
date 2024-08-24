import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CoffeesModule} from './coffees/coffees.module';
import {TypeOrmModule} from "@nestjs/typeorm";
let options = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass123",
    database: "postgres",
    autoLoadEntities: true,
    synchronize: true//生产环境记得禁用，这个会自动创建表
}
@Module({
    imports: [CoffeesModule, TypeOrmModule.forRoot(options)], controllers: [AppController], providers: [AppService],
})
export class AppModule {
}
