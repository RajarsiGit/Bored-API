import { Module } from '@nestjs/common';
import { ChuckService } from './chuck.service';
import { ChuckController } from './chuck.controller';

@Module({
  controllers: [ChuckController],
  providers: [ChuckService],
})
export class ChuckModule {}
