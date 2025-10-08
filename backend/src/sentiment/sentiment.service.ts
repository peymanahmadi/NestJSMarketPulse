import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataService } from 'src/data/data.service';
import { LlmService } from 'src/llm/llm.service';
import { Sentiment } from './schemas/sentiment/sentiment.schema';

@Injectable()
export class SentimentService {
  constructor(
    @InjectModel(Sentiment.name) private sentimentModel: Model<Sentiment>,
    private dataService: DataService,
    private llmService: LlmService
  ) {}

  async analyze(text: string): Promise<{ entity: string; sentiment: string }> {
    const entities = await this.dataService.extractEntities(text);
    const sentiment = await this.llmService.analyzeSentiment(text);
    const result = { entity: entities[0] || 'Unknown', sentiment };

    await this.sentimentModel.create({ ...result, text });
    return result;
  }
}
