import { IsArray, IsOptional, IsString } from 'class-validator';
import { Device } from 'src/devices/entities/device.entity';
export class CreateScenarioDto {
  @IsString()
  name: string;

  @IsString()
  source: string;

  @IsOptional()
  @IsArray()
  devices: Device[];
}
