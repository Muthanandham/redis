import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class RedisExampleService {
  constructor(private readonly redisService: RedisService) {}

  async storeValueInRedis(key: string, value: string): Promise<void> {
    const client = this.redisService.getClient(); // Get the Redis client
    await client.set(key, value);
  }

  async getValueFromRedis(key: string): Promise<string | null> {
    const client = this.redisService.getClient(); // Get the Redis client
    return client.get(key);
  }
}