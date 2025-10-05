import { Body, Controller, Post } from '@nestjs/common';

@Controller('sentiment')
export class SentimentController {
  @Post()
  analyzeSentiment(@Body() body: { text: string }): { sentiment: string } {
    // Mock sentiment analysis
    return { sentiment: 'positive' };
  }
}
