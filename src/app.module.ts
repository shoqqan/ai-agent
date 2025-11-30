import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AnalyticsService } from './analytics/analytics.service';
import { LlmService } from './llm/llm.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, AnalyticsService, LlmService],
})
export class AppModule {}
