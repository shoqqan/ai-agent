import { Injectable } from '@nestjs/common';
import { Laminar } from '@lmnr-ai/lmnr';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AnalyticsService {
  constructor(private configService: ConfigService) {}
  public init() {
    Laminar.initialize({
      projectApiKey: this.configService.get<string>('LAMINAR_PROJECT_API_KEY'),
      baseUrl: 'http://localhost',
      httpPort: 8000,
      grpcPort: 8001,
    });
  }
}
