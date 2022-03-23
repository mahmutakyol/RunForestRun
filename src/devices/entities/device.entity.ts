import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ _id: false })
@ApiTags('devices')
export class Device {
  @Prop({ type: Types.ObjectId })
  @ApiProperty()
  _id: Types.ObjectId;

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
