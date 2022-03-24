import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Device } from 'src/devices/entities/device.entity';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ScenarioDocument = Scenario & Document;

@Schema()
export class Scenario {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  source: string;

  @Prop({ type: [Types.ObjectId], ref: Device.name })
  @ApiProperty()
  devices: Device[];
}

export const ScenarioSchema = SchemaFactory.createForClass(Scenario);
