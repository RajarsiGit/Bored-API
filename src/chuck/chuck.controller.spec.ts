import { Test, TestingModule } from '@nestjs/testing';
import { ChuckController } from './chuck.controller';
import { ChuckService } from './chuck.service';

describe('ChuckController', () => {
  let controller: ChuckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChuckController],
      providers: [ChuckService],
    }).compile();

    controller = module.get<ChuckController>(ChuckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
