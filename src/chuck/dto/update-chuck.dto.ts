import { PartialType } from '@nestjs/mapped-types';
import { CreateChuckDto } from './create-chuck.dto';

export class UpdateChuckDto extends PartialType(CreateChuckDto) {}
