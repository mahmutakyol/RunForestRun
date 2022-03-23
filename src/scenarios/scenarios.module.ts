import { Module } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { ScenariosController } from './scenarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scenario, ScenarioSchema } from './entities/scenario.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Scenario.name, schema: ScenarioSchema },
    ]),
  ],
  controllers: [ScenariosController],
  providers: [ScenariosService],
})
export class ScenariosModule { }
