import { IsArray, IsOptional, IsString } from 'class-validator';
import { Scenario } from 'src/scenarios/entities/scenario.entity';

export class CreateTestRunDto {
  @IsOptional()
  @IsArray()
  scenarios: Scenario[];

  @IsArray()
  artifacts: string[];

  @IsString()
  status: string;
}
