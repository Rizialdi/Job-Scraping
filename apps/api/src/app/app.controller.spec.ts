import { SeekService } from '@job-scraping/seek-service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EMode } from './dto/app.dto';

describe('AppController', () => {
  let app: TestingModule;
  let keyword: string;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, SeekService],
    }).compile();

    keyword = 'fullstack';
  });

  describe('#getVersion', () => {
    it('should return "v1.0.0"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getVersion()).toEqual({
        version: 'v1.0.0',
      });
    });
  });

  describe('#search', () => {
    it('should call the route /search to use "search"', async () => {
      const mockedSearch = jest
        .spyOn(SeekService.prototype, 'search')
        .mockResolvedValue([]);

      const appController = app.get<AppController>(AppController);

      const response = await appController.search({
        mode: EMode.ENDPOINT,
        keyword: keyword,
      });
      expect(response).toEqual([]);
      expect(mockedSearch).toHaveBeenNthCalledWith(1, keyword, 1);
    });

    it('should call the route /search to use "searchUsingBrowser"', async () => {
      const mockedSearch = jest
        .spyOn(SeekService.prototype, 'searchUsingBrowser')
        .mockResolvedValue([]);

      const appController = app.get<AppController>(AppController);

      const response = await appController.search({
        mode: EMode.BROWSER,
        keyword: keyword,
      });
      expect(response).toEqual([]);
      expect(mockedSearch).toHaveBeenNthCalledWith(1, keyword);
    });

    it('should throw an error when mode is not valid', async () => {
      jest
        .spyOn(SeekService.prototype, 'searchUsingBrowser')
        .mockRejectedValue(new Error('Formatting error'));

      const appController = app.get<AppController>(AppController);

      await expect(
        appController.search({
          mode: EMode.BROWSER,
          keyword: keyword,
        })
      ).rejects.toThrow();
    });
  });
});
