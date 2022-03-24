import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Device } from 'src/devices/entities/device.entity';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type ScenarioDocument = Scenario & Document;

@Schema({ _id: false })
export class Scenario {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  source: string;

  @Prop({ type: [Types.ObjectId], ref: Device.name })
  devices: Device[];
}

export const ScenarioSchema = SchemaFactory.createForClass(Scenario);
