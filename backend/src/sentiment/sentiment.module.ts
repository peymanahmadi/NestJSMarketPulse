import { Module } from '@nestjs/common';
import { SentimentController } from './sentiment.controller';
import { SentimentService } from './sentiment.service';
import { DataService } from 'src/data/data.service';
import { LlmService } from 'src/llm/llm.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Sentiment,
  SentimentSchema,
} from './schemas/sentiment/sentiment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sentiment.name, schema: SentimentSchema },
    ]),
  ],
  controllers: [SentimentController],
  providers: [SentimentService, DataService, LlmService],
})
export class SentimentModule {}
