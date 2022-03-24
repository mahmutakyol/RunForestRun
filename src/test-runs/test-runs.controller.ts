import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TestRunsService } from './test-runs.service';
import { CreateTestRunDto } from './dto/create-test-run.dto';
import { UpdateTestRunDto } from './dto/update-test-run.dto';
import { TestRun } from './entities/test-run.entity';
import { AddScenarioToTestRunDto } from './dto/add-scenario-to-test-run.dto';

@Controller('test-runs')
export class TestRunsController {
  constructor(private readonly testRunsService: TestRunsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createTestRunDto: CreateTestRunDto): Promise<TestRun> {
    return this.testRunsService.create(createTestRunDto);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    return await this.testRunsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.testRunsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTestRunDto: UpdateTestRunDto,
  ): Promise<TestRun> {
    return await this.testRunsService.update(id, updateTestRunDto);
  }

  @Patch(':id/scenarios')
  @HttpCode(202)
  async addScenario(
    @Param('id') id: string,
    @Body() addScenarioToTestRunDto: AddScenarioToTestRunDto,
  ) {
    return await this.testRunsService.addScenario(id, addScenarioToTestRunDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.testRunsService.remove(id);
  }
}
