import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Scenario } from 'src/scenarios/entities/scenario.entity';
import { CreateTestRunDto } from './create-test-run.dto';

export class UpdateTestRunDto extends PartialType(CreateTestRunDto) {
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
