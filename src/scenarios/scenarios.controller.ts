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
import { ScenariosService } from './scenarios.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { Scenario } from './entities/scenario.entity';
import { AddDeviceToScenarioDto } from './dto/add-device-to-scenario.dto';

@Controller('scenarios')
export class ScenariosController {
  constructor(private readonly scenariosService: ScenariosService) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() createScenarioDto: CreateScenarioDto,
  ): Promise<Scenario> {
    console.log(createScenarioDto);
    return await this.scenariosService.create(createScenarioDto);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    return await this.scenariosService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    return await this.scenariosService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(202)
  async update(
    @Param('id') id: string,
    @Body() updateScenarioDto: UpdateScenarioDto,
  ) {
    return await this.scenariosService.update(id, updateScenarioDto);
  }

  @Patch(':id/devices')
  @HttpCode(202)
  async addDevice(
    @Param('id') id: string,
    @Body() addDeviceToScenarioDto: AddDeviceToScenarioDto,
  ) {
    return await this.scenariosService.addDevice(id, addDeviceToScenarioDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    return await this.scenariosService.remove(id);
  }
}
