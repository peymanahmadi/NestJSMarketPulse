import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SentimentService } from './sentiment.service';

class SentimentDto {
  text: string;
}

@ApiTags('sentiment')
@Controller('sentiment')
export class SentimentController {
  constructor(private sentimentService: SentimentService) {}

  @Post()
  @ApiOperation({ summary: 'Analyze sentiment of text' })
  @ApiResponse({ status: 200, description: 'Sentiment analysis result' })
  analyzeSentiment(@Body() body: SentimentDto) {
    // Mock sentiment analysis
    return this.sentimentService.analyze(body.text);
  }
}
