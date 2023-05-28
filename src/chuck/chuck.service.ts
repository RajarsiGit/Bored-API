import { Injectable } from '@nestjs/common';
import { CreateChuckDto } from './dto/create-chuck.dto';
import { UpdateChuckDto } from './dto/update-chuck.dto';
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://api.chucknorris.io/jokes/';

@Injectable()
export class ChuckService {
  create(createChuckDto: CreateChuckDto) {
    return 'This action adds a new chuck';
  }

  async findAll(): Promise<AxiosResponse<any, any>> {
    try {
      const res = await axios.get(API_BASE_URL + 'random/');
      return res;
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} chuck`;
  }

  update(id: number, updateChuckDto: UpdateChuckDto) {
    return `This action updates a #${id} chuck`;
  }

  remove(id: number) {
    return `This action removes a #${id} chuck`;
  }
}
