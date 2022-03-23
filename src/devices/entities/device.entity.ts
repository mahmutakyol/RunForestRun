import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop()
  name: string;

  @Prop()
  manufacturer: string;

  @Prop()
  model: string;

  @Prop()
  os: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
