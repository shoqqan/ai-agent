import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LlmService {
  private client: Groq;
  constructor(private configService: ConfigService) {
    this.client = new Groq({
      apiKey: configService.get<string>('GROQ_API_KEY'),
    });
  }

  async chat(prompt: string) {
    const completion = await this.client.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.1-8b-instant',
    });
    return completion.choices[0].message.content;
  }
}
