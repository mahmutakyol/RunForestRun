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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.testRunsService.remove(id);
  }
}
