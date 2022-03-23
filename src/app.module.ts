import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestRunsModule } from './test-runs/test-runs.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DevicesModule } from './devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MONGOPASS=QW7wYwtTLzCcfyJh
    MongooseModule.forRoot(
      'mongodb+srv://mahmutakyol:QW7wYwtTLzCcfyJh@cluster0.triyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    TestRunsModule,
    ScenariosModule,
    DevicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
