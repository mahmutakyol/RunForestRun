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

  create(createTestRunDto: CreateTestRunDto) {
    return 'This action adds a new testRun';
  }

  findAll() {
    return `This action returns all testRuns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testRun`;
  }

  update(id: number, updateTestRunDto: UpdateTestRunDto) {
    return `This action updates a #${id} testRun`;
  }

  remove(id: number) {
    return `This action removes a #${id} testRun`;
  }
}
