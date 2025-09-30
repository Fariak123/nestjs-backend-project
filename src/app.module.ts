import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { OrderItem } from './order-item.entity';
import { Order } from './order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Fariak123321',
      database: 'myDB',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order, OrderItem]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
