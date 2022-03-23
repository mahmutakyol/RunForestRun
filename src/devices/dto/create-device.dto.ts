import { IsString } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  name: string;

  @IsString()
  manufacturer: string;

  @IsString()
  model: string;

  @IsString()
  os: string;
}
