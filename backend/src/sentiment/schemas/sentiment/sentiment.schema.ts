import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Sentiment extends Document {
  @Prop({ required: true })
  entity: string;

  @Prop({ required: true })
  sentiment: string;

  @Prop()
  text: string;
}

export const SentimentSchema = SchemaFactory.createForClass(Sentiment);
