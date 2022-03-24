import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
@ApiTags('devices')
export class Device {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  manufacturer: string;

  @Prop()
  @ApiProperty()
  model: string;

  @Prop()
  @ApiProperty()
  os: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
