import { Injectable, OnModuleInit } from '@nestjs/common';
import { AnalyticsService } from './analytics/analytics.service';
import { Laminar, observe } from '@lmnr-ai/lmnr';
import { ConfigService } from '@nestjs/config';
import Groq from 'groq-sdk';
import { LlmService } from './llm/llm.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private configService: ConfigService,
    private analyticsService: AnalyticsService,
    private llmService: LlmService,
  ) {}
  onModuleInit() {
    this.analyticsService.init();
  }

  getDummyResponse() {
    return observe({ name: 'get_dummy_response' }, () => {
      return 'dummy response';
    });
  }
  callLLM() {
    return observe({ name: 'call_llm' }, () => {
      return this.llmService.chat('What is the meaning of life?');
    });
  }
}
