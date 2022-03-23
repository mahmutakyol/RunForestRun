import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestRunsModule } from './test-runs/test-runs.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [TestRunsModule, ScenariosModule, DevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
