import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomModule } from './random/random.module';
import { ChuckModule } from './chuck/chuck.module';

@Module({
  imports: [RandomModule, ChuckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
