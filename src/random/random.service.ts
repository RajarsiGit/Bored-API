import { Injectable } from '@nestjs/common';
import { CreateRandomDto } from './dto/create-random.dto';
import { UpdateRandomDto } from './dto/update-random.dto';
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://www.boredapi.com/api/';

@Injectable()
export class RandomService {
  create(createRandomDto: CreateRandomDto) {
    return 'This action adds a new random';
  }

  async findAll(): Promise<AxiosResponse<any, any>> {
    try {
      const res = await axios.get(API_BASE_URL + 'activity/');
      return res;
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} random`;
  }

  update(id: number, updateRandomDto: UpdateRandomDto) {
    return `This action updates a #${id} random`;
  }

  remove(id: number) {
    return `This action removes a #${id} random`;
  }
}
