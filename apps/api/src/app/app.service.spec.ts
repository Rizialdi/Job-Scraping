import { SeekService } from '@job-scraping/seek-service';
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, SeekService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getVersion', () => {
    it('should return "v1.0.0"', () => {
      expect(service.getVersion()).toEqual({ version: 'v1.0.0' });
    });
  });
});
