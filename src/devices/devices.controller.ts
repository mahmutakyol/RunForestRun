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
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return await this.devicesService.create(createDeviceDto);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    return await this.devicesService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    return await this.devicesService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(202)
  async update(
    @Param('id') id: string,
    @Body() updateDeviceDto: UpdateDeviceDto,
  ): Promise<Device> {
    return await this.devicesService.update(id, updateDeviceDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    return await this.devicesService.remove(id);
  }
}
