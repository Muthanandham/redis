import { Controller, Post, Get, Param } from '@nestjs/common';
import { RedisExampleService } from './app.service'; 
@Controller('redis-example')
export class RedisExampleController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly redisService: RedisExampleService) {}

  @Post(':key/:value')
  async setValue(@Param('key') key: string, @Param('value') value: string) {
    await this.redisService.storeValueInRedis(key, value);
    return `Stored value "${value}" in Redis with key "${key}"`;
  }

  @Get(':key')
  async getValue(@Param('key') key: string) {
    const value = await this.redisService.getValueFromRedis(key);
    return `Value for key "${key}" is "${value || 'not found'}"`;
  }
}
