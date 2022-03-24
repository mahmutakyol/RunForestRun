import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTestRunDto } from './dto/create-test-run.dto';
import { UpdateTestRunDto } from './dto/update-test-run.dto';
import { TestRun, TestRunDocument } from './entities/test-run.entity';
import { Model } from 'mongoose';
@Injectable()
export class TestRunsService {
  constructor(
    @InjectModel(TestRun.name) private model: Model<TestRunDocument>,
  ) {}

  async create(createTestRunDto: CreateTestRunDto) {
    const newTestRun = new this.model(createTestRunDto);
    return await newTestRun.save();
  }

  async findAll() {
    return await this.model
      .find({})
      .populate('services')
      .then((testRuns) => ({
        statusCode: 200,
        data: testRuns,
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
      .populate('scenarios')
      .then((testRun) => ({
        statusCode: 200,
        data: testRun,
      }))
      .catch((err) => ({
        statusCode: err.statusCode,
        message: [err.message],
        error: err,
      }));
  }

  async update(id: string, updateTestRunDto: UpdateTestRunDto) {
    return await this.model.findByIdAndUpdate(id, updateTestRunDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
