import { Module } from '@nestjs/common';
import { TestRunsService } from './test-runs.service';
import { TestRunsController } from './test-runs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestRun, TestRunSchema } from './entities/test-run.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TestRun.name, schema: TestRunSchema }]),
  ],
  controllers: [TestRunsController],
  providers: [TestRunsService],
})
export class TestRunsModule {}
