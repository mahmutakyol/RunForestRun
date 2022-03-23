import { Module } from '@nestjs/common';
import { TestRunsService } from './test-runs.service';
import { TestRunsController } from './test-runs.controller';

@Module({
  controllers: [TestRunsController],
  providers: [TestRunsService]
})
export class TestRunsModule {}
