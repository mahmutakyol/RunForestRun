import { PartialType } from '@nestjs/mapped-types';
import { CreateTestRunDto } from './create-test-run.dto';

export class UpdateTestRunDto extends PartialType(CreateTestRunDto) {}
