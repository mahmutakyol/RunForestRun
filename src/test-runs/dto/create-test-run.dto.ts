import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Scenario } from 'src/scenarios/entities/scenario.entity';

export class CreateTestRunDto {
  @IsOptional()
  @IsArray()
  @ApiProperty()
  scenarios: Scenario[];

  @IsArray()
  @ApiProperty()
  artifacts: string[];

  @IsString()
  @ApiProperty()
  status: string;
}
