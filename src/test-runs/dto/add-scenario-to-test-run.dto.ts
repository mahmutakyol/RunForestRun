import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddScenarioToTestRunDto {
  @IsString()
  @ApiProperty()
  scenarioId: string;
}
