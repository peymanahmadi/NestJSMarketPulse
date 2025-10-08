import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  async getMockFinancialData(): Promise<{ text: string; entity: string }[]> {
    return [
      {
        text: 'Apple stock surges after new iPhone launch',
        entity: 'Apple',
      },
      {
        text: 'Tesla shares dip due to supply chain issues',
        entity: 'Tesla',
      },
    ];
  }

  async extractEntities(text: string): Promise<string[]> {
    // Simple regex-based entity extraction (to be enhanced later)
    const entities = text.match(/\b(Apple|Tesla)\b/gi) || [];
    return [...new Set(entities)]; // Reomve duplicates
  }
}
