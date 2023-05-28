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
import { ChuckService } from './chuck.service';
import { CreateChuckDto } from './dto/create-chuck.dto';
import { UpdateChuckDto } from './dto/update-chuck.dto';
import { Response } from 'express';

@Controller('chuck')
export class ChuckController {
  constructor(private readonly chuckService: ChuckService) {}

  @Post()
  create(@Body() createChuckDto: CreateChuckDto) {
    return this.chuckService.create(createChuckDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.chuckService.findAll();
    res.status(result.status).json(result.data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chuckService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChuckDto: UpdateChuckDto) {
    return this.chuckService.update(+id, updateChuckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chuckService.remove(+id);
  }
}
