import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { SentimentModule } from './sentiment/sentiment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisService } from './config/redis.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
  ],
  providers: [RedisService],
})
export class AppModule {}
