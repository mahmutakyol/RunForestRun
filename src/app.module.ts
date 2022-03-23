import { Module } from '@nestjs/common';
import { TestRunsModule } from './test-runs/test-runs.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DevicesModule } from './devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MONGOPASS=QW7wYwtTLzCcfyJh
    // 'mongodb+srv://mahmutakyol:QW7wYwtTLzCcfyJh@cluster0.triyp.mongodb.net/akbankCase?retryWrites=true&w=majority',
    MongooseModule.forRoot('mongodb://localhost:27018/akbankcase'),
    TestRunsModule,
    ScenariosModule,
    DevicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
