import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getDummyResponse() {
    return await this.appService.getDummyResponse();
  }

  @Get('/call-llm')
  async callLLM() {
    return await this.appService.callLLM();
  }
}
