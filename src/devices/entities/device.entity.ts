import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ _id: false })
export class Device {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

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
