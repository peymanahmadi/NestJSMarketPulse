import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

class SentimentDto {
  text: string;
}

@ApiTags('sentiment')
@Controller('sentiment')
export class SentimentController {
  @Post()
  @ApiOperation({ summary: 'Analyze sentiment of text' })
  @ApiResponse({ status: 200, description: 'Sentiment analysis result' })
  analyzeSentiment(@Body() body: SentimentDto): { sentiment: string } {
    // Mock sentiment analysis
    return { sentiment: 'positive' };
  }
}
