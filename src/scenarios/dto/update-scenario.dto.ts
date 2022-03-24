import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Device } from 'src/devices/entities/device.entity';
import { CreateScenarioDto } from './create-scenario.dto';

export class UpdateScenarioDto extends PartialType(CreateScenarioDto) {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  source: string;

  @IsOptional()
  @IsArray()
  @ApiProperty()
  devices: Device[];
}
