import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device, DeviceDocument } from './entities/device.entity';
import { Model } from 'mongoose';

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device.name) private model: Model<DeviceDocument>) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const newDevice = new this.model(createDeviceDto);
    return await newDevice.save();
  }

  async findAll() {
    return await this.model
      .find({})
      .then((devices) => ({
        statusCode: 200,
        data: devices,
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
      .then((devices) => ({
        statusCode: 200,
        data: devices,
      }))
      .catch((err) => ({
        statusCode: err.statusCode,
        message: [err.message],
        error: err,
      }));
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    return await this.model.findByIdAndUpdate(id, updateDeviceDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.model.findByIdAndRemove(id);
  }
}
