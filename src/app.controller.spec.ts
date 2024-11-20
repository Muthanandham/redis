import { Test, TestingModule } from '@nestjs/testing';
import { RedisExampleController} from './app.controller';
import { RedisExampleService } from './app.service';

describe('AppController', () => {
  let appController: RedisExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RedisExampleController],
      providers: [RedisExampleService],
    }).compile();

    appController = app.get<RedisExampleController>(RedisExampleService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
