import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { Scenario, ScenarioDocument } from './entities/scenario.entity';
import { Model } from 'mongoose';

@Injectable()
export class ScenariosService {
  constructor(
    @InjectModel(Scenario.name) private model: Model<ScenarioDocument>,
  ) {}

  create(createScenarioDto: CreateScenarioDto) {
    return 'This action adds a new scenario';
  }

  findAll() {
    return `This action returns all scenarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
