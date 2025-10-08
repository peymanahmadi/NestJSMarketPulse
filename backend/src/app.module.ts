import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { SentimentModule } from './sentiment/sentiment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisService } from './config/redis.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataService } from './data/data.service';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    HealthModule,
    SentimentModule,
    DataModule,
  ],
  providers: [RedisService, DataService],
})
export class AppModule {}
