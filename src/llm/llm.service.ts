import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';
import { ConfigService } from '@nestjs/config';
import { observe } from '@lmnr-ai/lmnr';
import { Anthropic } from '@anthropic-ai/sdk';

@Injectable()
export class LlmService {
  private grokClient: Groq;
  private antropicClient: Anthropic;

  constructor(private configService: ConfigService) {
    this.grokClient = new Groq({
      apiKey: configService.get<string>('GROQ_API_KEY'),
    });
    this.antropicClient = new Anthropic({
      apiKey: configService.get<string>('ANTROPIC_API_KEY'),
    });
  }

  chat(prompt: string) {
    return observe({ name: 'call_llm' }, async () => {
      // const completion = await this.grokClient.chat.completions.create({
      //   messages: [{ role: 'user', content: prompt }],
      //   model: 'llama-3.1-8b-instant',
      // });
      const msg = await this.antropicClient.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });
      return msg;
    });
  }
}
