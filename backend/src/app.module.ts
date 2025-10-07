import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { SentimentModule } from './sentiment/sentiment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisService } from './config/redis.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/marketpulse'),
    HealthModule,
    SentimentModule,
  ],
  providers: [RedisService],
})
export class AppModule {}
