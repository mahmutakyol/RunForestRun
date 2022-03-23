import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestRunsService } from './test-runs.service';
import { CreateTestRunDto } from './dto/create-test-run.dto';
import { UpdateTestRunDto } from './dto/update-test-run.dto';

@Controller('test-runs')
export class TestRunsController {
  constructor(private readonly testRunsService: TestRunsService) {}

  @Post()
  create(@Body() createTestRunDto: CreateTestRunDto) {
    return this.testRunsService.create(createTestRunDto);
  }

  @Get()
  findAll() {
    return this.testRunsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testRunsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestRunDto: UpdateTestRunDto) {
    return this.testRunsService.update(+id, updateTestRunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testRunsService.remove(+id);
  }
}
