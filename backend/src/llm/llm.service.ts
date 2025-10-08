import { Injectable } from '@nestjs/common';

@Injectable()
export class LlmService {
  async analyzeSentiment(text: string): Promise<string> {
    // Mock LLM response (replace with real LLM in later sprints)
    if (text.toLowerCase().includes('surge')) return 'positive';
    if (text.toLowerCase().includes('dip')) return 'negative';
    return 'neutral';
  }
}
