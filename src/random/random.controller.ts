import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { RandomService } from './random.service';
import { CreateRandomDto } from './dto/create-random.dto';
import { UpdateRandomDto } from './dto/update-random.dto';
import { Response } from 'express';

@Controller('random')
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Post()
  create(@Body() createRandomDto: CreateRandomDto) {
    return this.randomService.create(createRandomDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.randomService.findAll();
    res.status(result.status).json(result.data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.randomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRandomDto: UpdateRandomDto) {
    return this.randomService.update(+id, updateRandomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.randomService.remove(+id);
  }
}
