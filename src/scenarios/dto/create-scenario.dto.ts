import { IsArray, IsString } from 'class-validator';
export class CreateScenarioDto {
  @IsString()
  name: string;

  @IsString()
  source: string;
}
