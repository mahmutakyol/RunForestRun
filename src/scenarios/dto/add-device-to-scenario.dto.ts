import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddDeviceToScenarioDto {
  @IsString()
  @ApiProperty()
  deviceId: string;
}
