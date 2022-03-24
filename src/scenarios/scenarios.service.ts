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

  async create(createScenarioDto: CreateScenarioDto): Promise<Scenario> {
    const newScenario = new this.model(createScenarioDto);
    return await newScenario.save();
  }

  async findAll() {
    return await this.model
      .find({})
      .populate('devices')
      .then((scenarios) => ({
        statusCode: 200,
        data: scenarios,
      }))
      .catch((err) => ({
        statusCode: err.statusCode,
        message: [err.message],
        error: err,
      }));
  }

  async findOne(id: number) {
    return await this.model
      .find({ _id: id })
      .populate('devices')
      .then((scenarios) => ({
        statusCode: 200,
        data: scenarios,
      }))
      .catch((err) => ({
        statusCode: err.statusCode,
        message: [err.message],
        error: err,
      }));
  }

  async update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return await this.model.findByIdAndUpdate(id, updateScenarioDto, {
      new: true,
    });
  }

  async remove(id: number) {
    return await this.model.findByIdAndRemove(id);
  }
}
