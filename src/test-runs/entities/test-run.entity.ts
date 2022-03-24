import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Scenario } from 'src/scenarios/entities/scenario.entity';

export type TestRunDocument = TestRun & Document;

@Schema()
export class TestRun {
  @Prop({ type: [Types.ObjectId], ref: Scenario.name })
  scenarios: Scenario[];

  @Prop()
  artifacts: string[];

  @Prop()
  status: string;
}

export const TestRunSchema = SchemaFactory.createForClass(TestRun);
