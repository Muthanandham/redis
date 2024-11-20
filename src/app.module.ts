import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { RedisExampleController } from './app.controller';
import { RedisExampleService } from './app.service';
import { ModuleRef } from '@nestjs/core';
import {}

@Module({
  imports: [
    RedisModule.register({
      // Redis server configuration options go here
      host: 'localhost',
      port: 6379,
     // password: 'your_password', // If your Redis server requires a password
    }),
  ],
  controllers:[RedisExampleController],
  providers:[RedisExampleService,ModuleRef],

})
export class AppModule {}
