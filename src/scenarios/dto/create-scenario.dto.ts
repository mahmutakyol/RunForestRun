import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Device } from 'src/devices/entities/device.entity';
export class CreateScenarioDto {
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
