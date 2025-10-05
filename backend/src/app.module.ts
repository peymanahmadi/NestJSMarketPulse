import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { SentimentModule } from './sentiment/sentiment.module';

@Module({
  imports: [HealthModule, SentimentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
