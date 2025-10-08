import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';
import { LlmService } from 'src/llm/llm.service';

@Injectable()
export class SentimentService {
  constructor(
    private dataService: DataService,
    private llmService: LlmService
  ) {}

  async analyze(text: string): Promise<{ entity: string; sentiment: string }> {
    const entities = await this.dataService.extractEntities(text);
    const sentiment = await this.llmService.analyzeSentiment(text);
    return { entity: entities[0] || 'Unknown', sentiment: ''};
  }
}
