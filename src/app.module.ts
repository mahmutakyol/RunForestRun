import { Module } from '@nestjs/common';
import { TestRunsModule } from './test-runs/test-runs.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DevicesModule } from './devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/akbankcase'),
    TestRunsModule,
    ScenariosModule,
    DevicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
