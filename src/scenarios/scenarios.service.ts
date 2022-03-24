import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { Scenario, ScenarioDocument } from './entities/scenario.entity';
import { Model, ObjectId } from 'mongoose';
import { AddDeviceToScenarioDto } from './dto/add-device-to-scenario.dto';

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

  async findOne(id: string) {
    return await this.model
      .find({ _id: id })
      .populate('devices')
      .then((scenario) => ({
        statusCode: 200,
        data: scenario,
      }))
      .catch((err) => ({
        statusCode: err.statusCode,
        message: [err.message],
        error: err,
      }));
  }

  async update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return await this.model.findByIdAndUpdate(id, updateScenarioDto, {
      new: true,
    });
  }

  async addDevice(id: string, addDeviceToScenarioDto: AddDeviceToScenarioDto) {
    return await this.model.findByIdAndUpdate(
      id,
      {
        $push: {
          devices: addDeviceToScenarioDto.deviceId,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
    );
  }

  async remove(id: string) {
    return await this.model.findByIdAndRemove(id);
  }
}
